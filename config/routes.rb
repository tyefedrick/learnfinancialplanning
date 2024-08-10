Rails.application.routes.draw do
  root 'home#index'

  #Log In Route
  devise_for :users

  #CFP Test Prep Routes
    # Route for the CFP® Test Prep Home Page
    get 'cfp/home', to: 'cfp#home', as: 'cfp_home'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
