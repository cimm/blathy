Given /^the default utilities are present$/ do
  @utlity = Utility.new(:name => "Water")
  @utlity.save
  @utlity = Utility.new(:name => "Gas")
  @utlity.save
  @utlity = Utility.new(:name => "Electricity")
  @utlity.save
  @utlity = Utility.new(:name => "Solar")
  @utlity.save
  Utility.all.size.should == 4
end
