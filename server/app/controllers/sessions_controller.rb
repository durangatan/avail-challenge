class SessionsController < ApplicationController
  before_action :set_user

  def create
    if @param_user && @param_user.authenticate(create_params[:password])
      json_response(@param_user)
    else
      json_response({ message: "Unable to authenticate" }, :unprocessable_entity)
    end
  end

  def destroy
    json_response(0)
  end

  private

  def create_params
    params.permit(:email, :password)
  end

  def set_user
    @param_user = Admin.find_by_email(create_params[:email])
  end
end
