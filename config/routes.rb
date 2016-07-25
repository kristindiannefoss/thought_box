Rails.application.routes.draw do

  root to: "pages#home"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy", as: "logout"
  get "/sign_up", to: "users#new"
  get "/dashboard", to: "users#show"

  resources :users, only: [:create]
  resources :links, only: [:index]
end
