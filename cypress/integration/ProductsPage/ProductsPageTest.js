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

        let itemIndex = 0;
        for(const item of Object.keys(testDataSetFixture.productsAndPrices)){
          let productName = '';
          let itemsTextWithPrice = '';
          cy.get(".product .product-name").eq(itemIndex).then($value => {
              itemsTextWithPrice = ($value.text().split("-"));
              productName = itemsTextWithPrice[0].trim();
              expect(item).equals(productName);
          })
          itemIndex +=1;
      }
    });
  }
);

Then(
  /^I check if all the products are displayed correctly with correct price tags.$/,
  function () {

    cy.fixture("data.json").then((testDataSetFixture) => {

      let itemIndex = 0;
      for(const item of Object.values(testDataSetFixture.productsAndPrices)){
        let productPrice = '';
        let itemsTextWithPrice = '';
        cy.get(".product .product-name").eq(itemIndex).then($value => {
            itemsTextWithPrice = ($value.text().split("-"));
            productPrice = itemsTextWithPrice[1].trim();
            expect(item).equals(productPrice);
        })
        itemIndex +=1;
    }
  });

  Then(/^I type the valid (.+) in the search bar.$/, function (productName) {
    cy.get('.search-keyword').type(productName);
  });
  
  Then(/^I validate if that entered (.+) is displayed in the webpage.$/, function (productName) {
    cy.get('.product .product-name').contains(productName);
  });
});
