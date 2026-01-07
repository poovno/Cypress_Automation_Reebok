describe("Is this Home Page Loading Successfully",()=>{
it("HomePage Loads Successfully",()=>{

    cy.visit("/");
    cy.get("body").should("be.visible");
})

})