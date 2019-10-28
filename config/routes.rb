Rails.application.routes.draw do
  devise_for :users
  root to: 'groups#index'

  resources :messages
  resources :users, only: [:edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update, :show] do
    resources :messages, only: [:index, :create, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end