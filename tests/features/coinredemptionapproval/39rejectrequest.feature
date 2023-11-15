Feature: 39. Reject Request - Coin Redemption Approval

  Scenario Outline: As a user, I can reject request approval coin redemption
    Given I am on Coin Redemption Approval page
    When I click button 'TOLAK'
    Then System should be able to save and reject request coin redemption