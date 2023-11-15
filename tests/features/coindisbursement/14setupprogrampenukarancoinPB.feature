Feature: 14. Set up program Coin Disbursement - Pojok Bayar

  Scenario Outline: As a user, I can set up program Coin Disbursement
    Given I am in Coin Disbursement page
    When I click button 'Buat'
    Then System should be leading to form create Coin Disbursement

    Given I am in the Coin Disbursement page
    When I input form
    When I click button submit
    Then System should be able submit program coin disbursement

    Given I am on the Coin Disbursement page
    When I search a coin disbursement
    Then System should be according data coin disbursement based on search keyword