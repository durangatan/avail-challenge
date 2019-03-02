class PublicTenantLinkMailer < ApplicationMailer
  default from: ENV["GMAIL_ADDRESS"]

  def welcome_email
    @applicant = params[:applicant]
    @url = "http://localhost:3001/apply/#{@applicant.id}?token=#{@applicant.token}"
    mail(to: @applicant.email, subject: "Your Public Application Link")
  end
end
