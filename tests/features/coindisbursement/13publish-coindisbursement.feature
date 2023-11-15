Feature: 13. Publish Coin Disbursement

  Scenario Outline: As a user, I can publish Coin Disbursement
    Given I am in Coin Disbursement page
    When I search a coin disbursement
    Then I click button edit a unpublished coin disbursement
    Then I click button 'Simpan' on tab Target Penerima
    Given I am in the Coin Disbursement page
    When I search name a coin disbursement
    Then I click button edit a draft coin disbursement
    Then I click button 'Simpan' Target Penerima
    Then System should be able to save and publish draft coin disbursement