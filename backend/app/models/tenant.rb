class Tenant < ApplicationRecord
	has_one :tenant_secret
	belongs_to :user
	belongs_to :landlord
	before_create :generate_token

	def generate_token
	  loop do
		self.auth_token = SecureRandom.base64(64)
		break unless Customer.find_by(auth_token: auth_token)
	  end
	end
end
