require 'test_helper'
require 'delorean'

class UtilityTest < ActiveSupport::TestCase

  test "create, read, update and destroy a utility" do
    new_utility = Utility.new(:name => "Petrol")
    assert new_utility.save
    existing_utility = Utility.find(new_utility.id)
    assert_equal existing_utility.name, new_utility.name
    existing_utility.name = "Diesel"
    assert existing_utility.save
    assert existing_utility.destroy
  end

  test "should not create two utilities with the same name" do
    first_utility = Utility.new(:name => "Petrol")
    assert first_utility.save
    second_utility = Utility.new(:name => "Petrol")
    assert !second_utility.save
  end

  test "should not create a utility without name" do
    utility = Utility.new
    assert !utility.save
  end

  test "should not create a two utilities with the same name" do
    first_utility = Utility.new(:name => "Petrol")
    assert first_utility.save
    second_utility = Utility.new(:name => "Petrol")
    assert !second_utility.save
  end

  test "can optionally specify an icon for a given utility" do
    utility = Utility.new(:name => "Petrol", :icon => "Petrol")
    assert utility.save
  end

  test "last reading was taken in the current month so it should be up-to-date" do
    Delorean.time_travel_to("2010-03-05") do
      utility = Utility.new(:name => "Petrol")
      assert utility.save
      reading = Reading.new(:value => 3290.0, :measured_at => "2010-03-05", :utility_id => utility.id)
      assert reading.save
      assert utility.up_to_date?
    end
  end

  test "last reading is taken last month so it should not be up-to-date" do
    Delorean.time_travel_to("2010-03-05") do
      utility = Utility.new(:name => "Petrol")
      assert utility.save
      reading = Reading.new(:value => 3290.0, :measured_at => "2010-02-05", :utility_id => utility.id)
      assert reading.save
      assert !utility.up_to_date?
    end
  end

  test "checking if up-to-date without a single reading shouldn't fail" do
    utility = Utility.new(:name => "Petrol")
    assert utility.save
    assert utility.up_to_date?.nil?
  end
  
  # TODO Test for case sensitive utilities

end
