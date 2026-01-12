describe("Verifying the Store Locator Module Working Fine",()=>{


    beforeEach(()=>{
        cy.viewport(1440,900);
        cy.visit("/");
       
        cy.get('img[alt="close icon"]')
        .should('be.visible')
        .click({ force: true });
    });

    it("Clicking the store icon ",()=>{


        cy.contains("stores").click();
        cy.get("#addressInput", {timeout:12000}).should("be.visible").clear().type("Mysuru Road");
        cy.contains("Mysuru Road").should("be.visible").click({force:true});
        cy.contains("Reebok Mantri Malleswaram").should("be.visible").click({force:true});
        cy.url().should("include","details?");
        cy.screenshot("store-locator-selected-store");
        //verify the Store Details are present or not
        cy.contains("Reebok Mantri Malleswaram").should("be.visible");
        cy.contains("F-21 & 22 Mantri Square, No. 1, Sampige Road, Malleswaram, Bangalore - 560003").should("be.visible");
        cy.contains("Category").should("be.visible");
        cy.contains("mens, womens").should("be.visible");
        cy.contains("Contact").should("be.visible");
        cy.get('input[placeholder="Enter your mobile number"]').should("be.visible");
        cy.get('input[placeholder="Enter starting address"]').should("be.visible").clear().type("RR Nagar");
        cy.contains('button','Directions').should("be.visible").click();

        

        
    });


   //
});