Feature: 110.2 Export verification assignment - misi perbaikan lebih dari 1 retailer (terdapat misi yg sebelumnya approved)

  Scenario Outline: As a user, I can Export verification assignment - misi perbaikan lebih dari 1 retailer (terdapat misi yg sebelumnya approved)
    Given I am on the Task Verification page
    When I search a Task Verification
    Then System should be according data Task Verification based on search keyword

    When I generate sampling, click button assign, then go to Assignment Cart page
    Then System should be leading to Assignment Cart page

    When I add assignment then go to Verification Assignment page
    Then System should be leading to Verification Assignment page

    When I click button Export Summary Data
    Then System should be able to download file export