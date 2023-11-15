Feature: 30. Import video Template Tugas

  Scenario Outline: As a user, I can import video Template Tugas
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I am fill form with import video and submit
    Then System should be able to submit template tugas and leading to template tugas page