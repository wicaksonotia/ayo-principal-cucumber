Feature: 63. KPI Setting

  Scenario Outline: As a user, I can create, read, update and delete KPI Setting
    Given I am on KPI Setting page
    When I click button 'Buat'
    Then System should be leading to form Create KPI Setting

    Given I am on form Create KPI Setting page
    When I input form and submit
    Then System should be able to submit form KPI Setting and leading to KPI Setting page

    When I edit KPI Setting
    Then System should be update KPI Setting