/// <reference types="cypress" />
describe('Search function works', () => { 
    beforeEach(() => { 
      cy.visit('https://theconnectedshop.com/')
     })

     //Testing the search srop-down
     
     it('Searching the existed product', () => {

        cy.contains('Search')
          .should('exist')
          .and('have.attr', 'href', '/search') 
          .click();
        
        cy.get('.Search__Input')
          .click()
          .type('Smart Padlock Bluetooth')
          .should('have.value', 'Smart Padlock Bluetooth');

        cy.get(':nth-child(1) > .Segment > .Segment__Title > .Text--subdued')
          .should('exist');

        cy.get('.ProductItem__Wrapper')
          .should('exist')
          .and('be.visible');
        
        cy.get('.ProductItem__Image')
          .should('exist')
          .and('be.visible');
        
        cy.get('.ProductItem__Title')
          .first()
          .find('a')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href');
         
        cy.contains('Smart Padlock Bluetooth')

          //Homework:

            //Review stars
        cy.get('.jdgm-prev-badge__stars')
          .first()
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'role', 'button')

          //Review text
        cy.get('.jdgm-prev-badge__text')
          .first()
          .should('exist')
          .and('be.visible')

          //Price
        cy.get('.ProductItem__PriceList')
          .first()
          .should('exist')
          .and('be.visible')
        

          //View all Button
        cy.get(':nth-child(1) > .Segment > .Segment__Title > .Link')
          .should('exist')
          .and('be.visible') 
          .and('have.attr', 'href')        
 })
    //Testing No results found 
     it('Searching not existed product', () => {

        cy.contains('Search')
          .should('exist')
          .and('have.attr', 'href', '/search') 
          .click();
        
        cy.get('.Search__Input')
          .click()
          .type('dfghjkljk,jmhngf')
         
        cy.get(':nth-child(1) > .Segment > .Segment__Content > p')
          .should('exist')
          .and('contain', 'No results could be found')
 })
})