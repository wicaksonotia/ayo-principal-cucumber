Feature: 20. Create DTE Automation digital coupon non tsm

  Scenario Outline: As a user, I can create DTE Automation digital coupon non tsm
    Given I am on the DTE Automation page
    When I select tab Non-TSM and click button 'Buat Non TSM'
    Then System should be leading to form create DTE Automation

    Given I am on the form create DTE Automation Non TSM page
    When I input form with select Automation 'Digital Coupon' and submit
    Then System should be able to submit digital coupon non tsm and leading to DTE Automation page