Feature: [PRINCIPAL] 5206. Sub Group Trade Program, Trade Program, Task Sequencing

  Scenario Outline: As a user, I can create and edit Sub GTP
    # ----------------------------------
    # SUB GROUP TRADE PROGRAM
    # ----------------------------------
    Given I am on the Sub GTP page
    When I click button 'Tambah'
    Then I input form and submit
    When I click button 'Tambah' lagi
    Then I input form and submit lagi
    # ----------------------------------
    # TRADE PROGRAM
    # ----------------------------------
    Given I am on the Trade Program page
    When I click button 'Tambah' TP
    Then I input form and submit TP
    When I click button 'Tambah' TP lagi
    Then I input form and submit TP lagi
    # ----------------------------------
    # TASK SEQUENCING
    # ----------------------------------
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
