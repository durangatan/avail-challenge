require "faker"

Admin.delete_all
Applicant.delete_all
ApplicationProperty.delete_all

Admin.create!(
  email: "admin@mail.com",
  password: "secret",
)

20.times do
  Applicant.create!(name: Faker::Name.unique.name,
                    submitted: true,
                    employment_status: ["Employed", "Unemployed"].sample,
                    dob: Faker::Date.birthday.to_time.to_i * 1000,
                    has_pets: Faker::Boolean.boolean,
                    email: Faker::Internet.email,
                    secret: Secret.new(ssn: "111-11-1111", mmn: Faker::Name.unique.last_name),
                    landlord: Landlord.new(name: Faker::Name.unique.name, email: Faker::Internet.email))
end

ApplicationProperty.create!(theme_color_hex: "#164e8d", form_type: "Full")
