class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only:[:index, :destroy, :show, :update]
  before_action :admin_only!, only: [:index, :destroy]
  before_action :self_only!, only: [:show, :update]

  def index
    @users = User.all
    json_response(@users)
  end

  def show
    render json: @param_user.to_json
  end

  def create
    @param_user = User.create!(user_params)
    json_response(@param_user, :created)
  end

  def update
    @param_user.update(user_params)
    head :no_content
  end


  def destroy
    @param_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:email, :password, :name, :phone, :verified_email, :braintree_user_id)
  end

  def set_user
    @param_user = User.find(params[:id])
  end

  def self_only!
    return json_response({}, :unauthorized) unless (@user.id == @param_user.id) || @user.admin
  end
end
