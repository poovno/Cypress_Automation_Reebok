describe("Login flow (Mobile number )- Reebok",()=>
{

    beforeEach(()=>{
        cy.viewport(1440,900);
        cy.visit("/");
    
    });

    it("Login page opens Successfully",()=>
    {
      
        cy.get('input[placeholder="Enter 10 digit mobile number"]').should("be.visible").click({force:true});
        cy.get("body").should("be.visible");
    });

    it("Mobile number input field is visible",()=>{
         cy.contains("Log in").click({force:true});
         cy.get('input[type="mobile"],input[type="text"]').should("be.visible");

    });
    it("Shows invalidation error while entering mobile number",()=>{

        cy.contains("Log in").click({force:true});

        cy.get('input[type="tel"], input[type="text"]', { timeout: 10000 })
  .filter(':visible')
  .should('have.length',1)
  .scrollIntoView()
  .type("12345",{force:true});

        cy.contains("GET OTP").filter(":visible").should("be.enabled")
        .click({force:true});
        cy.contains("*Please enter a valid 10 digit mobile number").should("exist");

    });

    it("Valid mobile number Navigates to OTP Screen",()=>
    {
        cy.contains("Log in").click({force:true});
        cy.get('input[type="mobile"], input[type="text"]', { timeout: 10000 })
  .filter(':visible')
  .should("exist");
  

        cy.contains("GET OTP").filter(":visible").should("be.enabled")
        
    });
});