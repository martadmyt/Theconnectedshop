/// <reference types="cypress" />
describe('the connected shop', () => { 
    beforeEach(() => { 
      cy.visit('https://rozetka.com.ua/ua/')
     })
     it('open Home Page', () => {
      cy.url() 
        .should('eq', 'https://rozetka.com.ua/ua/')
     }) 
    })