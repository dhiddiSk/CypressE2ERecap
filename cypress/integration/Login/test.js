/// <reference types="Cypress" />
import {
    Given,
    When,
    Then,
    And
  } from "cypress-cucumber-preprocessor/steps";

  
When(/^I enter valid credentials with userName as \"([^\"]*)\" and password as \"([^\"]*)\"$/, function (username, password) {
  cy.get('input[type="text"]').type(username);
  cy.get('input[type="password"]').type(password);
});
  
When(/^I enter invalid credentials with userName as (.+) and (.+)$/, function (username, password) {
  cy.get('input[type="text"]').type(username);
  cy.get('input[type="password"]').type(password);
});

Given(/^I should be in the bank application \"([^\"]*)\" page$/, function (page) {
  cy.visit("https://parabank.parasoft.com/parabank");
  cy.pageValidation(page);
});
  
Then(/^I should be in the bank application \"([^\"]*)\" page$/, function (page) {
  cy.pageValidation(page);
});
  
Then(/^I click on button at element \"([^\"]*)\"$/, function (element) {
  cy.get(element).click();
});

And(/^I should see the error message \"([^\"]*)\" at element \"([^\"]*)\"$/, function (errorMessage, errorElement) {
      cy.get(errorElement).contains(errorMessage);
});
