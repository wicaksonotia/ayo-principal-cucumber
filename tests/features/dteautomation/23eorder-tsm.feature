Feature: 23. Create DTE Automation E-Order TSM

  Scenario Outline: As a user, I can create DTE Automation E-Order TSM
    Given I am on the DTE Automation page
    When I select tab TSM and click button 'Buat TSM'
    Then System should be leading to form create DTE Automation

    Given I am on the form create DTE Automation TSM page
    When I input form with select Automation 'E-Order' and submit
    Then System should be able to submit digital coupon tsm and leading to DTE Automation page