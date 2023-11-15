Feature: 15. Unpublish Coin Disbursement

  Scenario Outline: As a user, I can unpublish Coin Disbursement
    Given I am on the Coin Disbursement page
    When I search a coin disbursement
    Then System should be according data coin disbursement based on search keyword

    When I click button edit a published coin disbursement
    Then System should be leading to form edit Coin Disbursement

    # Given I am on the form edit coin disbursement page
    When I click button 'Unpublish' on tab Target Penerima
    Then System should be able to save and unpublish draft coin disbursement