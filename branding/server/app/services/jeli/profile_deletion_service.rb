class Jeli::ProfileDeletionService
  class InvalidCredentials < StandardError; end

  def initialize(user)
    @user = user
  end

  def preview
    @user.with_lock { plans.map { |plan| plan.fetch(:summary) } }
  end

  def perform(password: nil, otp: nil)
    workspaces = @user.with_lock do
      raise InvalidCredentials unless password.is_a?(String) && @user.valid_password?(password)
      if @user.mfa_enabled?
        raise InvalidCredentials unless otp.is_a?(String) && otp.match?(/\A\d{6}\z/) &&
                                       Mfa::AuthenticationService.new(user: @user, otp_code: otp).authenticate
      end

      changes = plans
      changes.each { |plan| apply(plan) }
      @user.notification_subscriptions.find_each(&:destroy!)
      @user.access_token.destroy!
      disable_login!
      changes.map { |plan| plan.fetch(:summary) }
    end

    # Never publish a destructive job before the SQL transaction has committed.
    DeleteObjectJob.perform_later(@user)
    workspaces
  end

  private

  def plans
    # Stable account/row order serializes simultaneous self-deletions in shared workspaces.
    @user.accounts.order(:id).lock.map do |account|
      members = account.account_users.order(:created_at, :id).lock.to_a
      membership = members.find { |member| member.user_id == @user.id }
      outcome = if members.one?
                  'workspace_deleted'
                elsif membership.administrator? && members.count(&:administrator?) == 1
                  'admin_promoted'
                else
                  'membership_removed'
                end
      { account: account, membership: membership, members: members,
        summary: { account_id: account.id, name: account.name, role: membership.role, outcome: outcome } }
    end
  end

  def apply(plan)
    account = plan.fetch(:account)
    case plan.fetch(:summary).fetch(:outcome)
    when 'workspace_deleted'
      account.update!(custom_attributes: account.custom_attributes.merge(
        'marked_for_deletion_at' => Time.current.iso8601,
        'marked_for_deletion_reason' => 'user_self_delete'
      ))
    when 'admin_promoted'
      plan.fetch(:members).find { |member| member.user_id != @user.id }.update!(role: :administrator)
    end
    # AccountUser#after_destroy enqueues cleanup before commit in 4.17.1, even on rollback.
    # User's eventual core destruction cleans its inbox/team/settings associations instead.
    plan.fetch(:membership).delete
  end

  def disable_login!
    # Remove email/SSO lookup, password recovery, MFA challenges and cable credentials immediately.
    tombstone = "#{@user.id}-#{SecureRandom.hex(16)}@chatwoot-deleted.invalid"
    @user.skip_reconfirmation!
    @user.update!(email: tombstone, uid: tombstone, encrypted_password: '', tokens: {},
                  reset_password_token: nil, confirmation_token: nil, unconfirmed_email: nil,
                  otp_secret: nil, otp_backup_codes: [], otp_required_for_login: false,
                  pubsub_token: SecureRandom.base58(24))
  end
end
