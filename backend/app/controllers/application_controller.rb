class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  def authenticate_customer!
    token = request.headers["Authorization"]
    @customer = Customer.find_by(auth_token: token)

    return json_response({}, :unauthorized) unless @customer
  end

  def admin_only!
    return json_response({}, :unauthorized) unless @customer && @customer.admin
  end
end
