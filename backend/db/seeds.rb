require 'faker'

Admin.delete_all
Admin.create!(
  email: 'admin@mail.com',
  password: 'secret')

Applicant.create(name: "Joe", email: "joeduran8@gmail.com", secret: Secret.new(ssn:"foo", mmn:"wow"))