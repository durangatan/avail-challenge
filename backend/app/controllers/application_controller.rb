class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  def authenticate_tenant!
    token = request.params["token"]
    @tenant = Tenant.find_by(token: token)

    json_response({}, :unauthorized) unless @tenant and !@tenant.submitted
  end

  def admin_only!
    json_response({}, :unauthorized) unless @user && @user.admin
  end

  def properties
    ApplicationProperty.first.to_json
  end
end
