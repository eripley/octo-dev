@Smoke
Feature: User registration
  Scenario: Ordinary registration
    Given I on the main page
    When I click on the sign up button
    And I filling the form with parameters

      | email | name | company | phone |
      | mail@node.com | dave nate | nate inc | 899922233344 |

    And I choose a role "CEO"
    And I press a register button
    Then I see the text "mail@node.com" inside window
