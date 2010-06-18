Feature: Readings
  In order to track my energy usage over time
  As a visitor
  I want to add monthly readings for all the utilities

  @javascript
  Scenario: Complete a monthly reading for one utility
  Given the default utilities are present
  And I am on the homepage
  And I follow "Water"
  Then I should be on the new water reading page
  And I fill in "reading_value" with "490.45"
  And I press "Save"
  Then I should see "Reading added"
  And I should have 1 reading
