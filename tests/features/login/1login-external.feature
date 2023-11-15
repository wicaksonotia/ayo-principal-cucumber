Feature: 1. Login external to The Principal SRC website

  Scenario Outline: As a user external, I can sign in into the Ayo SRC website

    Given I am on the login page Ayo SRC
    When I login internal with <email> and <password>
    #Then System will leading to Verification Account page for <email>
    
    #When I input verification code <code> and submit
    Then System should be leading to Dashboard page and show Account Name <accountname>

    Examples:
      | email                               | password     | code        | accountname |
      | reda.meiningtiyas@weekendinc.com    | Reda123456   | 123456      | Reda        |