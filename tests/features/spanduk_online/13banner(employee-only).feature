Feature: 13. InApp Banner Employee (inapp-employee)

  Scenario Outline: As a user, I can Create InApp Banner Employee

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

    When I click Employee Only in Tipe Employee
    Then System should be click Employee Only

    When I input Nama Halaman <nama_halaman>
    Then System should be input Nama Halaman

    When I input Isi Halaman <isi_halaman>
    Then System should be input Isi Halaman

    When I click Button Simpan
    Then System show popup Confirmation

    When I click Button Ya
    Then System should be submit data and landing to Spanduk Online Page


    Examples:
      | nama_spanduk                | nama_halaman                | isi_halaman                 |
      | In App Employee Testing Tia | In App Employee Testing Tia | In App Employee Testing Tia |

