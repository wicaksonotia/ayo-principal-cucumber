Feature: [MITRA] 01. Revise Quantity

  Scenario Outline: As a user, I can revise quantity product order
    Given I am on the Lihat Pesanan page
    When I select Kode Pesanan from <namaToko>
    Then system should be leading to Detail Pemesanan page

    Given I am on the Detail Pemesanan page
    When I select tab Produk yang Dibeli, revise quantity product and submit
    Then system should be able to update quantity product order

    Examples:
      | namaToko           |
      | AYAM GORENG LIK RI |