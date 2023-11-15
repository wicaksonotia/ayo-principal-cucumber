Feature: 27. Request approval coin adjustment TSM

  Scenario Outline: As a user, I can request approval coin adjustment TSM
    Given I am on the Task Sequencing page
    When I search a task sequencing for import
    Then System should be according data task sequencing based on search keyword

    When I click button edit a TSM
    Then System should be leading to form Task Sequencing page

    Given I am on the form edit Task Sequencing page
    When I import coin and confirm
    Then System should be able to import coin TSM

    Given I am on the Mission Builder page
    When I view setting mission builder and publish TSM
    Then System should be leading to Task Sequencing page