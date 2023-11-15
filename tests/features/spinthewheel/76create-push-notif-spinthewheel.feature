Feature: 76. Create push notif spin the wheel

  Scenario Outline: As a user, I can create push notif spin the wheel
    
    Given I am on the Spin The Wheel page
    When I click button Buat Push Notif
    Then System should be leading to form Buat Spin The Wheel Notifikasi Page

    When I input Judul <judul>
    Then System should be input Judul

    When I input Deskripsi Push Notifikasi <deskripsi>
    Then System should be input Deskripsi Push Notifikasi

    When I select date in Tanggal Mulai
    Then System should be select date in Tanggal Mulai

    When I select date in Tanggal Berakhir
    Then System should be select date in Tanggal Berakhir

    When I select time in Set Waktu
    Then System should be select time in Set Waktu

    When I select day in Interval Pengiriman
    Then System should be select day in Interval Pengiriman

    When I click button Simpan
    Then System should be submit data and leading to Spin The Wheel Page


Examples:
      | judul                            | deskripsi                                          | 
      | stw push notif Testing Reda      | Ayo lakukan spin dan dapatkan reward yang menarik! | 