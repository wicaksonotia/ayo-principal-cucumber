Feature: 5592. Create Audience Baru (Retailer - Population Blast)

  Scenario Outline: As a user, I can create OSEM
    Given I am on Audience Baru on osem page
    When I click button 'Tambah'
    Then I am on form create Audience Baru on Population Blast page, input and submit data
