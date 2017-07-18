Rails.application.routes.draw do
  
  resources :users

  scope '/api/v1' do
    resources :routines
    resources :workouts
    resources :exercise_categories
    resources :exercises
  end
  
end
