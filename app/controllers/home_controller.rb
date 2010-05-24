class HomeController < ApplicationController

  def index
    @reading = Reading.new
  end

end