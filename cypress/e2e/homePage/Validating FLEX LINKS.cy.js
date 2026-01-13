describe("Validating the Flex Links", () => {

  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");
    cy.get('img[alt="close icon"]', { timeout: 10000 })
      
      .click();
  });

  const newPages = [
    "/c/new-arrivals",
    "/c/bestsellers",
    "/c/trending",
    "/shop/floatzig",
    "/c/gym-fits",
    "/c/nano-shoes",
    "/c/zig-collection",
    "/c/floatride-collection",
    "/c/bb4000-collection",
    "/c/dmx-collection",
    "/shop/spacefoam",
    "/shop/maxfoam",
    "/c/zeta-foam",
    "/c/speedstrike",
    "/c/men-footwear-new",
    "/c/men-clothing-new",
    "/c/all-shoes-for-men-new",
    "/c/women-apparel-new",
    "/c/women-new-collection",
    "/c/reebok-x-hrn-unisex",
    "/c/enignea",
  ]

  newPages.forEach((path) => {
    it(`Validate page ${path}`, () => {
      cy.visit(path);
      cy.url().should("include", path);
      cy.get("body").should("be.visible");
    });
  }); 

  

});
