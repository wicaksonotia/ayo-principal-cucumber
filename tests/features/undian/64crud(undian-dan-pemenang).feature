Feature: 64. CRUD (undian-dan-pemenang)

  Scenario Outline: As a user, I can create Undian dan Pemenang
    
    Given I am on the Undian page
    When I click button Tambah
    Then System should be leading to Buat Undian page1

    Given I am on the Buat Undian page
    When I input nama program kupon undian <nama_program>
    Then System should be input nama program kupon undian

    When I input jumlah koin yang dibutuhkan per kupon <jumlah_koin>
    Then System should be input jumlah koin yang dibutuhkan per kupon

    When I select date in Tanggal awal penukaran kupon undian
    Then System should be input date in Tanggal awal penukaran kupon undian

    When I select time in Jam Terbit
    Then System should be select time in Jam Terbit

    When I select date in Tanggal Berakhir Penukaran Kupon Undian
    Then System should be select date in Tanggal Berakhir Penukaran Kupon Undian

    When I select time in Jam Berakhir
    Then System should be select time in Jam Berakhir

    When I select date in Tanggal Pengumuman Pemenang Berakhir
    Then System should be select date in Tanggal Pengumuman Pemenang Berakhir

    When I select time in Jam Pengumuman Pemenang Berakhir
    Then System should be select time in Jam Pengumuman Pemenang Berakhir

    When I click Sub Group Trade Program
    Then System show input search

    When I input Sub GTP Weekend 2023 in searchbox <input_sgtp>
    Then System show Sub GTP Weekend 2023

    When I select Sub GTP Weekend 2023 in Sub Group Trade Program
    Then System should be select Sub GTP Weekend 2023 in Sub Group Trade Program

    When I click button Simpan in Tab Undian
    Then System should be submit data in Tab Undian and leading to Undian Page

    When I click button Edit <nama_program>
    Then System should be leading to Buat Undian Page2

    When I click tab Audience
    Then System show form in Tab Audience

    When I click radio button Fixed Panel
    Then System should be click Fixed Panel

    When I click button Import XLSX
    Then System show popup Unggah File XLSX 

    When I unggah file XLSX
    Then System show data penjual

    When I click button Kirim
    Then System should be submit data and close popup Unggah File XLSX

    When I click button Export Template
    Then System should be able to download Template

    When I click button check
    Then System update panel blast

    When I click button Simpan in Tab Audience
    Then System should be submit data in Tab Audience

    When I click Tab Preview
    Then System show form in Tab Preview

    When I insert Visual Header Kupon Undian
    Then System show Visual Header Kupon Undian

    When I insert Visual Header di List Program Kupon Undian
    Then System show Visual Header di List Program Kupon Undian

    When I input Deskripsi Kupon Undian <deskripsi_kupon>
    Then System should be input Deskripsi Kupon Undian

    When I click toggle bar Aktifkan
    Then System should be click toggle bar Aktifkan

    When I input Deksripsi T&C <deskripsi_tc>
    Then System should be input Deksripsi T&C

    When I click button Simpan in Tab Preview
    Then System submit data in Tab Preview

    When I click tab List Pemenang
    Then System show form in Tab List Pemenang

    When I insert Gambar Visual Header Pemenang Undian
    Then System show Visual Header Pemenang Undian

    When I click button download list pemenang
    Then System should be download Template list pemenang

    When I insert file List Pemenang Undian
    Then System show file List Pemenang Undian

    When I click button simpan in tab List Pemenang
    Then System should be submit data List Pemenang

    When I click button Publish
    Then System should be leading to Undian Page3

    When I search and click button Delete in Undian Page <nama_program>
    Then System should be able to find and Delete data
    


Examples:
      | nama_program            | jumlah_koin| input_sgtp           | deskripsi_kupon      | deskripsi_tc         |
      | Undian Reda Testing     | 5          | Sub GTP Weekend 2023 | kupon undian weekend | syarat dan ketentuan |