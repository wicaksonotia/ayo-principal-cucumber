Feature: 24. Create DTE Automation Referral Code Non - TSM

  Scenario Outline: As a user, I can create DTE Automation referral code non tsm
    Given I am on the DTE Automation page
    When I select tab Non-TSM and click button 'Buat Non TSM'
    Then System should be leading to form create DTE Automation

    Given I am on the form create DTE Automation Non TSM page
    When I input form with select Automation 'Referral Code' and submit
    Then System should be able to submit Referral Code Non TSM and leading to DTE Automation page