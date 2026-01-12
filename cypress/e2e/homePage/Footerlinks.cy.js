describe("Footer Links verification",()=>{

    beforeEach(()=>{

        cy.viewport(1440,900);
        cy.visit("/");
        cy.get('img[alt="close icon"]').should("be.visible").click({force:true});

    });
it("Footer Link Validation - Shipping Policy", () => {

  cy.get('img[alt="FREE SHIPPING"]')
  .parent('a')
  .invoke('removeAttr', 'target')
  .click();

cy.url().should('include', 'shipping-policy');
});

it("Footer Link Validation - 15 Days Return Policy",()=>{

    cy.get('img[alt="RETURN WITHIN 15 DAYS"]')
    .parent('a')
    .invoke('removeAttr','target')
    .click();
    cy.url().should('include','returns-cancel-policy');
});
it("Footer Link Validation - Express Delivery",()=>{


    cy.get('img[alt="EXPRESS DELIVERY IN STORE MODE"]')
    .parent('a')
    .invoke('removeAttr','target')
    .click();
    cy.url().should('include','#');
});

});