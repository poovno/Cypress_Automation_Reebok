describe("Smoke Test - Reebok Home Page",()=>{

  it("Valid URL loads Reebok website",()=>{
        cy.visit("/");
        cy.get("body").should("be.visible");
  });
});