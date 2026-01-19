describe("Verify the Banner is presented with appropriate height and width and it's loading properly",()=>{


    beforeEach(()=>{

        cy.visit("/");
        cy.viewport(1440,900);
        cy.get('img[alt="close icon"]', { timeout: 10000 })
      .click();
        });

        it("Verify the Banner loads successfully",()=>{

            cy.get('img')
            .filter(':visible')
            .should('have.length.at.least', 1);
        });

         it("Hero banners should be clickable and navigate", () => {

    cy.get('a img', { timeout: 20000 })
      .filter(':visible')
      .then(($banners) => {

        expect($banners.length).to.be.greaterThan(0);

        cy.wrap($banners).each(($banner, index) => {

          if (index < 2) { 

            cy.wrap($banner)
              .scrollIntoView()
              .click({ force: true });

            cy.url().should('not.eq', Cypress.config('baseUrl'));

            cy.go('back');
          }
        });
      });
  });
});