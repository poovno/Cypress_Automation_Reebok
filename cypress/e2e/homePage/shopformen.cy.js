describe("SHOP FOR MEN",()=>{

    beforeEach(()=>{

        cy.viewport(1440,900);
        cy.visit("/");
        cy.get('.Login_closeBtn__x0ntr > img').click({force:true});

    });

    it("Shopping for?",()=>{
   

       cy.contains('SHOP BY CATEGORY').scrollIntoView();
       cy.contains('Shop for every movement').scrollIntoView(); 
       cy.contains('Shopping for?').scrollIntoView();
       cy.get(':nth-child(6) > section > .FullWidthMediaText_container__TbymS > .FullWidthMediaText_parentGrid__RPvep > .col-12 > .FullWidthMediaText_bannervideo__Q_QBv > .FullWidthMediaText_link__LFvu6 > .fullWidthImage').click({force:true});
       cy.url().should('include','men')


});

it("Best Sellers in Shopping for ? Men",()=>{

     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
     cy.contains('BEST SELLERS').click({force:true});
     cy.url().should("include","men-bestsellers");
});
it("Running Shoes in Shopping for ? Men",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
    cy.contains('RUNNING SHOES').click({force:true});
    cy.url().should("include","men-running-shoes");
});
it("Apparel in Shopping for ? Men",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
    cy.contains('APPAREL').click({force:true});
    cy.url().should("include","men-clothing");
});
it("Classics in Shopping for ? Men",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
     cy.get('[href="/c/men-footwear-classics"] > .MuiTypography-root').click({force:true});
     cy.url().should("include","men-classics-sneakers");
});
it("Shopping for?",()=>{
       cy.contains('SHOP BY CATEGORY').scrollIntoView();
       cy.contains('Shop for every movement').scrollIntoView(); 
       cy.contains('Shopping for?').scrollIntoView();
       cy.get(':nth-child(7) > section > .FullWidthMediaText_container__TbymS > .FullWidthMediaText_parentGrid__RPvep > .col-12 > .FullWidthMediaText_bannervideo__Q_QBv > .FullWidthMediaText_link__LFvu6 > .fullWidthImage').click({force:true});
       cy.url().should('include','women')


});
it("Best Sellers in Shopping for ? Women",()=>{

     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
     cy.get('[href="/c/best-sellers?page=1&orderby=popular&orderway=asc&fp[]=Gender__fq%3AWomen"] > .MuiTypography-root').click({force:true});
     cy.url().should("include","best-sellers");
});
it("Running Shoes in Shopping for ? Women",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
    cy.get('[href="/c/women-running"] > .MuiTypography-root').click({force:true});
    cy.url().should("include","women-running-shoes");
});
it("Apparel in Shopping for ? Women",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
    cy.get('[href="/c/women-clothing"] > .MuiTypography-root').click({force:true});
    cy.url().should("include","women-clothing");
});
it("Classics in Shopping for ? Women",()=>{
     cy.contains('SHOP BY CATEGORY').scrollIntoView();
     cy.contains('Shop for every movement').scrollIntoView();  
     cy.contains('Shopping for?').scrollIntoView();
     cy.get('[href="https://reebok.abfrl.in/c/allproducts?page=1&orderby=popular&orderway=asc&fp[]=Category__fq%3AClassics%20Shoes%7CGender__fq%3AWomen"] > .MuiTypography-root').click({force:true});
     cy.url().should("include","allproducts");
});

});