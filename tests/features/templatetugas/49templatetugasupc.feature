Feature: 49. Template Tugas - Create TSM UPC

  Scenario Outline: As a user, I can create Template Tugas UPC
    Given I am on the Template Tugas page
    When I click button 'Buat'
    Then System should be leading to form create template tugas page

    When I fill form and submit
    Then System should be able to submit template tugas and leading to template tugas page
    
    When I go to Task Sequencing page
    Then System should be leading to Task Sequencing page
    
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page

    When I add Event Misi
    When setting Misi with Pin Up Mission
    When I save mission builder
    Then System should be leading to Task Sequencing page and success save new Tsm

    When I edit and submit task sequencing
    Then System should be update data and leading to Mission Builder page
    
    When I publish mission builder
    Then System should be leading to Task Sequencing page and success publish Tsm

    When I view detail task
    Then System should be show detail mission