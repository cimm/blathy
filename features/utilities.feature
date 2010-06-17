Feature: Utilities
  As a visitor
  I want to see all the utilities

  Scenario: List all features
  Given the default utilities are present
  And I am on the homepage
  Then I should see "Water"
  And I should see "Gas"
  And I should see "Electricity"
  And I should see "Solar"
