class Landlord < ApplicationRecord
	has_many :tenants
	belongs_to :user
end
