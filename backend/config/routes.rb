Rails.application.routes.draw do

  resources :tenants
  get '*path' => 'error#not_implemented'
  get '/properties' => 'application#properties'
  # TODO: Users create should fire an app mailer
  post '/users/create' => 'users#create'

end
