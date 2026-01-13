describe("Women's Flex Links",()=>{
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });
  const sNeakerPages =[
   "/c/shop-for-boys-on-sale",
   "/c/shop-for-girls-on-sale",
   "/c/all-for-kids-collection",
   "/c/shop-shoes-under-3000",
   "/c/shop-apparel-under-2500",
   "/c/shop-classics-under-4000",
   
  ]

  sNeakerPages.forEach((page)=>{

    it(`Validate page ${page}`,()=>{
      cy.visit(page);
      cy.url().should("include",page);
      cy.get("body").should("be.visible");
    })
  });


});