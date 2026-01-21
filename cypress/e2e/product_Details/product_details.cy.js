describe("Verify whether the product pages is opening fine",()=>{


    beforeEach(()=>{

        cy.visit("/");
        cy.viewport(1440,900);
        cy.get('img[alt="close icon"]')
        .should('be.visible')
        .click({ force: true });
  
    });

    it("Verify the Selected Product is loaded Successfully",()=>{

        cy.get('input[placeholder="Search"]').click().type("Persona Wanderer - Men Black Running Shoes").type('{enter}');
        cy.get('img[alt*="Men"]',{timeout:15000})
        .filter(':visible')
        .first()
        .parents('a')
        .invoke('removeAttr','target')
        .click({force:true});


        cy.get('h1')
        .should("be.visible")
        .and('contain.text','Men');

        cy.contains('₹').should('be.visible');

        cy.get('img')
        .filter(':visible')
        .first()
        .should(($img)=>{
         expect($img[0].naturalWidth).to.be.greaterThan(0);
        
        });

        cy.get('h6[data-value="10"]', { timeout: 10000 })
        .filter(':visible')
        .not('.Mui-disabled')
        .first()
        .click({force:true});

        cy.get('h6[data-value="10"]', { timeout: 10000 })
        .should("have.class",'Size_active__Hc8FA');
         
        cy.wait(5000);
        cy.screenshot("Product Page",{timeout:10000});

        
    });


});