class Applicant < ApplicationRecord
	has_one :secret
	belongs_to :landlord
	before_create :generate_token

	validates :name, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true, format:{ with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i}
	validates :employment_status, inclusion: { in: %w(Employed Unemployed),
	message: "%{value} is not a valid employment status" }

	def generate_token
	  loop do
		self.token = SecureRandom.base64(64)
		break unless Applicant.find_by(token: token)
	  end
	end
end
