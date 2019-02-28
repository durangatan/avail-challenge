class PublicTenantLinkMailer < ApplicationMailer
	default from: 'welcome@tenants.com'
 
	def welcome_email
	  @user = params[:user]
	  @token = params[:token]
	  @url  = "http://localhost:3001/tenants/#{@user.id}?token=#{@token}"
	  mail(to: @user.email, subject: 'Your Public Application Link')
	end
end
