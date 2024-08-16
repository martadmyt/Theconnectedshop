/// <reference types="cypress" />
describe('the connected shop', () => { 
    beforeEach(() => { 
      cy.visit('https://theconnectedshop.com/products/fingerprint-door-lock')
     })
     it('open Product Page', () => {
      // Check the Product Page opening
      cy.url() 
        .should('eq', 'https://theconnectedshop.com/products/fingerprint-door-lock')
    
    cy.get('.ProductMeta__Title')
        .should('exist')
        .and('be.visible'); 
      
    cy.get('.ProductMeta__Sku')
      .should('exist')
      .and('be.visible');

      //Check the image gallery
      
    cy.get('.Product__Slideshow')
      .should('exist')
      .and('be.visible');

      //Check media
      
    cy.get('#Media33976616485105 > .AspectRatio > .Image--fadeIn')
      .should('exist')
      .and('be.visible');

      //Check slider points

    cy.get('.Product__SlideshowNav')
      .should('exist')
      .and('be.visible');
    

    cy.get('.ProductMeta > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__stars')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'role', 'button');

    cy.get('.ProductMeta > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__text')
      .should('exist')
      .and('be.visible');

    cy.get('.ProductMeta__Price > .money')
      .should('exist')
      .and('be.visible');

    cy.get(':nth-child(1) > .ProductForm__Item')
      .should('exist')
      .and('be.visible')
      .click();

    cy.get('.QuantitySelector')
      .should('exist')
      .and('be.visible');

    cy.get('[data-action="increase-quantity"]')
      .should('exist')
      .and('be.visible')
      .click();

    cy.get('[data-action="decrease-quantity"]')
      .should('exist')
      .and('be.visible')
      .click();
          

    cy.get('.ProductForm__AddToCart')
      .should('exist') 
      .click();
    
      //Homework: перевірити, що попап відкрився і товар є в корзині

      //Testing the minicart pop-up

    cy.get('.Cart > .Drawer__Main')
      .should('exist')
      .and('be.visible');

      //Testing the product is shown in minicart

    cy.get('.Cart__ItemList > :nth-child(1)')
      .should('exist')
      .and('be.visible');

      //Testing that product has image

    cy.get(':nth-child(1) > .CartItem > .CartItem__ImageWrapper > .AspectRatio > .CartItem__Image')
      .should('exist')
      .and('be.visible');

      //Testing that product has name

    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Title > a')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href');

      //Testing that product has color option

    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Meta > .CartItem__Variant')
      .should('exist')
      .and('be.visible');

      //Testing that product has price

    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Meta > .CartItem__PriceList > .CartItem__Price > .money')
      .should('exist')
      .and('be.visible');

      //Testing that product has counter

    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__QuantitySelector > .QuantitySelector')
      .should('exist')
      .and('be.visible');

      //Testing the "Remove" button is present

    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__Remove')
      .should('exist')
      .and('be.visible'); 
    })
})