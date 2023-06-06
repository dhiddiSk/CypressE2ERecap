/// <reference types="Cypress" />
import {
    Then,
    Given,
    When
  } from "cypress-cucumber-preprocessor/steps";

Given(/^The user must be in the login page$/, function () {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    });
  
When(/^I enter valid credentials with userName as \"([^\"]*)\" and password as \"([^\"]*)\"$/, function (john, demo) {
      cy.get('input[type="text"]').type(john);
      cy.get('input[type="password"]').type(demo);
      cy.get('input[type="submit"]').click();
    });
