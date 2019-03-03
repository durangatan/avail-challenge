class SecretsController < ApplicationController
  include Response

  def create
    @secret = Secret.create(secret_params)
    json_response(@secret)
  end

  private

  def secret_params
    params.require(:secret).permit(:mmn, :ssn, :id)
  end
end
