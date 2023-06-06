Feature: User Login

    Here, it is to validate that only users with valid credentials can login to the bank application.

    Background: 
        Given The user must be in the login page

    Scenario:
        When I enter valid credentials with userName as "john" and password as "demo"
       # Then I should be in the bank application "homePage" page
