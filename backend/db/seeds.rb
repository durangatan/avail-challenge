require "faker"

Admin.delete_all
Applicant.delete_all
ApplicationProperty.delete_all
Admin.create!(
  email: "admin@mail.com",
  password: "secret",
)

Applicant.create!(name: "Joe Duran",
                  email: "joeduran8@gmail.com",
                  secret: Secret.new(ssn: "foo", mmn: "wow"),
                  landlord: Landlord.new(name: "Lani Stait", email: "lani.stait@gmail.com"))

ApplicationProperty.create!(theme_color_hex: "#228B22", form_type: "Full")
