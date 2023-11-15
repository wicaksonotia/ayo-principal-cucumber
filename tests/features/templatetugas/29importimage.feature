Feature: 29. Import image Template Tugas

  Scenario Outline: As a user, I can import image Template Tugas
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I am fill form with import image and submit
    Then System should be able to submit template tugas and leading to template tugas page