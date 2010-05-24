Blathy::Application.routes.draw do

  resource  :readings, :only => [:create]
  root      :to => 'home#index'

end