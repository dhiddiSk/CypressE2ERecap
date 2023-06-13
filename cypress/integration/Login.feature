Feature: User Login
    Here, it is to validate that only users with valid credentials can login to the bank application.

    Background: 
        Given I should be in the bank application "userLogin" page

    Scenario: User Valid Login
        When I enter valid credentials with userName as "john" and password as "demo"
        Then I click on button at element "input[type='submit']"
        Then I should be in the bank application "overview" page

    Scenario Outline: User Invalid Login
        When I enter invalid credentials with userName as <userName> and <password>
        Then I should be in the bank application "userLogin" page
        And I should see the error message "The username and password could not be verified." at element "#rightPanel .error"

        Examples:
            | userName | password |
            |  sai     |    123   |
            |  krishna |    124   |
