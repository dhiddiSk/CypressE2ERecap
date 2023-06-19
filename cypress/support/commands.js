// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


Cypress.Commands.add('pageValidation', (webPage) => {
    switch(webPage){
        case "userLogin":
            cy.url().should('include', Cypress.env('loginPage_url'));
            break;       
        case "overview": 
            cy.url().should('include', Cypress.env('overview_url'));
            break;
        case "ecommerceHomePage":
            cy.url().should('include', Cypress.env('ecommerceLoginPage_url'));
            break;
        case "practicePage":
            cy.url().should('include', Cypress.env('practicePage_url'));
        default:
            console.log("The requested web page is not available");
    }
})
