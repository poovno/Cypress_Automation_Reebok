// ✅ Helper function (define OUTSIDE describe)


describe("Entering a valid delivery address", () => {



  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
   
    
      cy.get('img[alt="close icon"]')
        .should('be.visible')
        .click({ force: true });
  
  
});
  it("Click and type delivery address", () => {

    // Step 1: Open delivery location modal
    cy.contains("Add delivery location")
      .should("be.visible")
      .click({ force: true });

    // Step 2: Type pincode / location
    cy.get('#addressInput', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type("560059");

    // Optional: validate address applied
    cy.contains("Bengaluru").should("be.visible").click();
   cy.contains('button','save location').should("be.visible").click({force:true});
  });

});
