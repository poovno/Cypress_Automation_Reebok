describe("Header Links Validation",()=>{

    beforeEach( ()=>{
    
        cy.visit("/")
        cy.viewport(1440,900);
    });

    const headerLinks=[
        "NEW",
        "MEN",
        "WOMEN",
        "SPORTS",
        "SNEAKERS",
        "SALE",
        "GIFT CARD",

    ];

    headerLinks.forEach((linkText)=>{
        it(`Header link '${linkText}' navigates Correctly`,()=>{
           
            cy.contains(linkText)
            .should("be.visible")
            .click({force:true});

            
            cy.get("body").should("be.visible");
             
      cy.get("header").should("be.visible");
        });
    });

    it("Reebok logo navigates back to home page",()=>{
      
        cy.contains("MEN").click({force:true});

        cy.get("header")
        .find("a")
        .first()
        .click({force:true});

        cy.url().should("include","reebok");
    });

   it("Login link clickable",()=>{
  
    cy.contains("log in").click({force:true});
    cy.get("body").should("be.visible");
   });

   it("Wishlist link is clickable",()=>{
   
     cy.get('div[role="button"]')
    .eq(0) 
    .should("be.visible")
    .click({ force: true });
   

    cy.get("body").should("be.visible");

   });

   it("Cart link is clickable",()=>{

     cy.get('div[role="button"]')
    .eq(1) // Cart
    .should("be.visible")
    .click({ force: true });
    cy.get("body").should("be.visible");
   });

   it("Homepage Loads Successfully",()=>{

    cy.url().should("include","reebok");
    cy.title().should("include","Reebok");
    cy.get("body").should("be.visible");

   });



  it("Header and Footer visible",()=>{

    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");

  });
  it("Home page consists Hero banners or promotional sections",()=>{

    cy.get("img")
    .filter(":visible")
    .should("have.length.greaterThan",2);

  });

  it("Primary Navigation options are visible ",()=>{

    const navItems=['MEN','WOMEN','SALE']

    navItems.forEach((navitem)=>{
        cy.contains(navitem).should("be.visible");
    });
  });

  it("Search option is available for users ",()=>{
   
    cy.get('input[placeholder="Search"]')
  .should("be.visible")
  .type("shoes{enter}");

  });

  it("Wishlist and Cart icons are present ",()=>{
    cy.get("header")
    .find('div[role="button"]').should("have.length.at.least", 2);

  });

  it("Homepage does not show blank or broken state",()=>{


    cy.contains("Something went wrong").should("not.exist");
    cy.contains("Error").should("not.exist");
  });

  it("Users can scroll through homepage",()=>{

    cy.scrollTo("bottom")
    cy.get("footer").should("be.visible");
  });
});


