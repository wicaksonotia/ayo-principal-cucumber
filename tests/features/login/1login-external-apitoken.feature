Feature: Login internal to The Principal SRC website

  Scenario Outline: As a user, I can sign in into the Ayo SRC website

    Given I am on the login page Ayo SRC
    When I login internal
    Then System will leading to Verification Account page for <email>
    
    When I input verification code <code> and submit
    Then System should be leading to Dashboard page and show Account Name <accountname>

    Examples:
      | email                           | password  | code   | accountname |
      | hanifah.budianto@weekendinc.com | Hani_2525 | 123456 | Hanifah Budianto |