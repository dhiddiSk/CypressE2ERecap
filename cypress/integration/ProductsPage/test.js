/// <reference types="Cypress" />
import {
    Given,
    When,
    Then,
    And,
    But
  } from "cypress-cucumber-preprocessor/steps";

Given(/^I should be in the ecommerce application \"([^\"]*)\" page.$/, function (webPage) {
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
     cy.pageValidation("ecommerceHomePage");
});
  
Then(/^I check if all the products are displayed as per requirements.$/, function () {
     cy.fixture('data.json').then((testDataSetFixture) => {
      console.log(testDataSetFixture.productsAndPrices);
     })
});

Then(/^I check if all the products are displayed correctly with correct price tags.$/, function () {
      
});
