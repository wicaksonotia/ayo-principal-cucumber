Feature:  98. Edit Budget Trade Program sampai Verification Approval

  Scenario Outline: As a user, I can Edit Budget Trade Program sampai Verification Approval
    Given I am on the Task Verification page
    When I search a Task Verification
    Then System should be according data Task Verification based on search keyword

    When I generate sampling, click button assign, then go to Assignment Cart page
    Then System should be leading to Assignment Cart page

    When I add assignment then go to Verification Assignment page
    Then System should be leading to Verification Assignment page

    When I click button Export Summary Data
    Then System should be able to download file export

    When I view detail task then import xls file
    Then System cant click button Kirim

    Given I am on the Trade Program page
    When I search and edit Budget Trade Program
    Then System should be edit Budget Trade Program and leading to trade Program page

    Given I am on the Task Verification Assignment page
    When I click button Export Summary Data2
    Then System should be able to download file export2

    When I view detail task then import xls file2
    Then System should be able submit form and leading to Verification Approval page

    Given I am on the Verification Approval page
    When I view detail Task Verification Approval
    Then System should be able to view detail Task Verification Approval

    When I click button verify a TSM Task Verification
    Then System should be able to approve TSM Task Verification and status will be changed to 'approved'

