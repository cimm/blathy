class ReadingsController < ApplicationController

  def create
    @reading = Reading.new(params[:reading])
    @reading.utility_id = Utility.find_by_name(params[:reading][:utility]).id
    if @reading.save
      render :file => 'readings/create'
    end
  end

end