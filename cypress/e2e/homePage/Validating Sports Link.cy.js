describe("Women's Flex Links",()=>{
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });
  const sPortsPages =[
   "/c/new-arrival-sports",
   "/c/shop-by-icons",
   "/c/best-sellers-sports",
   "/c/yoga",
   "/c/shop-by-all-sports",
   "/c/running-sports-shoes",
   "/c/gym-essentials",
   "/c/walking-sports-shoes",
   "/c/cricket-shoes",
   "/c/tennis-sports-shoes",
   "/c/badminton",
   "/c/basketball-shoes-for-men",
   "/c/shop-all-apparel-sports",
   "/c/tshirts-and-tops",
   "/c/sports-shorts",
   "/c/sports-bra-and-tights-performance-wear",
   "/c/leggings-and-tights",
   "/c/pants-and-sweatpants",
   "/c/hoodies-and-sweatshirts",
   "/c/tracksuits"
  
  ]

  sPortsPages.forEach((page)=>{

    it(`Validate page ${page}`,()=>{
      cy.visit(page);
      cy.url().should("include",page);
      cy.get("body").should("be.visible");
    })
  });


});