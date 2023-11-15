Feature: 21. Create DTE Automation digital coupon tsm

  Scenario Outline: As a user, I can create DTE Automation digital coupon tsm
    Given I am on the DTE Automation page
    When I select tab TSM and click button 'Buat TSM'
    Then System should be leading to form create DTE Automation

    Given I am on the form create DTE Automation TSM page
    When I input form with select Automation 'Digital Coupon' and submit
    Then System should be able to submit digital coupon tsm and leading to DTE Automation page