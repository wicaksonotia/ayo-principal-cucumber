Feature: 54. Import Verification Assignment 150k Data

  Scenario Outline: As a user, I can import Verification Assignment 150k data
    Given I am on the Task Verification page
    When I view detail task then import xls file
    Then System should be able submit form