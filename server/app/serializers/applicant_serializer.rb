class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :dob, :employment_status, :has_pets, :submitted, :token, :name, :email, :landlord_id, :landlord
end
