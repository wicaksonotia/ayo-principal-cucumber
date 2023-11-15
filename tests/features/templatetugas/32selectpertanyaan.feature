Feature: 32. Create Template Tugas with select questions

  Scenario Outline: As a user, I can create Template Tugas with select questions
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I fill form with select questions and submit
    Then System should be able to submit template tugas and leading to template tugas page