Then /^I should have ([0-9]+) readings?$/ do |count|
  Reading.count.should == count.to_i
end
