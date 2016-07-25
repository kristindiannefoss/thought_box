Rails.application.routes.draw do

  root to: "pages#home"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/sign_up", to: "users#new"
  # get "/dashboard", to: "users#show"

  resources :users, only: [:create, :show]
end
