Feature: 38. Upload Result Payment (Datalog - Coin Disbursement)

  Scenario Outline: As a user, I can upload payment result
    Given I am in tab Data Log - Coin Disbursement page
    When I am edit and import xls payment result
    Then System should be able to import xls payment result and change budget approval status to 'approved'

    #Given I am in tab List Penukaran Koin - Ubah Coin Disbursement page
    #When I am edit and import xls
    #Then System should be able to import xls