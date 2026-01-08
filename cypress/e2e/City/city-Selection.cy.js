describe("Select the city", function (){

  beforeEach(function () {
  cy.fixture("cities").then((data) => {
    this.cities = data;
  });
});


    it("city Selection tests", function (){
        cy.visit("/", { timeout: 180000 });
    cy.selectCityFromBanner(this.cities.defaultCity);
    cy.get('[data-testid="location-switcher-trigger"]')
    .find('[data-slot="select-value"]')
    .should("contain.text",this.cities.defaultCity.toLowerCase());

    
    });

    it("Select the city from dropdown", function(){
      cy.visit("/", { timeout: 180000 });
        cy.selectCityFromBanner(this.cities.defaultCity);
        cy.changeCity(this.cities.cities[0]);
        cy.get('[data-testid="location-switcher-trigger"]')
         .find('[data-slot="select-value"]')
         .should("contain.text",this.cities.defaultCity.toLowerCase());

    });
});