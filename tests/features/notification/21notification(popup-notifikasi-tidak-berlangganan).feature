Feature: 21. Popup Notifikasi (popup-notifikasi-tidak-berlangganan)

  Scenario Outline: As a user, I can Create Popup Notifikasi Tidak Berlangganan
    
    Given I am on the Daftar Popup Notifikasi page
    When I click button Buat
    Then System should be leading to Buat Popup Notifikasi page
    
    Given I am on the Buat Popup Notifikasi page
    When I input Judul Popup Notifikasi <judul_popup_notifkasi>
    Then System should be input Judul Popup Notifikasi

    When I select time in Buat Notifikasi
    Then System should be select Buat Notifikasi

    When I select time in Jam Berakhir
    Then System should be select Jam Berakhir

    When I input Yes in Positif Button <positif_button>
    Then System should be input in Positif Button
    
    When I input No in Negatif Button <negatif_button>
    Then System should be input in Negatif Button

    When I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi
    Then System show Gambar Popup Notifikasi

    When I select Customer in Grup Pengguna
    Then System should be select Customer in Grup Pengguna

    When I select Tidak Berlangganan in Status Berlangganan
    Then System should be select Tidak Berlangganan
    
    When I click radio button CC in Tipe Konten
    Then System should be select radio button CC

    When I input Dari in Batasan Umur <input_dari>
    Then System should be input Dari in Batasan Umur

    When I input Sampai in Batasan Umur <input_sampai>
    Then System should be input Sampai in Batasan Umur

    When I select Statistic Page in Tipe Konten
    Then System should be select Statistic Page

    When I input Isi Halaman <isi_halaman>
    Then System should be input Isi Halaman

    When I click button Simpan
    Then System should be submit data and leading to Daftar Popup Notifikasi page

    Examples:
      | judul_popup_notifkasi                           | positif_button     | negatif_button   |input_dari   |input_sampai  | isi_halaman                                      | 
      | popup notifikasi tidak berlangganan Testing Reda| Yes                | No               |18           |50            | popup notifikasi tidak berlangganan Testing Reda |

