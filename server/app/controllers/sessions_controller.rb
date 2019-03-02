class SessionsController < ApplicationController
  before_action :set_user

  def create
    if @param_user && @param_user.authenticate(create_params[:password])
      return render json: SessionsSerializer.new(@param_user).to_json
    else
      return json_response({ message: 'Unable to authenticate' }, :unprocessable_entity)
    end
  end

  def destroy
    return json_response(0)
  end

  private
  def create_params
    params.permit(:email, :password)
  end
  def set_user
    @param_user = User.find_by_email(create_params[:email])
  end

end
