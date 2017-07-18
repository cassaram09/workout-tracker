Rails.application.routes.draw do
  resources :exercise_categories
  resources :exercises
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
