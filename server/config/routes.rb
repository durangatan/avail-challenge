Rails.application.routes.draw do
  # Applicant Routes
  resources :applicants
  post "/applicants/token" => "applicants#check_token"

  # Landlord Routes
  put "/landlords" => "landlords#update"
  get "/landlords/:id" => "landlords#show"

  # Secret Routes
  post "/secrets" => "secrets#create"

  # Application Property Routes
  get "/properties" => "properties#index"
  post "/properties" => "properties#update"

  # Session Routes
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"

  # Default / 404 Routes
  get "*path" => "error#not_implemented"
end
