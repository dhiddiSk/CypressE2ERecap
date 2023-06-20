/// <reference types="Cypress" />

class MobileShoppingClass {
  addPhoneToCart(PhoneType) {
    let phone = PhoneType;
    switch (phone) {
      case "iphoneX":
        cy.get(".row app-card:nth-child(1) .btn.btn-info").click();
        break;
      case "SamsungNote8":
        cy.get(".row app-card:nth-child(2) .btn.btn-info").click();
        break;
      case "NokiaEdge":
        cy.get(".row app-card:nth-child(3) .btn.btn-info").click();
        break;
      case "Blackberry":
        cy.get(".row app-card:nth-child(2) .btn.btn-info").click();
        break;
    }
  }

  getShoppingCartCheckout(){
    return cy.get(".nav-link.btn.btn-primary");
  }

  getBillingCheckout(){
    return cy.get(".btn.btn-success");
  }

  getBillingTotalCost(){
    return cy.get(".text-right");
  }

}
export default MobileShoppingClass;
