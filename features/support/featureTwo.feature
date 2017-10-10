Feature: As a user I log in Foodbank site

  @logIn
  Scenario: Go to site and log in
    Given I set up driver
    When I go to 'http://foodbank.d5.aisnovations.com/'
    When I click 'log in' button
    When I input 'Email'
    When I input 'Password'
    When I click 'submit' button
    Then I go to Homepage and see 'log out'

