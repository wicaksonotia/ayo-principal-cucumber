Feature: 43. CRUD XP (Audience Fixed Panel)

  Scenario Outline: As a user, I can create XP - Audience Fixed Panel
    Given I am on the XP page
    When I click button 'Tambah'
    Then System should be leading to form create XP

    When I input form tab XP and submit
    Then System should be leading to tab Audience

    When I input form tab Audience and submit
    Then System should be leading to tab Pengaturan XP

    When I input form tab Pengaturan XP and submit
    Then System should be leading to tab Preview

    When I click button 'Publish'
    Then System should be leading to XP page and success publish XP

    #When I edit and delete XP
    #Then System should be delete XP