import {
  Given,
  When,
  Then,
  And,
  But,
} from "cypress-cucumber-preprocessor/steps";

Given(
  /^I should be in the ecommerce application \"([^\"]*)\" page.$/,
  function (webPage) {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.pageValidation(webPage);
  }
);

Then(/^I add (.+) to the cart$/, function (productName) {
  let itemIndex;
    cy.get("h4[class = product-name]").each(($el, index, $list) => {
    let itemName;
    cy.get("h4[class = product-name]").eq(index).then(($value) => {
      itemName = $value.text();
      console.log(typeof(productName));
      if (itemName.includes(productName)) {
         itemIndex = index;
         cy.get(".product-action button").eq(itemIndex).click();
      }
    });
  });
 
});

Then(/^I check if (.+) is correctly added and prices are correctly shown$/, function (product) {
   // Here '1' represents number of items, it's by default one for the given test condition.
   cy.get(".cart-info tr:nth-child(1)").contains('1');
    let productPrice;
    cy.fixture("data.json").then((productsData) => {
        productPrice = productsData.productsAndPrices[product];
        cy.get(".cart-info tr:nth-child(2)").contains((productPrice).toString());
    });
    
});
