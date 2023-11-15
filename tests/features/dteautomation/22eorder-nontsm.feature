Feature: 22. Create DTE Automation e-order non tsm

  Scenario Outline: As a user, I can create DTE Automation e-order non tsm
    Given I am on the DTE Automation page
    When I select tab Non-TSM and click button 'Buat Non TSM'
    Then System should be leading to form create DTE Automation

    Given I am on the form create DTE Automation Non TSM page
    When I input form with select Automation 'E-Order' and submit
    Then System should be able to submit E-Order non tsm and leading to DTE Automation page