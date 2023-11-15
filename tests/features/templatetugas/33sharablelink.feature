Feature: 33. Create Template Tugas with shareable link

  Scenario Outline: As a user, I can create Template Tugas with shareable link
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I fill form with shareable link and submit
    Then System should be able to submit template tugas and leading to template tugas page