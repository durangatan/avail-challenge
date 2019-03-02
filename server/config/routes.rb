Rails.application.routes.draw do
  resources :applicants
  post "/applicants/token" => "applicants#check_token"
  get "/properties" => "application#properties"
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"
  get "*path" => "error#not_implemented"
end
