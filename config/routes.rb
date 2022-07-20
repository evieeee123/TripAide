Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :cities, only: [:show, :index]
    resources :spots, only: [:index, :show]
    resources :restaurants, only: [:index, :show]
    resources :hotels, only: [:index, :show]

    resources :reviews, only: [:show, :create, :update, :destroy]

  end

end
