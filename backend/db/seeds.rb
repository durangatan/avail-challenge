require 'faker'

User.delete_all
customer = User.create!(
  email: 'test@mail.com',
  password: 'secret',
  braintree_customer_id: nil,
  name: Faker::Name.name,
  phone: Faker::PhoneNumber.phone_number,
  verified_email: false
)
User.create!(
  email: 'admin@mail.com',
  password: 'secret',
  braintree_customer_id: nil,
  name: Faker::Name.name,
  phone: Faker::PhoneNumber.phone_number,
  verified_email: false,
  admin: true
)
