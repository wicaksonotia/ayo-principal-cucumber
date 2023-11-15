Feature: 51. Import 200k Audience Personalize

  Scenario Outline: As a user, I can create import 200k Audience Personalize

    Given I am on the tab Personalize Audience page
    When I am click button 'Buat'
    Then System should be leading to form create Audience

    Given I am on the from create Audience page
    When I input form and also import csv Audience
    Then System should be able submit form Audience and leading to Audience page

    Given I am on the Audience list page
    When I search an audience
    Then System should be according data Audience based on search keyword