Rails.application.routes.draw do

  root to: "pages#home"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/sign_up", to: "users#new"

end
