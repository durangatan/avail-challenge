Rails.application.routes.draw do
  put "/landlords" => "landlords#update"
  get "/landlords/:id" => "landlords#show"
  post "/secrets" => "secrets#create"
  resources :applicants
  post "/applicants/token" => "applicants#check_token"
  get "/properties" => "properties#index"
  post "/properties" => "properties#update"
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"
  get "*path" => "error#not_implemented"
end
