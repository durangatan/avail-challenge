class Secret < ApplicationRecord
	belongs_to :applicant
	validates :ssn, format:{with:/\d{3}-\d{2}-\d{4}/}
end
