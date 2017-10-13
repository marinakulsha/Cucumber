Feature: As a user I log in Foodbank site

  @logIn
  Scenario: Go to site and log in

    When I go to 'http://foodbank.d5.aisnovations.com/'
    When I click 'Log in' element
    Then I should see 'Registered Customer' element on page
    When I input 'Email' value
    When I click 'Remember Me on this computer' element
    When I input 'Password' value
    When I click 'Submit' element
    Then I should see 'main_slider' element on page
    Then I should see 'log out' element on page



