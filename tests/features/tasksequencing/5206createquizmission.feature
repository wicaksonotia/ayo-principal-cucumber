Feature: [PRINCIPAL] 5206. Create TSM Quiz Mission

  Scenario Outline: As a user, I can create and publish Tsm with type quiz

    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then I add Event Misi
    Then Setting Misi and save mission builder
    When System should be leading to Task Sequencing page and success save new Tsm
    Then I edit and submit task sequencing
    Then I publish mission builder

    When I create task sequencing and click button Submit 2
    Then I add Event Misi 2
    Then Setting Misi and save mission builder 2
    When System should be leading to Task Sequencing page and success save new Tsm 2
    Then I edit and submit task sequencing 2
    Then I publish mission builder 2