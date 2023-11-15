Feature: 53. Create TSM 1000k Audience

  Scenario Outline: As a user, I can create and publish Task Sequencing with 1000k Audience
    Given I am on the Task Sequencing page
    When I edit and submit task sequencing
    Then System should be update data and leading to Mission Builder page
    Then I publish mission builder
    Then System should be leading to Task Sequencing page and success publish Tsm
    Then I view detail task
    Then System should be show detail mission