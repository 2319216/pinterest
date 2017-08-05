Rails.application.routes.draw do

  devise_for :users
  # devise_for :views

  root "pins#index"

  # resources :storages, only: :destroy
  resources :users, only: [:show, :edit]
  resources :boards do
    member do
      # get "add", to: "board_pins#new"
      post "add", to: "board_pins#create"
    end
  end
  resources :pins, except: :index do
    member do
      put "like", to: "pins#upvote"
    end
  end
end
