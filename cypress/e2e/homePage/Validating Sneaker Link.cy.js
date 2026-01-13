describe("Women's Flex Links",()=>{
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });
  const sneakerPages =[
   "/c/new-arrivals-classic",
   "/c/all-collabs-classic",
   "/c/bestsellers-classic-styles",
   "/c/featured-collection-for-men",
   "/c/featured-collection-for-women",
   "/c/classic-leather-sneakers",
   "/c/club-c-sneakers",
   "/c/colour-sneakers",
   "/c/white-sneakers",
   "/c/sneakers-under-5k",
   "/c/all-sneakers",
   "/c/hrn-unisex"
  ]

  sneakerPages.forEach((page)=>{

    it(`Validate page ${page}`,()=>{
      cy.visit(page);
      cy.url().should("include",page);
      cy.get("body").should("be.visible");
    })
  });


});