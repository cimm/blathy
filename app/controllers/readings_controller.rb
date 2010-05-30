class ReadingsController < ApplicationController
  respond_to :js

  def create
    @reading = Reading.new(params[:reading])
    @reading.utility_id = params[:reading][:utility_id]
    if @reading.save
      respond_with @reading
    end
  end

end