/// <reference types="Cypress" />
import {
    Given,
    When,
    Then,
    And
  } from "cypress-cucumber-preprocessor/steps";

import MobileShopping from '../../support/pageObjects/MobileShopping'
const mobileShop = new MobileShopping();

Given(/^I should be in the application \"([^\"]*)\" page$/, function (webPage) {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
    cy.pageValidation("mobileShopHomePage");
});

Then(/^I select the mobile (.+) in the shopping page.$/, function (mobileType) {
    mobileShop.addPhoneToCart(mobileType);
});

Then(/^I click on the checkout button$/, function () {
    (mobileShop.getShoppingCartCheckout()).click();
});

Then(/^I validate the total cost (.+) of item$/, function (price) {
    const itemCost = (mobileShop.getBillingTotalCost()).then(($element) => {
           let value = $element.text();
        expect(value).contains(price);
    });
});
