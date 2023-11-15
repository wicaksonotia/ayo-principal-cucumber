Feature: 48. IR - Check Image

  Scenario Outline: As a user, I can check image planogram
    Given I am on the Check Image page
    When I click button 'Tambah'
    Then System should be leading to form create Check Image

    Given I am on the form create Check Image page
    When I input form and submit
    Then System should be able to submit Check Image and leading to Check Image page

    When status is changed from requesting to done
    Then System should be show image check result