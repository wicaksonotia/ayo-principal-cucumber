Feature: 60. CRUD Field Force

  Scenario Outline: As a user, I can create, read, update and delete Field Force
    Given I am on Field Force page
    When I click button 'Tambah'
    Then System should be leading to form create Field Force

    Given I am on form create Field Force page
    When I input form and submit
    Then System should be able to submit form Field Force and leading to Field Force page

    When I edit and delete Field Force
    Then System should be delete Field Force