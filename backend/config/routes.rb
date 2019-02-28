Rails.application.routes.draw do
  resources :applicants

  get '/properties' => 'application#properties'
  get '*path' => 'error#not_implemented'
end
