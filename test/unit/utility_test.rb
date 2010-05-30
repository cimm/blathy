require 'test_helper'

class UtilityTest < ActiveSupport::TestCase

  test "create, read, update and destroy a utility" do
    new_utility = Utility.new(:name => "Gas")
    assert new_utility.save
    existing_utility = Utility.find(new_utility.id)
    assert_equal existing_utility.name, new_utility.name
    existing_utility.name = "Water"
    assert existing_utility.save
    assert existing_utility.destroy
  end

  test "should not create two utilities with the same name" do
    first_utility = Utility.new(:name => "Gas")
    assert first_utility.save
    second_utility = Utility.new(:name => "Gas")
    assert !second_utility.save
  end

  test "should not create a utility without name" do
    utility = Utility.new
    assert !utility.save
  end

  test "should not create a two utilities with the same name" do
    first_utility = Utility.new(:name => "Gas")
    assert first_utility.save
    second_utility = Utility.new(:name => "Gas")
    assert !second_utility.save
  end

  test "can optionally specify an icon for a given utility" do
    utility = Utility.new(:name => "Gas", :icon => "gas.png")
    assert utility.save
  end

  # TODO Test the up_to_date? method

end