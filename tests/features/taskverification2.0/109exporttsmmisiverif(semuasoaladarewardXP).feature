Feature: 109. Export file tsm setelah misi diverifikasi (semua soal ada reward XP)

  Scenario Outline: As a user, I can Export file tsm setelah misi diverifikasi (semua soal ada reward XP)
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
    Then System should be able submit form and leading to Verification Approval page

    Given I am on the Verification Approval page
    When I view detail Task Verification Approval
    Then System should be able to view detail Task Verification Approval

    When I click button verify a TSM Task Verification
    Then System should be able to approve TSM Task Verification and status will be changed to 'approved'

    When I request file and export task sequencing
    Then System should be request data and export task sequencing