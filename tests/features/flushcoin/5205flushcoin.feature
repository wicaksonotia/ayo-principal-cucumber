Feature: 5205. Flush Coin

  Scenario Outline: As a user, I can create, read, update and delete Flush Coin
    Given I am on Flush Coin page
    When I click button 'Tambah'
    Then I am on form create Flush Coin page, input and submit data
    Then Click tab Audience, input and execute data
    Then I am on list data, and click edit
    Then I click button 'Tambah' again
    Then I am on form create Flush Coin page, input and submit data again
    Then Click tab Audience, click fixed panel, input and execute data