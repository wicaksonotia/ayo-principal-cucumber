Feature: 53. Create TSM 1000k Audience

  Scenario Outline: As a user, I can create and publish Task Sequencing with 1000k Audience
    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page
    Then I add Event Misi
    Then setting Misi and save mission builder