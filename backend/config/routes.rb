Rails.application.routes.draw do

  resources :customers
  get '*path' => 'error#not_implemented'
end
