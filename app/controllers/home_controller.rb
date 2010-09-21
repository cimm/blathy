class HomeController < ApplicationController

  def index
    @utilities = Utility.all
    @reading = Reading.new
  end

end
