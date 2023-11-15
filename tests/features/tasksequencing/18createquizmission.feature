Feature: 18. Create TSM Quiz Mission

  Scenario Outline: As a user, I can create and publish Tsm with type quiz

    Given I am on the Template Tugas page
    When I search a template tugas
    Then System should be according data Template Tugas based on search keyword
    When I view detail template tugas
    Then System should be show detail template tugas page with type quiz

  #Scenario Outline: As a user, I can search a group trade program
    Given I am on the Group Trade Program page
    When I search a group trade program
    Then System should be according data Group Trade Program based on search keyword

  #Scenario Outline: As a user, I can search a trade program
    Given I am on the Trade Program page
    When I search a Trade Program name
    Then System should be according data Trade Program based on search keyword

  #Scenario Outline: As a user, I can search a audience
    Given I am on the Audience page
    When I search a audience
    Then System should be according data Audience based on search keyword

  #Scenario Outline: As a user, I can create Mission Task Based Response
    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page

  #Scenario Outline: As a user, I can setting Misi without Pin Up Mission
    When I add Event Misi
    When setting Misi without Pin Up Mission
    When I save mission builder
    Then System should be leading to Task Sequencing page and success save new Tsm

  #Scenario Outline: As a user, I can publish mission
    When I edit and submit task sequencing
    Then System should be update data and leading to Mission Builder page

    When I publish mission builder
    Then System should be leading to Task Sequencing page and success publish Tsm