class UsersController < ApplicationController
  def create
    @param_user = User.create!(user_params)

    respond_to do |format|
        if @param_user.save
          # Tell the UserMailer to send a welcome email after save
          token = Tenant.new(user:@param_user).token
          PublicTenantLinkMailer.with(user: @param_user, token: token).welcome_email.deliver_now
          format.json { render json: @param_user, status: :created, location: @param_user }
        else
          format.json { render json: @param_user.errors, status: :unprocessable_entity }
        end
      end
  end

  private
  def user_params
    params.require(:email, :password)
  end
end
