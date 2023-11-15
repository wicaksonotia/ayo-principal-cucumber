Feature: 11. Create export Coin Disbursement

  Scenario Outline: As a user, I can export Coin Disbursement
    Given I am on the Coin Disbursement page
    When I search a coin disbursement
    Then System should be according data coin disbursement based on search keyword
    
    Given I am on the form Coin Disbursement page
    When I am edit and export xls List Penukaran Coin Disbursement
    Then System should be able to download file xls coin disbursement