Feature: Adding items to kart
    Here, we are validating if the items are adding correctly when the user selects the product items.

    Background: 
        Given I should be in the ecommerce application "ecommerceHomePage" page.

    Scenario Outline: Add the products and validate the correctness
        Then I add <product> to the cart
        Then I check if <product> is correctly added and prices are correctly shown

        Examples:
                |product|
                |Cucumber|
                |Beans|
