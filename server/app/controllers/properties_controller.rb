class PropertiesController < ApplicationController
  before_action :set_properties, only: [:update]

  def index
    json_response(ApplicationProperty.first.to_json, :ok)
  end

  def update
    @properties.update(property_params)
    json_response(@properties)
  end

  private

  def property_params
    params.permit(:id, :theme_color_hex, :form_type)
  end

  def set_properties
    @properties = ApplicationProperty.find(params[:id])
  end
end
