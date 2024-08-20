/// <reference types="cypress" />
describe('the connected shop', () => { 
    beforeEach(() => { 
      cy.visit('https://theconnectedshop.com/collections/smart-locks')
     })
     it('open Product Page', () => {
      // Check the Category Page opening
      cy.url() 
        .should('eq', 'https://theconnectedshop.com/collections/smart-locks');

    cy.get('.PageHeader__ImageWrapper')
      .should('exist')
      .and('be.visible');
    
      //Check filters
    cy.get('.CollectionInner__Sidebar > .CollectionFilters')
      .should('exist')
      .and('be.visible');
    
      //Check the first filter block

    cy.get('.CollectionInner__Sidebar > .CollectionFilters > :nth-child(1)')
      .should('exist')
      .and('be.visible');
      
      //Check filter title

    cy.get('.CollectionFilters > :nth-child(1) > .Collapsible__Button')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button')
      .and('have.text', 'Lock Features');

      //Check filter options:

    cy.get('.CollectionFilters > :nth-child(1) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(1) > .Text--subdued')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button');

    cy.get('.CollectionFilters > :nth-child(1) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(2) > .Text--subdued')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button');

    cy.get('.CollectionFilters > :nth-child(1) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(3) > .Text--subdued')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button');

    cy.get('.CollectionFilters > :nth-child(1) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(4) > .Text--subdued')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button');

      //Check the first filter block

    cy.get('.CollectionInner__Sidebar > .CollectionFilters > :nth-child(2)')
      .should('exist')
      .and('be.visible');
    
      //Check filter title

    cy.get('.CollectionFilters > :nth-child(2) > .Collapsible__Button')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'button');

       //Check filter options:

    cy.get('.CollectionFilters > :nth-child(2) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(1) > .Text--subdued')
       .should('exist')
       .and('be.visible')
       .and('have.attr', 'type', 'button');

    cy.get('.CollectionFilters > :nth-child(2) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(2) > .Text--subdued')
       .should('exist')
       .and('be.visible')
       .and('have.attr', 'type', 'button');
    
    cy.get('.CollectionFilters > :nth-child(2) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(3) > .Text--subdued')
       .should('exist')
       .and('be.visible')
       .and('have.attr', 'type', 'button');
      
    cy.get('.CollectionFilters > :nth-child(2) > .Collapsible__Inner > .Collapsible__Content > .Linklist > :nth-child(4) > .Text--subdued')
       .should('exist')
       .and('be.visible')
       .and('have.attr', 'type', 'button');

      
       //Check the products grid

    cy.get('.ProductList')
       .should('exist')
       .and('be.visible');

      // Check the product card

    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper')
      .should('exist')
      .and('be.visible');

      //Check the product image

    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper > .ProductItem__ImageWrapper > .AspectRatio > [data-widths="[200,400,600,700,800,900,1000,1200]"]')
      .should('exist')
      .and('be.visible');

    //Не змогла перевірити посилання!!!
      
       //Check the product name

    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .ProductItem__Title > a')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href', '/collections/smart-locks/products/smart-padlock-bluetooth');

      //Check the reviews stars

    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__stars')
      .should('exist')
      .and('be.visible');

      //Check the review text
      
    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__text')
      .should('exist')
      .and('be.visible');

      //Check the product price

    cy.get(':nth-child(1) > .ProductItem > .ProductItem__Wrapper > .ProductItem__Info > .ProductItem__PriceList > .ProductItem__Price > .money')
      .should('exist')
      .and('be.visible');




    })
    })