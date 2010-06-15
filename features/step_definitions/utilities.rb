Given /^the default utilities are present$/ do
  @utlity = Utility.new(:name => "Water")
  @utlity.save
  Utility.all.size.should == 1
end