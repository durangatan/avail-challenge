class ApplicantsController < ApplicationController
  before_action :set_applicant, only: [:show, :update, :destroy]
  before_action :authenticate_applicant!, only: [:create, :update, :destroy]

  def index
    @applicants = Applicant.includes(:landlord).limit(50)
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
    head :no_content
  end

  def destroy
    @applicant.destroy
    head :no_content
  end

  private

  def applicant_params
    params.permit(:id, :dob, :employment_status, :has_pets, :landlord, :submitted, :token, :name, :email)
  end

  def set_applicant
    @applicant = Applicant.includes(:landlord).find(params[:id])
  end
end
