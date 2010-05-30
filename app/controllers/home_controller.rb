class HomeController < ApplicationController

  def index
    @utilities = Utility.all
    @reading = Reading.new
    @last_reading = Reading.last
    @score = score #"+10%"
  end

  private

  def score
    last_readings = Reading.where("measured_at >= ? AND measured_at <= ?", 1.month.ago.beginning_of_month, 1.month.ago.end_of_month)
    current_readings = Reading.where("measured_at >= ? AND measured_at <= ?", Time.now.beginning_of_month, Time.now.end_of_month)
    last_sum = 0
    last_readings.each{|reading| last_sum += reading.value}
    current_sum = 0
    current_readings.each{|reading| current_sum += reading.value}
    if last_sum == 0
      return 0
    else
      return (((current_sum / last_sum)*100)-100).round(2)
    end
  end

end