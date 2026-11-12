Rails.application.routes.append do
  get '/api/v1/profile/deletion', to: 'api/v1/jeli_profile_deletions#show'
  delete '/api/v1/profile', to: 'api/v1/jeli_profile_deletions#destroy'
end

Rails.application.config.to_prepare do
  RoomChannel.prepend(Jeli::RevokedUserStream)
end
