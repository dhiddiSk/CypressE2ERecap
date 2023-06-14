/// <reference types="Cypress" />
import {
  Given,
  When,
  Then,
  And,
  But
} from "cypress-cucumber-preprocessor/steps";

Given(
  /^I should be in the ecommerce application \"([^\"]*)\" page.$/,
  function (webPage) {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.pageValidation("ecommerceHomePage");
  }
);

Then(
  /^I check if all the products are displayed as per requirements.$/,
  function () {
    cy.fixture("data.json").then((testDataSetFixture) => {

        let testBasisDataObject = testDataSetFixture.productsAndPrices;
        console.log(typeof(testBasisDataObject));
      for(const item of Object.values(testBasisDataObject)){
          console.log(item);
      }
      
      // cy.get(".product .product-name").each(($el, index, $list) => {
      //        cy.get($el).then($value => {
      //         let itemsText = $value.text();
      //         console.log(itemsText);
      //        })
      // });
    });
  }
);

Then(
  /^I check if all the products are displayed correctly with correct price tags.$/,
  function () {}
);
