Feature: As a user I log in Foodbank site

  @logIn
  Scenario: Go to site and log in

    When I am going to 'http://foodbank.d5.aisnovations.com/'
    When I click 'log in' button
    Then I should see 'Registered Customer' title
    When I input 'Email' into the field
    When I click 'Remember me on this computer' checkbox
    When I input 'Password' into the field
    When I click 'submit'
    Then I should see 'main_slider' element
    Then I should see 'log out' title on the button



