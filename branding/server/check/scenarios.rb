# Run only in check/compose.yaml's throwaway stack, never against a real server.
require 'net/http'
require 'json'
require 'digest'
require 'socket'
require 'websocket/driver'

abort 'Synthetic database required' unless ActiveRecord::Base.connection_db_config.database == 'jeli_b0_synthetic'
Rails.logger.level = Logger::FATAL
ActiveJob::Base.logger = Logger.new(File::NULL)

class B0CableProbe
  attr_reader :frames

  def initialize(user, account)
    @socket = TCPSocket.new('127.0.0.1', 3000)
    @frames = []
    @closed = false
    @driver = WebSocket::Driver.client(self, protocols: ['actioncable-v1-json'])
    @driver.set_header('Origin', 'http://localhost:3000')
    @driver.on(:message) { |event| @frames << JSON.parse(event.data) }
    @driver.on(:close) { @closed = true }
    @driver.on(:open) do
      @driver.text(JSON.generate(command: 'subscribe', identifier: JSON.generate(
        channel: 'RoomChannel', user_id: user.id, account_id: account.id, pubsub_token: user.pubsub_token
      )))
    end
    @driver.start
    wait { @frames.any? { |frame| frame['type'] == 'confirm_subscription' } }
  end

  def url
    'ws://localhost:3000/cable'
  end

  def write(data)
    @socket.write(data)
  end

  def wait
    deadline = Process.clock_gettime(Process::CLOCK_MONOTONIC) + 5
    until yield
      raise 'websocket evidence timed out' if Process.clock_gettime(Process::CLOCK_MONOTONIC) >= deadline
      next unless IO.select([@socket], nil, nil, 0.1)

      data = @socket.read_nonblock(65536, exception: false)
      if data.nil?
        @closed = true
      elsif data != :wait_readable
        @driver.parse(data)
      end
    end
  end

  def event?(name)
    @frames.any? { |frame| frame.dig('message', 'event') == name }
  end

  def closed?
    @closed
  end

  def close
    @socket.close
  end
end

