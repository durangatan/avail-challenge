class LandlordsController < ApplicationController
  before_action :set_landlord, only: [:show]

  def update
    landlord = Landlord.find_or_create_by(landlord_params)
    landlord.update(landlord_params)
    json_response(landlord)
  end

  def show
    json_response(@landlord)
  end

  private

  def landlord_params
    params.permit(:id, :name, :email)
  end

  def set_landlord
    @landlord = Landlord.find(params[:id])
  end
end
