Rails.application.routes.draw do
  resources :reviews
  resources :movies
  resources :users
  post "/login", to: "users#login"
  get "/profile", to: "users#profile"

end
