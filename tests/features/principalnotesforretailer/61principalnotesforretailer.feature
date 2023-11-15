Feature: 61. CRUD Principal Notes for Retailer

  Scenario Outline: As a user, I can create, read, update and delete Field Force
    Given I am on Daftar Notes untuk Retailer page
    When I click button 'Tambah'
    Then System should be leading to form Create Notes

    Given I am on form Create Notes page
    When I input form and submit
    Then System should be able to submit form and leading to Daftar Notes untuk Retailer page

    When I edit and delete Notes untuk Retailer
    Then System should be delete Notes untuk Retailer