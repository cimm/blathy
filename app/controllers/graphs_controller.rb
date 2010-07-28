class GraphsController < ApplicationController
  respond_to :js

  def show
    @utility = Utility.find(params[:id])
    start_date = 3.months.ago.to_date.beginning_of_month
    end_date = Date.today.beginning_of_month >> 1
    readings = Reading.where(:measured_at => start_date..end_date, :utility_id => @utility.id)
    @data = Array.new
    active_date = start_date
    while active_date < end_date do
      active_readings = readings.select{|reading| active_date.beginning_of_month <= reading.measured_at && reading.measured_at <= active_date.end_of_month }
      if active_readings.empty? # missing month
        @data << 0
      else
        # TODO Will only take the first reading of a month, should be OK, but should find something cleaner
        @data << active_readings.first.value.to_i
      end
      active_date = active_date >> 1
    end
    respond_with @utility, @data
  end

end