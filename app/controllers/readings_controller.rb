class ReadingsController < ApplicationController

  def create
    @reading = Reading.new(params[:reading])
    if @reading.save
      render :file => 'readings/create'
    end
  end

end