Feature: 10. Reject request approval coin adjustment

  Scenario Outline: As a user, I can reject request approval coin adjustment
    Given I am on Approval Coin Adjustment page
    When I filter status with 'Pending'
    When I search a Task Sequencing Management
    Then System should be according data task sequencing based on search keyword

    When I click button 'Lihat' a Pending TSM approval coin adjustment
    Then System should be leading to form detail Approval Coin adjustment

    When I click button 'Reject'
    Then System should be able to save and reject request coin adjustment