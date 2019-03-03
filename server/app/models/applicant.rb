class Applicant < ApplicationRecord
  has_one :secret, autosave: true
  belongs_to :landlord, autosave: true
  before_create :generate_token
  attr_readonly :token
  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :employment_status, inclusion: { in: %w(Employed Unemployed),
                                             allow_nil: true,
                                             message: "%{value} is not a valid employment status" }

  def generate_token
    loop do
      self.token = SecureRandom.hex(24)
      break unless Applicant.find_by(token: token)
    end
  end
end
