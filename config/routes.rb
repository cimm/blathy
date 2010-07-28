Blathy::Application.routes.draw do

  resource  :readings, :only => [:create] # TODO Should be plural, no?
  resources :graphs,   :only => [:show]
  root      :to => 'home#index'

end