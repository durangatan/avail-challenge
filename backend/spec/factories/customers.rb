FactoryGirl.define do
  factory :customer do
    email {Faker::Internet.email}
    password 'secret'
    verified_email true

    factory :admin do
      email 'admin@mail.com'
      password 'secret'
      admin true
    end
  end

end
