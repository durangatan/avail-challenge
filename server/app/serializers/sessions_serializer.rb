class SessionsSerializer < ActiveModel::Serializer
  attributes :id

  def token
    object.token
  end
end
