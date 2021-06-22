Rails.application.routes.draw do
  resources :reviews
  resources :movies
  resources :users
  # get '*path', to: 'pages#index', via: :all
  post "/login", to: "users#login"
  get "/profile", to: "users#profile"
  get "/movies", to: "movies#index"

end
