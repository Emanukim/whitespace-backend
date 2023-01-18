Rails.application.routes.draw do
  resources :supervisors
  resources :lecturers
  resources :tasks
  resources :lecturers, only: [:index, :login, :create, :show] do
  end 
  post "/login", to: "lecturers#login"
  get "/lecturers", to: "lecturers#index"
  get "lecturers", to: "lecturers#show"
  #get "/lecturers", to: "lecturers#create"
  #post "/signup", to: "lecturers#create"
  resources :students
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # get 'profiles', to: 'profiles#index'
  # get '/profile/:id', to: 'profiles#show'

  # resources :profiles, only: [:index, :show]


  post "/login", to: "jwt#create"
  get "/login", to: "jwt#create"

end
