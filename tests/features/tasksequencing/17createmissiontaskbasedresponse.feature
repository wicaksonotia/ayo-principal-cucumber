Feature: 17. Create Mission Task Based Response

  Scenario Outline: As a user, I can create and publish mission Task Based Response

    Given I am on the Template Tugas page
    When I search a template tugas
    Then System should be according data Template Tugas based on search keyword

    When I view detail template tugas
    Then System should be show detail template tugas page with type task based response

    Given I am on the Group Trade Program page
    When I search a group trade program
    Then System should be according data Group Trade Program based on search keyword

    Given I am on the Trade Program page
    When I search a Trade Program
    Then System should be according data Trade Program based on search keyword

    Given I am on the Audience page
    When I search a audience
    Then System should be according data Audience based on search keyword

    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page

    When I add Event Misi
    When setting Misi without Pin Up Mission
    When I save mission builder
    Then System should be leading to Task Sequencing page and success save new Tsm

    When I edit and submit task sequencing
    Then System should be update data and leading to Mission Builder page

    When I publish mission builder
    Then System should be leading to Task Sequencing page and success publish Tsm