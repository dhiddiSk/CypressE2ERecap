Feature: Practicing the pageObject model pattern for mobile shopping
    Here, the methods are imported from the pageObject file.

    Background:
        Given I should be in the application "mobileShopHomePage_url" page

    Scenario Outline: Select the mobile and add them to shopping cart to billing page
        Then I select the mobile <type> in the shopping page.
        Then I click on the checkout button
        Then I validate the total cost <cost> of item

        Examples:
            | type         | cost  |
            | iphoneX      | 24.99 |
            | SamsungNote8 | 24.99 |
            | NokiaEdge    | 24.99 |
            | Blackberry   | 24.99 |


