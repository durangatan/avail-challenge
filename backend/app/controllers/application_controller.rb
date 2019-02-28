class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  def authenticate_applicant!
    token = request.params["token"]
    @applicant = Applicant.find_by(token: token)

    json_response({}, :unauthorized) unless @applicant and !@applicant.submitted
  end

  def admin_only!
    json_response({}, :unauthorized) unless @admin
  end

  def properties
    ApplicationProperty.first.to_json
  end
end
