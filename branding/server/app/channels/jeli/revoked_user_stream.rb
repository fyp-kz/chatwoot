module Jeli::RevokedUserStream
  def transmit(*args, **kwargs)
    # 4.17.1 caches RoomChannel's user and has no Connection identifiers to disconnect by user.
    # Recheck the persisted cable credential before sending any event from an existing subscription.
    if @current_user.is_a?(User) && !User.exists?(id: @current_user.id, pubsub_token: params[:pubsub_token])
      stop_all_streams
      connection.close(reconnect: false)
      return
    end

    super
  end
end
