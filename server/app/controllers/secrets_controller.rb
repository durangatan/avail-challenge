class SecretsController < ApplicationController
  include Response

  def create
    @secret = Secret.create(secret_params)
    json_response(@secret)
  end

  private

  def secret_params
    params.permit(:mmn, :ssn, :applicant_id)
  end
end
