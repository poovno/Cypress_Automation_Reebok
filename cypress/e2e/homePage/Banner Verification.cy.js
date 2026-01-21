describe("Verify the Banner is presented with appropriate height and width and it's loading properly",()=>{


    beforeEach(()=>{

        cy.visit("/");
        cy.viewport(1440,900);
        cy.get('img[alt="close icon"]', { timeout: 10000 })
      .click();
        });

        it("Verify the Banner loads successfully",()=>{

            cy.get('img')
            .filter(':visible')
            .should('have.length.at.least', 1);
        });

         it("Verify Whether Clicking the banner redirects to Respective page",()=>{


          cy.url().then((baseUrl)=>{
           
            cy.get('img[alt*="RBK"]',{timeout:20000})
            .filter(':visible')
            .first()
            .should("be.visible")
            .then(($img)=>{

              expect($img[0].naturalWidth).to.be.greaterThan(0);
              cy.wrap($img)
              .first()
              .click({force:true});
            });
            cy.url().should((newUrl)=>{
            
              expect(newUrl).to.not.eq(baseUrl);

            });
            cy.get("body").should("be.visible");





          });
         });

         it("Hero Banner Auto-Rotation Validation", () => {

          cy.get('img[class*="Carousel"]',{timeout: 20000})
          .filter(':visible')
          .first()
          .invoke('attr','src')
          .then((firstSrc)=>{

            cy.wait(18000);

            cy.get('img[class*="Carousel"]')
            .filter(':visible')
            .first()
            .invoke('attr','src')
            .then((secondSrc)=>{

             
              expect(secondSrc).to.not.equal(firstSrc);
            });
          });
        });
});