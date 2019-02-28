class User < ApplicationRecord
	has_secure_password
	has_many :tenants
	has_many :landlords
end
