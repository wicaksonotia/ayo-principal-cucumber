Feature: Sign out from microsoft account

  Scenario Outline: As a user, I can sign out from the microsoft account
    Given I am on the microsoft page
    When I sign out account
    Then System will leading to home page office