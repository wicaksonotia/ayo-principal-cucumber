Feature: 5321. KPI Setting

  Scenario Outline: As a user, I can create, read, update and delete KPI Setting
    Given I am on KPI Setting page
    When I input field zone, region for search
    Then I click header table, for sorting