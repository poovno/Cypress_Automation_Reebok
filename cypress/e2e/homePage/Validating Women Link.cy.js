describe("Women's Flex Links",()=>{
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });
  const womenPages =[
   "/c/all-featured-collection-women",
   "/c/bestseller-women",
   "/c/plus-sizes-women",
   "/c/shop-by-icons-women",
   "/c/women-top-seller-under-7500",
   "/c/all-women-footwear",
   "/c/women-running-shoes",
   "/c/women-training",
   "/c/women-walking",
   "/c/women-classics-shoes",
   "/c/women-sandals-slippers",
   "/c/all-clothing-women",
   "/c/women-t-shirts-polo-shirts",
   "/c/women-shorts",
   "/c/women-sports-bras-tank-tops",
   "/c/women-leggings-tights",
   "/c/women-pants-sweatpants",
   "/c/women-hoodies-sweatshirts",
   "/c/women-tracksuit-tracktops",
   "/c/all-accessories-for-women",
   "/c/women-socks",
   "/c/women-face-cover",
   "/c/caps-for-women",
   "/c/women-other-accessories-water-bottle",
  ]

  womenPages.forEach((page)=>{

    it(`Validate page ${page}`,()=>{
      cy.visit(page);
      cy.url().should("include",page);
      cy.get("body").should("be.visible");
    })
  });


});