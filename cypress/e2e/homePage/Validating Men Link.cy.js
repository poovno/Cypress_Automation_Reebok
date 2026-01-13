describe("Men's Flex Links",()=>{
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });
  const menPages =[
   "/c/all-featured-collection-for-men",
   "/c/men-bestsellers",
   "/c/plus-size",
   "/c/icons-men",
   "/c/topsellers-under-7500",
   "/c/men-footwear-all",
   "/c/men-running-shoes",
   "/c/men-gym-and-training-shoes",
   "/shop/men-walking",
   "/c/men-classics-sneakers",
   "/c/men-cricket-shoes",
   "/c/men-tennis-shoes",
   "/c/men-badminton-shoes",
   "/c/men-basketball-shoes",
   "/c/men-sandals-slippers",
   "/c/men-clothing",
   "/c/men-t-shirts",
   "/c/men-shorts",
   "/c/men-polo-shirts",
   "/c/men-pants-sweatpants",
   "/c/men-tank-tops-other-tees",
   "/c/men-tracksuit-tracktops",
   "/c/men-jackets",
   "/c/men-hoodies-sweatshirts",
   "/c/men-compression-tights",
   "/c/men-accessories",
   "/c/men-bags",
   "/c/men-socks",
   "/c/men-caps",
   "/c/men-face-masks",
   "/c/men-training-accessories",
   "/c/men-other-accessories-water-bottles"
  ]

  menPages.forEach((page)=>{

    it(`Validate page ${page}`,()=>{
      cy.visit(page);
      cy.url().should("include",page);
      cy.get("body").should("be.visible");
    })
  });


});