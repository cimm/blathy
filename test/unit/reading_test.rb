require 'test_helper'

class ReadingTest < ActiveSupport::TestCase

  test "create, read, update and destroy a reading" do
    utility = Utility.new(:name => "Gas")
    assert utility.save
    new_reading = Reading.new(:value => 3290.0, :measured_at => "2010-03-05", :utility_id => utility.id)
    assert new_reading.save!
    existing_reading = Reading.find(new_reading.id)
    assert_equal existing_reading.value, new_reading.value
    existing_reading.value = 10.0
    assert existing_reading.save
    assert existing_reading.destroy
  end
  
  test "should not create a reading without a value, measured date and linked utility" do
    reading = Reading.new
    assert !reading.save
  end

  test "should not create a reading without a value even it has a measured date and linked utility" do
    utility = Utility.new(:name => "Gas")
    assert utility.save
    reading = Reading.new(:measured_at => "2010-03-05", :utility_id => utility.id)
    assert !reading.save
  end
  
   test "should not create a reading without a measured date even it has a value and linked utility" do
    utility = Utility.new(:name => "Gas")
    assert utility.save
    reading = Reading.new(:value => 3290.0, :utility_id => utility.id)
    assert !reading.save
  end

   test "should not create a reading without a linked utility even it has a value and measured at date" do
    reading = Reading.new(:value => 3290.0, :measured_at => "2010-03-05")
    assert !reading.save
  end

end
