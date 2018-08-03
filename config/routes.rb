Rails.application.routes.draw do
  resources :items
  resources :lists

  namespace :api do
    namespace :v1 do
      resources :items
      resources :lists
    end
  end
end
