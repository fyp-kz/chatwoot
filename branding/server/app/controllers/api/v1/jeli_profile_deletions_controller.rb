class Api::V1::JeliProfileDeletionsController < Api::BaseController
  # A deletion must never refresh authentication or reload an asynchronously destroyed user.
  skip_after_action :update_auth_header

  before_action :reject_super_admin

  def show
    render json: Jeli::ProfileDeletionService.new(current_user).preview
  end

  def destroy
    credentials = params.permit(:password, :otp)
    workspaces = Jeli::ProfileDeletionService.new(current_user).perform(**credentials.to_h.symbolize_keys)
    render json: { deleted: true, workspaces: workspaces }, status: :accepted
  rescue Jeli::ProfileDeletionService::InvalidCredentials
    render json: { error: 'Invalid password or OTP' }, status: :unprocessable_entity
  end

  private

  def reject_super_admin
    head :forbidden if current_user.is_a?(SuperAdmin)
  end
end
