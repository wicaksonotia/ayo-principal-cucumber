Feature: 59. CRUD CTA

  Scenario Outline: As a user, I can create, read, update and delete CTA
    Given I am on Call To Action page
    When I click button 'Tambah'
    Then System should be leading to form create Call To Action

    Given I am on form create Call To Action page
    When I input form and submit
    Then System should be able to submit form Call To Action and leading to Call To Action page

    When I edit and delete CTA
    Then System should be delete CTA