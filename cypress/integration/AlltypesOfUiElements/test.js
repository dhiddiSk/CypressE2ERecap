/// <reference types="Cypress" />
import {
    Given,
    When,
    Then,
    And
  } from "cypress-cucumber-preprocessor/steps";

Given(/^I should be in the application \"([^\"]*)\" page$/, function (practicepage) {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.pageValidation(practicepage);
});

Then(/^I select the first radio button$/, function () {
    cy.get("#radio-btn-example label").eq(0).click();
});

Then(/^I select the first dropdown option$/, function () {
    cy.get('select').select('Option1').should('have.value', 'option1');
});

Then(/^I select the first checkbox option$/, function () {
   cy.get("#checkBoxOption1").check();
});
  
Then(/^I check if the element \"([^\"]*)\" is visible$/, function (element) {
    let  status;
    if(cy.find(element).length > 0){
        status = true;
    }
    expect(status).to.be.true;
});
  
Then(/^I click on the hide button at element \"([^\"]*)\"$/, function (element) {
    cy.get(element).click();
});
  
Then(/^I check if the element \"([^\"]*)\" is not visible$/, function (element) {
    let status;
    if(cy.find(element).length = 0){
        status = false;
    }
    expect(status).to.be.false;
});
