Feature: 5. Create Template Tugas Paragraph

  Scenario Outline: As a user, I can create Template Tugas - paragraph
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I am fill form with select paragraph and submit
    #Then System should be able to submit template tugas and leading to template tugas page