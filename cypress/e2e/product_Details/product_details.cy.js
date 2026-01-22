describe("Verify whether the product pages is opening fine",()=>{


    beforeEach(()=>{

        cy.visit("/");
        cy.viewport(1440,900);
        cy.get('img[alt="close icon"]')
        .should('be.visible')
        .click({ force: true });
  
    });

    it("Verify the Selected Product is loaded Successfully",()=>{

        cy.get('input[placeholder="Search"]').click().type("Persona Wanderer - Men Black Running Shoes").type('{enter}');
        cy.get('img[alt*="Men"]',{timeout:15000})
        .filter(':visible')
        .first()
        .parents('a')
        .invoke('removeAttr','target')
        .click({force:true});


        cy.get('h1')
        .should("be.visible")
        .and('contain.text','Men');

        cy.contains('₹').should('be.visible');

        cy.get('img')
        .filter(':visible')
        .first()
        .should(($img)=>{
         expect($img[0].naturalWidth).to.be.greaterThan(0);
        
        });

        cy.get('h6[data-value="10"]', { timeout: 10000 })
        .filter(':visible')
        .not('.Mui-disabled')
        .first()
        .click({force:true});

        cy.get('h6[data-value="10"]', { timeout: 10000 })
        .should("have.class",'Size_active__Hc8FA');
         
        cy.wait(5000);

        cy.get('h6.Size_active__Hc8FA',{timeout:10000})
        .should('exist');
        cy.screenshot("Product Page",{timeout:10000});

        
        cy.contains("Add to Bag").should("be.visible").click({force:true});

        cy.get('.AddtoCartSuccessPopup_addtoCartmodalcontainer__up26N')
      .should('be.visible')  
      .and('contain', 'Added In Your Cart'); 

      cy.get('.AddtoCartSuccessPopup_addtocartPopUpStyle_btn__nFBE0')
      .contains('VIEW CART')
      .click();

      cy.url().should('include','/checkout');

      // Verify the Product Description
    
      cy.get('.ProductDetail_prodDetails_prodList_item_name__8za9n')
      .should('be.visible')
      .and('contain.text', 'Persona Wanderer - Men Black Running Shoes');

  

    // Verify the Size
    cy.get('.CustomDropdown_customSelectMain__u2wfw .CustomDropdown_selectedText__LXhIh')
      .should('be.visible')
      .and('contain.text', '10');

    // Verify the Quantity
    cy.get('.ProductDetail_prodDetails_prodList_item_dropdownWrap_label__7hMk_')
      .contains('Quantity')
      .siblings()
      .find('.CustomDropdown_selectedText__LXhIh')
      .should('contain.text', '1');

    // Verify the Price - Discounted Price
    cy.get('.ProductDetail_prodDetails_prodList_item_price_detail_sellingPrice__KkCH4')
      .should('be.visible')
      .and('contain.text', '₹ 1,199');

    // Verify the Original Price (Price Cut)
    cy.get('.ProductDetail_prodDetails_prodList_item_price_detail_price__ALIP3')
      .should('be.visible')
      .and('contain.text', '₹ 2,999');

    // Verify the Discount
    cy.get('.ProductDetail_prodDetails_prodList_item_price_discount__3CzVU')
      .should('be.visible')
      .and('contain.text', '60% Off');

    // Verify GST Benefits Text
    cy.get('.ProductDetail_prodDetails_prodList_item_price_gstBenefitsText__wF7_s')
      .should('be.visible')
      .and('contain.text', 'Inclusive of GST benefit');
  
        
    cy.get('.PriceDetail_shippingChargeUiChild__kf2FO')
        .should('be.visible')
        .and('contain.text','Free');

        cy.get('.PriceDetail_priceDetails_content_payAmnt_text__3upZP')
        .should('be.visible')
        .and('contain.text','Payable Amount');

        cy.get('.PriceDetail_priceDetails_content_box_taxText__lWPWu')
        .should('be.visible')
        .and('contain.text','Includes Tax');

    cy.get('.PriceDetail_priceDetails_checkout__6Ih6f')
    .should('be.visible')
    .and('contain.text','Checkout (1)');

    cy.screenshot("Cart");

    cy.get('.ProductDetail_prodDetails_prodList_item_ctaTxt__LM1se ')
    .should('be.visible')
    .and('contains.text','Move to wishlist');
    
    cy.contains("Move to wishlist").click();


   cy.get('.ProductDetail_shipMe__f_SFr').click();

   cy.get('img[alt="close icon"]')
   .should('be.visible');

   cy.screenshot("Login Page");

   cy.get('input[placeholder="Enter 10 digit mobile number"]').click().type('9791204141');

   cy.screenshot("Number Validation");

   cy.get('.Login_otpBtn__XHDq0 ').click();

   cy.screenshot("OTP Page ");

  
    
    });

    


});