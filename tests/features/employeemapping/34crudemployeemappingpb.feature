Feature: 34. CRUD Employee Mapping (Pojok Bayar)

  Scenario Outline: As a user, I can create, read, update and delete employee - pojok bayar
    Given I am on the Employee Mapping page
    When I click button 'Tambah'
    Then System should be leading to form create Employee Mapping

    Given I am on the form create Employee Mapping page
    When I input form with metode pembayaran 'Pojok Bayar' and submit
    Then System should be able to submit Employee Mapping and leading to Employee Mapping page

    When I search a employee
    Then System should be display employee data based on search keyword

    When I edit and delete employee
    Then System should be delete employee