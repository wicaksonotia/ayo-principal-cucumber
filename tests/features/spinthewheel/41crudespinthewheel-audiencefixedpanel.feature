Feature: 41. CRUD Spin The Wheel (Audience Fixed Panel) dan Export

  Scenario Outline: As a user, I can create and export Spin The Wheel - Audience Fixed Panel
    Given I am on the Spin The Wheel page
    When I click button 'Tambah'
    Then System should be leading to form create Spin The Wheel

    When I input form tab Spin The Wheel and submit
    Then System should be leading to tab Audience

    When I input form tab Audience and submit
    Then System should be leading to tab Pengaturan Mekanisme

    When I input form tab Pengaturan Mekanisme and submit
    Then System should be leading to tab Preview

    When I click button 'Publish'
    Then System should be leading to Spin The Wheel page and success publish Spin The Wheel

    When I delete Spin The Wheel
    Then System should be delete Spin The Wheel