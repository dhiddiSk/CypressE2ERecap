Feature: Products page.
    Here, the ecommerce page with products displayed are tested along with their functionalities.

    Background:
        Given I should be in the ecommerce application "ecommerceHomePage" page.

    Scenario: Validate the products.
        Then I check if all the products are displayed as per requirements.
        Then I check if all the products are displayed correctly with correct price tags.
    
    Scenario Outline: Validate the search function functionality.
        Then I type the valid <product> in the search bar.
        Then I validate if that entered <product> is displayed in the webpage.
        
        Examples:
            | product |
            | Cucumber |
            | Beans |

