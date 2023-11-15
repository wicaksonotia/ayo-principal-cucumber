Feature: 103. Duplicate Task Sequencing Management

  Scenario Outline: As a user, I can create and duplicate Task Sequencing
  
    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page

    When I add Event Misi
    When setting Misi
    When I save mission builder
    Then System should be leading to Task Sequencing page and success save new Tsm

    When I edit and submit task sequencing
    Then System should be update data and leading to Mission Builder page
    
    When I publish mission builder
    Then System should be leading to Task Sequencing page and success publish Tsm

    When I duplicate task sequencing
    Then System should be duplicate task sequencing

    When I publish task sequencing
    Then System should be publish task sequencing