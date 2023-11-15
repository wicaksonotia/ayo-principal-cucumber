Feature: 56. Create Product UPC

  Scenario Outline: As a user, I can create product upc

    Given I am on the Produk page
    When I am click button 'Tambah Produk'
    Then System should be leading to form Tambah Produk

    Given I am on the from Tambah Produk
    When I input and submit form
    Then System should be able to submit form and leading to Produk page

    When I search new produk
    Then System should be according data Produk based on search keyword

    When I go to Template Tugas page
    Then System should be leading to Template Tugas page

    When I check UPC Family Brand
    Then System should be according data UPC based on search keyword <fam>

Examples:
      | fam                 | 
      | Produk Testing 2604 | 
