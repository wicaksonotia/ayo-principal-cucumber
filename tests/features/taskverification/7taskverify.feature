Feature: 7. Verify Task Verification

  Scenario Outline: As a user, I can verify Task Verification
    Given I am on the Task Verification page
    When I search a Task Verification
    Then System should be according data Task Verification based on search keyword

    When I click button verify a TSM Task Verification
    When I click button release coin
    Then System should be release coin and status will be changed to 'Sudah Dikirim'