Feature: 45. IR - Template Planogram

  Scenario Outline: As a user, I can create, edit and delete template planogram
    Given I am on the Master Group page
    When I click button 'Tambah' Master Group
    Then System should be leading to form create Master Group

    Given I am on the form create Master Group page
    When I input form Master Group and submit
    Then System should be able to submit Master Group and leading to Master Group page

    Given I am on the Master Brand page
    When I click button 'Tambah' Master Brand
    Then System should be leading to form create Master Brand

    Given I am on the form create Master Brand page
    When I input form Master Brand and submit
    Then System should be able to submit Master Brand and leading to Master Brand page

    Given I am on the Template Planogram page
    When I click button 'Tambah' Template Planogram
    Then System should be leading to form create Template Planogram

    Given I am on the form create Template Planogram page
    When I input form Template Planogram and submit
    Then System should be able to submit Template Planogram and leading to Template Planogram page

    When I edit and delete Template Planogram
    Then System should be delete Template Planogram

    When I edit and delete Master Brand
    Then System should be delete Master Brand

    When I edit and delete Master Group
    Then System should be delete Master Group