class B0Check
  PASSWORD = SecureRandom.hex(20) + 'aA1!'

  def assert(condition, label)
    raise label unless condition
  end

  def request(method, path, headers = {}, body = nil)
    req = Net::HTTP.const_get(method.capitalize).new(path, headers.merge('Content-Type' => 'application/json'))
    req.body = JSON.generate(body) if body
    Net::HTTP.start('127.0.0.1', 3000, open_timeout: 5, read_timeout: 15) { |http| http.request(req) }
  end

  def user(type = User)
    type.create!(name: 'B0 synthetic', email: "b0-#{SecureRandom.uuid}@example.invalid",
                 password: PASSWORD, password_confirmation: PASSWORD, confirmed_at: Time.current)
  end

  def auth(user)
    # Mint the same DTA headers as login, without logging any credentials.
    user.create_new_auth_token
  end

  def workspace(user, role, others = [])
    account = Account.create!(name: "B0 synthetic #{SecureRandom.hex(4)}")
    AccountUser.create!(account: account, user: user, role: role)
    others.each_with_index do |(member, member_role), index|
      AccountUser.create!(account: account, user: member, role: member_role, created_at: (10 - index).minutes.ago)
    end
    account
  end

  def subscription(user)
    user.notification_subscriptions.create!(identifier: SecureRandom.uuid, subscription_type: :fcm, subscription_attributes: {})
  end

  def snapshot(user)
    # Compare exact serialized raw DB rows, including encrypted columns/tokens; print no row data.
    connection = ActiveRecord::Base.connection
    sql = ["SELECT * FROM users WHERE id = #{user.id}",
           "SELECT * FROM account_users WHERE user_id = #{user.id} ORDER BY id",
           "SELECT * FROM notification_subscriptions WHERE user_id = #{user.id} ORDER BY id"]
    Marshal.dump(sql.map { |query| connection.exec_query(query).to_a })
  end

  def rejected_unchanged(user, headers, body, status)
    before = snapshot(user)
    response = request('delete', '/api/v1/profile', headers, body)
    assert(response.code.to_i == status, "expected #{status}, got #{response.code}")
    assert(snapshot(user) == before, 'rejected request changed raw DB snapshot')
  end

  def deleted(user, headers, expected)
    response = request('delete', '/api/v1/profile', headers, { password: PASSWORD })
    assert(response.code == '202', "DELETE expected 202, got #{response.code}")
    result = JSON.parse(response.body)
    assert(result == { 'deleted' => true, 'workspaces' => expected }, 'preview/DELETE mismatch')
    user.reload
    assert(user.tokens.empty?, 'tokens not wiped')
    assert(user.notification_subscriptions.empty?, 'subscriptions not destroyed synchronously')
    assert(user.account_users.empty?, 'membership remains')
    assert(!user.valid_password?(PASSWORD), 'old password still valid')
    assert(request('get', '/api/v1/profile', headers).code == '401', 'old token accepted')
    login = request('post', '/auth/sign_in', {}, { email: headers['uid'], password: PASSWORD })
    assert(login.code == '401', "old login accepted: #{login.code}")
    job = Sidekiq::Queue.new('low').find do |item|
      item.item.dig('args', 0, 'job_class') == 'DeleteObjectJob' &&
        item.item.dig('args', 0, 'arguments', 0, '_aj_globalid') == user.to_global_id.to_s
    end
    assert(job, 'DeleteObjectJob(User) not queued')
  end

  def preview(user, headers, account, outcome)
    response = request('get', '/api/v1/profile/deletion', headers)
    assert(response.code == '200', "preview expected 200, got #{response.code}")
    expected = [{ 'account_id' => account.id, 'name' => account.name,
                  'role' => user.account_users.find_by!(account: account).role, 'outcome' => outcome }]
    assert(JSON.parse(response.body) == expected, 'unexpected preview')
    expected
  end

  def run
    require 'sidekiq/api'
    cases = {
      1 => -> {
        target, other = user, user
        account = workspace(target, :agent, [[other, :administrator]])
        subscription(target)
        headers = auth(target)
        expected = preview(target, headers, account, 'membership_removed')
        deleted(target, headers, expected)
        assert(account.reload.custom_attributes['marked_for_deletion_at'].nil?, 'team marked for deletion')
        assert(account.users.pluck(:id) == [other.id], 'other user removed')
      },
      2 => -> {
        target = user
        account = workspace(target, :administrator)
        headers = auth(target)
        expected = preview(target, headers, account, 'workspace_deleted')
        deleted(target, headers, expected)
        attributes = account.reload.custom_attributes
        assert(Time.iso8601(attributes.fetch('marked_for_deletion_at')) <= Time.current, 'wrong deletion time')
        assert(attributes['marked_for_deletion_reason'] == 'user_self_delete', 'wrong deletion reason')
        Internal::DeleteAccountsJob.perform_now
        job = Sidekiq::Queue.new('low').find do |item|
          item.item.dig('args', 0, 'job_class') == 'DeleteObjectJob' &&
            item.item.dig('args', 0, 'arguments', 0, '_aj_globalid') == account.to_global_id.to_s
        end
        assert(job, 'core scheduled deletion did not enqueue account')
      },
      3 => -> {
        target, earliest, later = user, user, user
        account = workspace(target, :administrator, [[earliest, :agent], [later, :agent]])
        headers = auth(target)
        expected = preview(target, headers, account, 'admin_promoted')
        deleted(target, headers, expected)
        assert(account.account_users.find_by!(user: earliest).administrator?, 'earliest member not promoted')
        assert(account.account_users.find_by!(user: later).agent?, 'later member promoted')
        assert(account.reload.custom_attributes['marked_for_deletion_at'].nil?, 'workspace marked')
      },
      4 => -> {
        target, other, agent = user, user, user
        account = workspace(target, :administrator, [[agent, :agent], [other, :administrator]])
        headers = auth(target)
        expected = preview(target, headers, account, 'membership_removed')
        deleted(target, headers, expected)
        assert(account.account_users.find_by!(user: agent).agent?, 'unnecessary promotion')
        assert(account.account_users.find_by!(user: other).administrator?, 'other admin changed')
      },
      5 => -> {
        target = user
        workspace(target, :administrator)
        subscription(target)
        headers = auth(target)
        rejected_unchanged(target, headers, { password: SecureRandom.hex(16) }, 422)
        puts '  wrong-password snapshot: byte-identical'
      },
      6 => -> {
        target = user
        workspace(target, :administrator)
        subscription(target)
        headers = auth(target)
        target.update!(otp_required_for_login: true, otp_secret: User.generate_otp_secret)
        rejected_unchanged(target, headers, { password: PASSWORD }, 422)
        wrong_otp = format('%06d', (target.current_otp.to_i + 1) % 1_000_000)
        rejected_unchanged(target, headers, { password: PASSWORD, otp: wrong_otp }, 422)
        expected = JSON.parse(request('get', '/api/v1/profile/deletion', headers).body)
        response = request('delete', '/api/v1/profile', headers, { password: PASSWORD, otp: target.current_otp })
        assert(response.code == '202', "valid OTP rejected: #{response.code}")
        assert(JSON.parse(response.body)['workspaces'] == expected, 'MFA preview mismatch')
        assert(target.reload.tokens.empty?, 'MFA tokens remain')
        assert(target.notification_subscriptions.empty?, 'MFA subscriptions remain')
      },
      7 => -> {
        target = user(SuperAdmin)
        workspace(target, :administrator)
        headers = auth(target)
        rejected_unchanged(target, headers, { password: PASSWORD }, 403)
        assert(request('get', '/api/v1/profile/deletion', headers).code == '403', 'SuperAdmin preview allowed')
      },
      8 => -> {
        # This also runs for every successful non-MFA deletion in cases 1–4.
        target = user
        headers = auth(target)
        deleted(target, headers, [])
        DeleteObjectJob.perform_now(target)
        assert(!User.exists?(target.id), 'DeleteObjectJob did not destroy User')
        assert(request('get', '/api/v1/profile', headers).code == '401', 'destroyed User token accepted')
      },
      9 => -> { puts '  exact preview/DELETE equality checked in cases 1–4' },
      10 => -> {
        target = user
        workspace(target, :administrator)
        assert(request('get', '/api/v1/profile', auth(target)).code == '200', 'existing profile broken')
      },
      11 => -> {
        target, earliest, later = user, user, user
        sole = workspace(target, :administrator)
        team = workspace(target, :administrator, [[earliest, :agent], [later, :agent]])
        subscription(target)
        headers = auth(target)
        before = snapshot(target)
        account_rows = Marshal.dump([sole.reload.attributes, team.account_users.order(:id).map(&:attributes)])
        queue_size = Sidekiq::Queue.new('low').size
        db = ActiveRecord::Base.connection
        begin
          db.execute(<<~SQL)
            CREATE FUNCTION b0_fail_deletion() RETURNS trigger LANGUAGE plpgsql AS $$
            BEGIN
              IF OLD.id = #{target.id} AND NEW.encrypted_password = '' THEN
                RAISE EXCEPTION 'B0 injected rollback';
              END IF;
              RETURN NEW;
            END $$;
            CREATE TRIGGER b0_fail_deletion BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION b0_fail_deletion();
          SQL
          assert(request('delete', '/api/v1/profile', headers, { password: PASSWORD }).code == '500', 'fault not reached')
          assert(snapshot(target) == before, 'partial user/membership/subscription write')
          assert(Marshal.dump([sole.reload.attributes, team.account_users.reload.order(:id).map(&:attributes)]) == account_rows,
                 'partial workspace mark/promotion')
          assert(Sidekiq::Queue.new('low').size == queue_size, 'destructive job escaped rollback')
          assert(request('get', '/api/v1/profile', headers).code == '200', 'rollback revoked login')
        ensure
          db.execute('DROP TRIGGER IF EXISTS b0_fail_deletion ON users; DROP FUNCTION IF EXISTS b0_fail_deletion()')
        end
      },
      12 => -> {
        target, observer = user, user
        account = workspace(target, :agent, [[observer, :administrator]])
        headers = auth(target)
        old_pubsub = target.pubsub_token
        cable = B0CableProbe.new(target, account)
        other_cable = B0CableProbe.new(observer, account)
        begin
          ActionCable.server.broadcast("account_#{account.id}", { event: 'b0.before' })
          cable.wait { cable.event?('b0.before') }
          expected = preview(target, headers, account, 'membership_removed')
          deleted(target, headers, expected)
          ActionCable.server.broadcast("account_#{account.id}", { event: 'b0.after' })
          ActionCable.server.broadcast(old_pubsub, { event: 'b0.private.after' })
          cable.wait { cable.closed? }
          other_cable.wait { other_cable.event?('b0.after') }
          assert(!cable.event?('b0.after') && !cable.event?('b0.private.after'), 'revoked cable received events')
          assert(!other_cable.closed?, 'other user cable disconnected')
        ensure
          cable.close
          other_cable.close
        end
      }
    }
    selected = ENV['B0_CASE']&.to_i
    failures = []
    cases.each do |number, check|
      next if selected && number != selected
      begin
        check.call
        puts "CASE #{number}: PASS exit=0"
      rescue StandardError => e
        # Assertion text contains only synthetic status/evidence, never request/response dumps.
        puts "CASE #{number}: FAIL exit=1 #{e.class}: #{e.message.lines.first.to_s.strip}"
        failures << number
      end
    end
    puts "MATRIX #{failures.empty? ? 'PASS' : 'FAIL'} exit=#{failures.empty? ? 0 : 1}"
    exit(failures.empty? ? 0 : 1)
  end
end

B0Check.new.run
