Feature: 32. B2C Voucher (voucher-tipe-perokok-cc-dan-iqos)

  Scenario Outline: As a user, I can Create Voucher Tipe Pengguna CC dan IQOS
    
    Given I am on the B2C Voucher page
    When I click button Tambah
    Then System should be leading to Create B2C Voucher page
    
    Given I am on the Tambah B2C Voucher page
    When I input Nama voucher <nama_voucher>
    Then System should be input Nama Voucher

    When I input Nama Lain Voucher <nama_lain_voucher>
    Then System should be input Nama Lain Voucher

    When I input Nilai Voucher <nilai_voucher>
    Then System should be input Nilai Voucher

    When I input Jumlah Voucher per Customer <jumlah_voucher>
    Then System should be input Jumlah Voucher per Customer

    When I select date in Tanggal Awal Program
    Then System should be select date Tangal Awal Program
    
    When I select date in Tanggal Akhir Program
    Then System should be select date Tanggal Akhir Program

    When I select date in Tanggal Awal Pemakaian Voucher
    Then System should be select date Tanggal Awal Pemakaian Voucher

    When I select date in Tanggal Kadaluarsa Voucher
    Then System should be select date Tanggal Kadaluarsa Voucher

    When I select Pesan Antar in Pengguna Voucher
    Then System should be select Pesan Antar

    When I select Langsung ke Toko in Pengguna Voucher
    Then System should be select Langsung ke Toko

    When I click button Simpan in Detail Voucher form Page
    Then System should be submit data and leading to Panel Retailer Form Page

    When I click button Simpan in Panel Retailer Form Page
    Then System should be leading to Panel Customer Form Page
    
    When I select Perokok CC in Tipe Customer
    Then System should be select Perokok CC in Tipe Customer

    When I select Pengguna IQOS in Tipe Customer
    Then System should be select Pengguna IQOS in Tipe Customer

    When I input Dari in Batasan Umur <input_dari>
    Then System should be input Dari

    When I input Sampai in Batasan Umur <input_sampai>
    Then System should be input Sampai

    When I select Semua in Jenis Kelamin
    Then System should be select Semua in Jenis Kelamin

    When I click button Simpan in Panel Customer
    Then System should be submit data and leading to Penukaran Voucher Form Page

    When I select Reimbursment in Penukaran Voucher Form Page
    Then System should be select Reimbursment

    When I select date in Tanggal Awal Penukaran Voucher
    Then System should be select date Tanggal Awal Penukaran Voucher

    When I select date in Tanggal Berakhir Penukaran Voucher
    Then System should be select date Tanggal Berakhir Penukaran Voucher

    When I select Voucher B2B in Opsi Penukaran Voucher
    Then System should be select Voucher B2B

    When I click button Simpan in Penukaran Voucher
    Then System should be submit data and leading to Design Voucher Form Page
     
    When I insert Voucher in TEMPLATE F
    Then System show Voucher

    When I input Isi Halaman <isi_halaman>
    Then System should be input Isi Halaman

    When I click button Simpan in Design Voucher
    Then System should be submit data and leading to Preview Voucher Page1
   
    When I click button SAVE SETTING
    Then System should be SAVE SETTING

    When I click button PROCESS TO APPROVAL
    Then System should be PROCESS TO APPROVAL

    When I click button APPROVE
    Then System should be APPROVE

    When I click button Ya Lanjutkan
    Then System should be Ya Lanjutkan

    When I click button Publish1
    Then System should be Publish

    When I click button Publish2
    Then System should be Publish and leading to Preview Voucher Page


    Examples:
      | nama_voucher                                  | nama_lain_voucher                              | nilai_voucher |jumlah_voucher  |input_dari   |input_sampai  | isi_halaman                                   | 
      | Voucher Tipe Perokok CC dan IQOS Testing Tia | Voucher Tipe Perokok CC dan IQOS Testing Tia  | 2500          |3               |18           |50            | Voucher Tipe Perokok CC dan IQOS Testing Tia |

