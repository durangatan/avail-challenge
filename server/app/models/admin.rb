class Admin < ApplicationRecord
  has_secure_password
  before_create :generate_token
  attr_readonly :token

  # TODO: token should expire after a limited time
  def generate_token
    self.token = SecureRandom.base64(64)
  end
end
