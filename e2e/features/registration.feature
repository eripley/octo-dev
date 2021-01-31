@Smoke
Feature: User registration
  Scenario: Ordinary registration
    Given I on the main page
    When I click on the sign up button
    #And I filling the form with parameters

    #  | email | name | company | phone |
    #  | doody@ya.ru | dave nate | nate inc | 899922233344 |

    And I choose a role
    #And I press a register button
    #Then I see the text "<string>" inside window
