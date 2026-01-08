describe("Homepage Testing ",()=>{
 it("Header is visible on home page",()=>{
  
    cy.visit("/");
    
    cy.get("header").should("be.visible");
    cy.url().should("include","reebok");
    

 });
 
});