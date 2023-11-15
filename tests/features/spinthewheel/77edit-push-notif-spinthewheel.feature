Feature: 77. Edit push notif spin the wheel

  Scenario Outline: As a user, I can edit push notif spin the wheel
    
    Given I am on the Spin The Wheel page
    When I click button Buat Push Notif
    Then System should be leading to form Buat Spin The Wheel Notifikasi Page

    When I input Judul <judul>
    Then System should be input Judul

    When I click button Simpan
    Then System should be submit data and leading to Spin The Wheel Page

    When I click button Buat Push Notif2
    Then System should be leading to form Buat Spin The Wheel Notifikasi Page2

    Examples: 
      | judul                                 |
      | stw push notif edit Testing Reda      |

