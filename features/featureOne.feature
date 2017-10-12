@test
Feature: As a User I test homepage of Foodbank site

  @enter
  Scenario: Go to site and see main_slider
    When I go to 'http://foodbank.d5.aisnovations.com/'
    Then I should see 'main_slider' element

  @category
  Scenario: See products of Aceon category
   When I go to 'http://foodbank.d5.aisnovations.com/'
   When I click 'Aceon' link
   Then I should see 'Products: Aceon' title