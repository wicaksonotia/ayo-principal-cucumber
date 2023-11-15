Feature: 55. Create Template Tugas TBR Semua Pertanyaan

  Scenario Outline: As a user, I can create Template Tugas TBR Semua Pertanyaan
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I fill form and submit
    Then System should be able to submit template tugas and leading to template tugas page