Feature: 26. Push Notifikasi (push-notif-berlangganan)

  Scenario Outline: As a user, I can Create Push Notifikasi Berlangganan
    
    Given I am on the Daftar Notifikasi page
    When I click button Buat
    Then System should be leading to Buat Notifikasi page
    
    Given I am on the Buat Notifikasi page
    When I input Judul Notifikasi <judul_notifkasi>
    Then System should be input Judul Notifikasi
    
    When I input Konten Notifikasi <konten_notifikasi>
    Then System should be input Konten Notifikasi

    When I click Customer in Grup Pengguna
    Then System should be click Customer

    When I select time in Jam Terbit
    Then System should be select select Jam Terbit

    When I input Nama Halaman <nama_halaman>
    Then System should be input Nama Halaman
    
    When I input Isi Halaman <isi_halaman>
    Then System should be input Isi Halaman

    When I select Berlangganan only in Filter Pengguna Tipe Berlangganan
    Then System should be select Berlangganan only

    When I click CC in Tipe Konten
    Then System should be click CC

    When I click Semua in Batas Umur
    Then System should be click Semua in Batas Umur

    When I click button Simpan
    Then System should be submit data and leading to Daftar Notifikasi page

    Examples:
      | judul_notifkasi                      | konten_notifikasi                    | nama_halaman                         | isi_halaman                          | 
      | push notif berlangganan Testing Reda | push notif berlangganan Testing Reda | push notif berlangganan Testing Reda | push notif berlangganan Testing Reda |

