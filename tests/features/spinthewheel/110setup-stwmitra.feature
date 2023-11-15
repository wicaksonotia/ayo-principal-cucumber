Feature: 110. Setup (STW-Mitra)

  Scenario Outline: As a user, I can create Setup STW Mitra
    
    Given I am on the Spin The Wheel page
    When I click button Setup STW Mitra
    Then System should be leading to Buat Spin The Wheel Mitra Setup Page

    Given I am on the Buat Spin The Wheel Mitra Setup Page
    When I insert image in Floating Icon AYO SRC Toko Home Page
    Then System should be insert Floating Icon

    When I input Judul <judul_setup>
    Then System should be able to input Judul

    When I input Deskripsi Push Notifikasi <input_deskripsi>
    Then System should be able to input Deskripsi Push Notifikasi

    When I select date in Tanggal Mulai
    Then System should be able to select date in Tanggal Mulai

    When I select date in Tanggal Berakhir
    Then System should be able to select date in Tanggal Berakhir

    When I select time in Set Waktu
    Then System should be able to select time in Set Waktu

    When I select in Interval Program
    Then System should be able to select in Interval Program

    When I click button Simpan
    Then System should be submit data and leading to Spin The Wheel Page

    When I click button Setup STW Mitra2
    Then System should be leading to Buat Spin The Wheel Mitra Setup Page2

    When I input Judul2 <judul_setup2>
    Then System should be able to input Judul2

    When I input Deskripsi Push Notifikasi2 <input_deskripsi2>
    Then System should be able to input Deskripsi Push Notifikasi2

    When I select date in Tanggal Mulai2
    Then System should be able to select date in Tanggal Mulai2

    When I select date in Tanggal Berakhir2
    Then System should be able to select date in Tanggal Berakhir2

    When I select in Interval Program2
    Then System should be able to select in Interval Program2

    When I click button Simpan2
    Then System should be submit data and leading to Spin The Wheel Page2

Examples:
    | judul_setup    | input_deskripsi         | judul_setup2         | input_deskripsi2         |
    | setup stw reda | deskripsi setup pertama | setup stw reda edit  | deskripsi setup edit     |
