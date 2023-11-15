Feature: [PRINCIPAL] 5032. Create Koin Potongan Belanja (Batasan Kategori)

  Scenario Outline: As a user, I can create koin potongan belanja - batasan kategori
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