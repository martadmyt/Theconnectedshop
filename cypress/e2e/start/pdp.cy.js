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
    

    })
})