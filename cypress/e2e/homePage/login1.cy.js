describe("Checking wheather the Login form accepting the Phone number",()=>{


    beforeEach(()=>{

     cy.viewport(1440,900);
     cy.visit("/");

    });

    it("Login function enter the phone number and navigate to OTP Entering Page",()=>{


        cy.get('input[placeholder="Enter 10 digit mobile number"]').should("be.visible").click().type(979120414);
        
        cy.get('button[type="submit"]')
  .contains('GET OTP')
  .click({force:true});
  
  cy.contains("Please enter a valid 10 digit mobile number")
      .should("be.visible");



    });
});