Feature: 44. CRUD XP (Audience Population Blast)

  Scenario Outline: As a user, I can create XP - Audience Population Blast
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