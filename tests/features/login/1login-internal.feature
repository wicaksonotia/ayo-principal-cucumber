Feature: 1. Login internal to The Principal SRC website

  Scenario Outline: As a user internal, I can sign in into the Principal Ayo SRC website

    Given I am on the login page Ayo SRC
    When I login internal with <email>
    Then System should be leading to login Microsoft page

    When I input <pmintlEmail> Microsoft and submit
    Then System shold be leading to Pmiapps page

    When I input <password> Pmintl
    Then System sholud be leading to Verification Account
    
    When I click yes then input code <code>
    Then System should be leading to Dashboard page with <accountname>

    Examples:
      | email                                  | pmintlEmail         | username     | password    | code   | accountname |
      | sisda.utrujah@contracted.sampoerna.com | sutrujah@pmintl.net | PMI\sutrujah | !Samalia123 | 123456 | Sisda       |