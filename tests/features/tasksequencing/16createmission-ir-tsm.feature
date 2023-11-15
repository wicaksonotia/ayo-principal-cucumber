Feature: 16. Create Mission IR - TSM

  Scenario Outline: As a user, I can create and publish mission IR Tsm
    Given I am on the Template Tugas page
    When I search a template tugas
    Then System should be according data Template Tugas based on search keyword

    When I view detail template tugas
    Then System should be show detail template tugas page with type IR

    Given I am on the Group Trade Program page
    When I search a group trade program
    Then System should be according data Group Trade Program based on search keyword

    Given I am on the Trade Program page
    When I create trade program and click button Simpan
    Then System should be able to save data and leading to Trade Program page

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