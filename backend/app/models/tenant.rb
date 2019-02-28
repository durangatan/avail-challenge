class Tenant < ApplicationRecord
	has_one :tenant_secret
	belongs_to :user
	belongs_to :landlord
end
