Feature: Practicing all types of UI elements
        Here, all types of UI elements are validated

    Background:
        Given I should be in the application "practicePage" page

    Scenario: Selecting radio buttons, dropdowns and checkboxes
        Then I select the first radio button
        Then I select the first dropdown option
        Then I select the first checkbox option

    Scenario: Validate the element visibility
        Then I check if the element "input[style = 'display: block;']" is visible
        Then I click on the hide button at element "#hide-textbox"
        Then I check if the element "input[style = 'display: block;']" is not visible
