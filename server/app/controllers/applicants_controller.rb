class ApplicantsController < ApplicationController
  include ActionController::MimeResponds

  before_action :set_applicant, only: [:update, :destroy, :check_token, :show]
  before_action :authenticate_applicant!, only: [:update, :destroy]

  def index
    @applicants = Applicant.where(submitted: true).includes(:landlord).limit(50)
    json_response(@applicants)
  end

  def create
    @applicant = Applicant.create!(applicant_params)
    respond_to do |format|
      if @applicant.save
        # Tell the AdminMailer to send a welcome email after save
        PublicTenantLinkMailer.with(applicant: @applicant).welcome_email.deliver_now
        format.json { render json: @applicant, status: :created, location: @applicant }
      else
        format.json { render json: @applicant.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    json_response(@applicant)
  end

  def update
    @applicant.update(applicant_params)
    json_response(@applicant)
  end

  def destroy
    @applicant.destroy
    head :no_content
  end

  def check_token
    if @applicant.token == params[:token] && !@applicant.submitted
      json_response({ token: params[:token] })
    else
      json_response({}, :unauthorized)
    end
  end

  private

  def applicant_params
    params.permit(:id, :dob, :employment_status, :has_pets, :submitted, :token, :name, :email, :landlord_id)
  end

  def set_applicant
    @applicant = Applicant.find(params[:id])
  end
end
