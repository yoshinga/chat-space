Rails.application.routes.draw do
  devise_for :users
  root to: 'groups#index'

  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update, :show] do
    resources :messages, only: [:index, :create, :show]

    namespace :api do
      resources :messages, only: :index, defaults: { format:'json'}
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end