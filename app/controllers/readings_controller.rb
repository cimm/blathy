class ReadingsController < ApplicationController

  def create
    @reading = Reading.new(params[:reading])
    @reading.utility_id = 1
    if @reading.save
      render :file => 'readings/create'
    end
  end

end