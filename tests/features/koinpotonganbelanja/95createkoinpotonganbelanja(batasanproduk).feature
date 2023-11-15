Feature: 95. Create Koin Potongan Belanja (Batasan Produk)

  Scenario Outline: As a user, I can create koin potongan belanja - batasan produk
    Given I am on the Koin Potongan Belanja page
    When I click button 'Tambah'
    Then System should be leading to form Buat Koin Potongan Belanja page

    Given I am on the form Buat Koin Potongan Belanja page
    When I input form Detail Koin Potongan Belanja and submit
    Then System should be able to submit and leading to Koin Potongan Belanja page

    When I search and click button edit Koin Potongan Belanja
    Then System should be leading to Ubah Koin Potongan Belanja page

    When I input form and submit
    Then System should be able to submit form and leading to Koin Potongan Belanja page