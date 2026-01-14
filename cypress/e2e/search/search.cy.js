describe("Validating the Search icon",()=>{


    beforeEach(()=>{
        cy.viewport(1440,900);
        cy.visit("/");
          cy.get('img[alt="close icon"]', { timeout: 10000 })
      .click();
    });

    it("Validate the search icon by entering the invalid Characters",()=>{



        cy.get('input[placeholder="Search"]').click().type("1222").type('{enter}');
        cy.contains("Results for 1222").should("be.visible");
        
    });
    it("Validate the search results",()=>{

         cy.get('input[placeholder="Search"]').click().type("Men Shoes{enter}");
         cy.url().should("match",/search|men|shoes/i);

         cy.get('.ProductCard_productCard__yB6kN', { timeout: 15000 })
      .filter(':visible')
      .should('have.length.greaterThan', 0)
      .each(($card) => {

        // Extract description text
        const description = $card
          .find('.ProductCard_description__saIH8')
          .text()
          .toLowerCase();

        // ✅ Positive validation
        expect(
          description.includes("men") &&
          (description.includes("shoe") || description.includes("shoes") || description.includes("sneaker"))
        ).to.be.true;

        // Negative validation
        expect(description).to.not.include("women");
        expect(description).to.not.include("kids");
        expect(description).to.not.include("accessories");
      });
  });



    });



