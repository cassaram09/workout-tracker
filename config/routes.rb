Rails.application.routes.draw do
  
  scope '/api/v1' do
    resources :routines
    resources :workouts
    resources :exercise_categories
    resources :exercises
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  post '/users' => 'users#update'
  post '/password-reset' => 'users#password'
  post '/signup' => 'users#create'
  resources :users, except: [:new, :create]
  
end
