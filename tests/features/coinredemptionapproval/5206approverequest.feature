Feature: [PRINCIPAL] 5206. Approve and Reject - Coin Redemption Approval

  Scenario Outline: As a user, I can approve dan reject request - approval coin redemption
    Given I am on Coin Redemption Approval page
    When I click button 'SETUJUI'
    Then I click menu Coin Disburment
    Then I logout and login with other account
    Then I click button 'REJECT' with other account
    Then I click menu Coin Disburment with other account