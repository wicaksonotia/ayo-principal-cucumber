Feature: 12. Create and import Coin Disbursement

  Scenario Outline: As a user, I can create and import Coin Disbursement
    Given I am in Coin Disbursement page
    When I search a coin disbursement
    Then System should be according data coin disbursement based on search keyword
    # When I click button 'Buat'
    # Then System should be leading to form create Coin Disbursement

    # Given I am in the Coin Disbursement page
    # When I fill form data
    # When I click button submit
    # Then System should be able submit program coin disbursement

    # Given I am on the Coin Disbursement page
    # When I search a coin disbursement
    # Then System should be according data coin disbursement based on search keyword

    # Given I am on the form Coin Disbursement page
    When I am edit and import xls coin disbursement
    Then System should be able to import xls coin disbursement and show in the table