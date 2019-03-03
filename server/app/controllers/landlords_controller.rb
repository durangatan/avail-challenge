class LandlordsController < ApplicationController
  def update
    landlord = Landlord.find_or_create_by(landlord_params)
    landlord.update(landlord_params)
    head :no_content
  end

  def show
    @landlord = Landlord.find(params[:id])
    json_response(@landlord)
  end

  private

  def landlord_params
    params.require(:landlord).permit(:id, :name, :email)
  end
end
