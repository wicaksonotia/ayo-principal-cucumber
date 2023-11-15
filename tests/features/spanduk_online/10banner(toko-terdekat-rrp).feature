Feature: 10. Toko Terdekat RRP (toko-terdekat-rrp)

  Scenario Outline: As a user, I can Create Toko Terdekat RRP

    Given I am on the Spanduk Online page
    When I click button Buat
    Then System should be leading to Buat Spanduk Online page

    Given I am on the Buat Spanduk Online page
    When I input Nama Spanduk <nama_spanduk>
    Then System should be input Nama Spanduk

    When I select date in Sampai
    Then System should be select date

    When I insert Banner in TEMPLATE F
    Then System should be insert Banner

    When I click Customer in Grup Pengguna
    Then System should be click Customer

    When I click RRP in Tipe Konten
    Then System should be click RRP

    When I click Toko Terdekat in Tipe Spanduk
    Then System should be click Toko Terdekat

    When I input Nama Halaman <nama_halaman>
    Then System should be input Nama Halaman

    When I input Isi Halaman <isi_halaman>
    Then System should be input Isi Halaman

    When I click Button Simpan
    Then System show popup Confirmation

    When I click Button Ya
    Then System should be submit data and landing to Spanduk Online Page

    Examples:
      | nama_spanduk                  | nama_halaman                  | isi_halaman                   |
      | Toko Terdekat RRP Testing Tia | Toko Terdekat RRP Testing Tia | Toko Terdekat RRP Testing Tia |

