Feature: Products page
    Here, the ecommerce page with products displayed are tested along with their functionalities.

    Background:
        Given I should be in the ecommerce application "homePage" page.

    Scenario: Validate the products.
        Then I check if all the products are displayed as per requirements.
        Then I check if all the products are displayed correctly with correct price tags.
