Feature:  98. Edit Budget Trade Program yang Sedang Berjalan

  Scenario Outline: As a user, I can create and edit trade program
    Given I am on the Trade Program page
    When I click button 'Tambah'
    Then System should be leading to Buat Trade Program page

    Given I am on the Buat Trade Program page
    When I input form and submit
    Then System should be able to submit Trade Program and leading to Trade Program page

    Given I am on the Task Sequencing page
    When I create task sequencing and click button Submit
    Then System should be submitted data and leading to Mission Builder page

    When I add Event Misi
    When setting Misi and save mission builder
    Then System should be leading to Trade Program Page

    When I search and edit Budget Trade Program
    Then System should be edit Budget Trade Program and leading to trade Program page

    Given I am on the Task Sequencing page2
    When I create task sequencing and click button Submit2
    Then System should be submitted data and leading to Mission Builder page2

    When I add Event Misi2
    When setting Misi2
    When I save mission builder2
    Then System should be leading to Task Sequencing page and success save new Tsm2

    When I edit and submit task sequencing2
    Then System should be update data and leading to Mission Builder page2

    When I publish mission builder2
    Then System should be leading to Task Sequencing page and success publish Tsm


