Feature: 28. Unpublish TSM

  Scenario Outline: As a user, I can unpublish TSM
    Given I am on the Task Sequencing page
    When I search a Task Sequencing
    Then System should be according data based on search keyword
    
    When I edit a TSM with status 'Aktif' and submit task sequencing
    Then System should be leading to Mission Builder page

    When I click button 'Unpublish' mission builder
    Then System should be able to unpublish TSM, and leading to Task Sequencing page with status changed to 'Tidak Aktif'