class SessionsSerializer < ActiveModel::Serializer
  attributes :id

  def token
    object.auth_token
  end
end
