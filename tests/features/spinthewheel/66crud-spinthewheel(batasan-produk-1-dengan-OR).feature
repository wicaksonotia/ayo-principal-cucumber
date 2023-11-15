Feature: 66. CRUD Spin The Wheel (batasan-produk-1-dengan-OR)

  Scenario Outline: As a user, I can create Spin The Wheel batasan produk 1 dengan OR
    
    Given I am on the Spin The Wheel page
    When I click button Buat
    Then System should be leading to form Buat Spin The Wheel page

    Given I am on the Buat Spin The Wheel page
    When I input Nama Program <nama_program>
    Then System should be able to input Nama Program

    When I search and select data in Nama Trade Program <nama_trade_program>
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

    When I search in Spin The Wheel Page <nama_program>
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

    When I input frekuensi belanja B2C Mingguan yang Dibutuhkan <frekuensi_belanja>
    Then System should be input frekuensi belanja B2C Mingguan yang Dibutuhkan

    When I input Maksimal Frekuensi Reward User per Minggu <maksimal_frekuensi>
    Then System should be input Maksimal Frekuensi Reward User per Minggu

    When I select radio button Pembatasan Produk dan Kategori
    Then System should be select radio button Pembatasan Produk and Kategori

    When I select radio button Batasi dengan Produk
    Then System should be select radio button Batasi dengan Produk

    When I search and select data in Batasan Berdasarkan Produk1 <batasan_berdasarkan_produk1>
    Then System should be able to search and select data in Batasan Berdasarkan Produk1

    When I search and select data in Batasan Berdasarkan Produk2 <batasan_berdasarkan_produk2>
    Then System should be able to search and select data in Batasan Berdasarkan Produk2

    When I input Nilai Transaksi Minimal1 <nilai_transaksi_minimal1>
    Then System should be input Nilai Transaksi Minimal1

    When I input Nilai Transaksi Minimal2 <nilai_transaksi_minimal2>
    Then System should be input Nilai Transaksi Minimal2

    When I select radio button OR in Kombinasi Pembatasan Produk Kategori
    Then System should be select radio button OR 

    When I input minimum nilai transaksi <minimum_nilai_transaksi>
    Then System should be input minimum nilai transaksi

    When I input Limit spin <limit_spin>
    Then System should be input Limit Spin

    When I input Jumlah Variasi Koin <jumlah_variasi_koin>
    Then System should be input Jumlah Variasi Koin

    When I click button RewardXP
    Then System should be show input form

    When I input coin1 <coin1>
    Then System should be input coin1

    When I input coin2 <coin2>
    Then System should be input coin2

    When I input XP <xp>
    Then System should be input XP

    When I input slice1 <slice1>
    Then System should be input slice1

    When I input slice2 <slice2>
    Then System should be input slice2

    When I input slice3 <slice3>
    Then System should be input slice3

    When I input probability1 <probability1>
    Then System should be input probability1

    When I input probability2 <probability2>
    Then System should be input probability2

    When I input probability3 <probability3>
    Then System should be input probability3

    When I click button Simpan in form tab Pengaturan Mekanisme
    Then System should be able to submit data in form tab Pengaturan Mekanisme

    When I click tab Preview
    Then System should be leading to form tab Preview

    When I insert Floating Icon and input Nama Program in form tab Preview <nama_program>
    Then System should be insert floating icon and input Nama Program in form tab Preview

    When I click button Simpan and Publish in form tab Preview
    Then System should be submit data and leading to Spin The Wheel Page

    When I search and click button Delete in Spin The Wheel Page <nama_program>
    Then System should be able to find data and Delete data


Examples:
      | nama_program                           | nama_trade_program | batasan_berdasarkan_produk1 | batasan_berdasarkan_produk2 | frekuensi_belanja | maksimal_frekuensi | nilai_transaksi_minimal1 | nilai_transaksi_minimal2 | minimum_nilai_transaksi | limit_spin | jumlah_variasi_koin | coin1 | coin2 | xp   |slice1 | slice2 |slice3  | probability1 | probability2 | probability3 |
      | STW Batasan Produk 1 OR Testing Reda   | Trade Program Reda | Indomie Goreng Sate         | Avolution Menthol 20        | 2                 | 3                  | 4000                     | 30000                    | 2000                    | 3          | 2                   | 10    | 12    |20    | 2     | 3      | 3      | 30           | 40           | 30          |

