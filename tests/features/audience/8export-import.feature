Feature: 8. Export import Audience

  Scenario Outline: As a user, I can create import and export Audience

    Given I am on the Audience page
    When I am click button 'Buat'
    Then System should be leading to form create Audience

    Given I am on the from create Audience page
    When I input form and also import xls Audience
    Then System should be able submit form Audience and leading to Audience page

  #Scenario Outline: As a user, I can edit and export Audience
    Given I am on the Audience list page
    When I search an audience
    Then System should be according data Audience based on search keyword

    When I click button 'edit' an Audience
    Then System should be leading to form edit Audience page

    When I am click button Export template
    Then System should be able to download file export Audience