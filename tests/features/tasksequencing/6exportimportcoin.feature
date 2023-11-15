Feature: 6. Export - import coin TSM
  
  Scenario Outline: As a user, I can export - import coin TSM
  #Scenario Outline: As a user, I can search task sequencing
    Given I am on the Task Sequencing page
    When I search a task sequencing for import
    Then System should be according data task sequencing based on search keyword

  #Scenario Outline: As a user, I can edit Tsm
    When I click button edit a TSM
    Then System should be leading to form Task Sequencing page

  #Scenario Outline: As a user, I can export and import coin TSM
    Given I am on the form edit Task Sequencing page
    When I export coin
    When I import coin and confirm
    Then System should be able to import coin TSM

  #Scenario Outline: As a user, I can view and publish setting mission builder
    Given I am on the Mission Builder page
    When I view setting mission builder and publish TSM
    Then System should be leading to Task Sequencing page