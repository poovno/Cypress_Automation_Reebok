describe("Validating the Flex Links",()=>{

    beforeEach(()=>{
 
        cy.viewport(1440,900);
        cy.visit("/");
        cy.get('img[alt="close icon"]').click();
    });

 it("Hover on NEW and click first submenu link", () => {

  cy.contains('a', 'NEW')
    .should('be.visible')
    .trigger('mouseenter');

  // Wait for submenu to appear
  cy.get('a[href*="/c/"]', { timeout: 10000 })
    .filter(':visible')
    .first()
    .click({ force: true });

  cy.url().should('include', '/c/');
});

});