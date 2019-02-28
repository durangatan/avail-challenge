class SessionsSerializer < ActiveModel::Serializer
  attributes :id, :email, :token

  def token
    object.auth_token
  end
end
