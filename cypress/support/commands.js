Cypress.Commands.add("selectCityFromBanner",(city)=>{

    cy.contains("p",city).click({force:true});
});
Cypress.Commands.add("openMenu",()=>{
 cy.get('button[data-slot="sheet-trigger"]').click({force:true});
});
Cypress.Commands.add("changeCity",(city)=>{
    cy.openMenu();

    cy.get('button[data-testid="location-switcher-trigger"]')
    .should("be.visible")
    .click({ force: true });

  cy.get('[role="listbox"]')
  .should("be.visible")
  .within(() => {
    cy.get('[role="option"]')
    .filter(':visible')
    .contains(city)
    .click();
});
});