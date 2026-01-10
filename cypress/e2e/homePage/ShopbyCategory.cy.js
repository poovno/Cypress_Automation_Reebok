describe("Verify the shopby Category is working fine with URL Change",()=>{


    beforeEach(()=>{
     
        cy.visit("/");
        cy.viewport(1440,900);
        cy.get('.Login_closeBtn__x0ntr > img').click({force:true});
        

    });

    it("Shop By Category Footwear",()=>{

        cy.contains('SHOP BY CATEGORY')
      .scrollIntoView();
        
        
       cy.get('.FlashDealBanner_dealsCardContainer__6CxM_ > :nth-child(1) > a > .fullWidthImage').click({force:true});
        cy.url().should("include","footwear",{timeout:12000});
    });

    it("Shop By Category Apparel",()=>{


        cy.get(':nth-child(2) > a > .fullWidthImage').click({force:true});
        cy.url().should("include","apparel");
    });

    it("Shop By Category Accessories",()=>{

        cy.get(':nth-child(3) > a > .fullWidthImage').click({force:true});

        cy.url().should("include","accessories")
    });

    it("Shop by Every Movement",()=>{

   
        cy.contains('SHOP BY CATEGORY').scrollIntoView();
        cy.contains('Shop for every movement')
        .scrollIntoView();
        cy.contains("WALKING").click({force:true});
        cy.contains("CLASSICS").click({force:true});
        cy.contains("TRAINING").click({force:true});
        cy.contains("RUNNING").click({force:true});
        
    });
});