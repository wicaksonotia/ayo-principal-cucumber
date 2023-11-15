Feature: 75. CRUD Spin The Wheel (reward-coin-noncoin-dan-xp)

  Scenario Outline: As a user, I can create Spin The Wheel reward coin, non coin, dan xp
    
    Given I am on the Spin The Wheel page
    When I click button Buat
    Then System should be leading to form Buat Spin The Wheel page

    Given I am on the Buat Spin The Wheel page
    When I input Nama Program
    Then System should be able to input Nama Program

    When I search and select data in Nama Trade Program
    Then System should be able to search and select data in Nama Trade Program

    When I select date in Tanggal Mulai
    Then System should be able to select date in Tanggal Mulai

    When I select time in Jam Terbit
    Then System should be able to select time in Jam Terbit

    When I select date in Tanggal Berakhir
    Then System should be able to select date in Tanggal Berakhir

    When I select time in Jam Berakhir
    Then System should be able to select time in Jam Berakhir

    When I click button Simpan in form tab Spin The Wheel
    Then System should be able to submit data and leading to Spin The Wheel Page

    When I search in Spin The Wheel Page
    Then System should be able to search and find data

    When I click button Edit in Spin The Wheel Page
    Then System should be click button and leading to form Buat Spin The Wheel page

    When I click tab Audience
    Then System should be click tab Audience and leading to form tab Audience

    When I select Fixed Panel
    Then System should be able to select Fixed Panel

    When I click button Import XLSX and submit data
    Then System should be click button Import XLSX and submit data

    When I click button Export Template
    Then System should be able to download Template 

    When I click button check
    Then System should be check data and update panel blast

    When I click button Simpan
    Then System should be submit data in tab Audience

    When I click tab pengaturan mekanisme
    Then System should be leading to form tab pengaturan mekanisme

    When I input frekuensi belanja B2C Mingguan yang Dibutuhkan 
    Then System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan

    When I input Maksimal Frekuensi Reward User per Minggu
    Then System should be input Maksimal Frekuensi Reward User per Minggu

    When I click button tambah in Tier 1
    Then System should be show Tier 2

    When I input data in Tier 1
    Then System should be input in Tier 1

    When I input data in Tier 2
    Then System should be input in Tier 2

    When I click button Simpan in form tab Pengaturan Mekanisme
    Then System should be able to submit data in form tab Pengaturan Mekanisme

    When I click tab Preview
    Then System should be leading to form tab Preview

    When I insert Floating Icon and input Nama Program in form tab Preview
    Then System should be insert floating icon and input Nama Program in form tab Preview

    When I click button Simpan and Publish in form tab Preview
    Then System should be submit data and leading to Spin The Wheel Page

    When I search and click button Delete in Spin The Wheel Page
    Then System should be able to find and Delete data
