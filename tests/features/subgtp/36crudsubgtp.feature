Feature:  36. CRUD Sub GTP

  Scenario Outline: As a user, I can create, read, update and delete Sub GTP
    Given I am on the Sub GTP page
    When I click button 'Tambah'
    Then System should be leading to form create Sub GTP

    Given I am on the form create Sub GTP page
    When I input form and submit
    Then System should be able to submit Sub GTP and leading to Sub GTP page

    When I search a name
    Then System should be display the data based on search keyword

    When I edit and delete Sub GTP
    Then System should be delete Sub GTP