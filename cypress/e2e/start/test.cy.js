/// <reference types="cypress" />
describe('the connected shop', () => { 
    beforeEach(() => { 
      cy.visit('https://google.com/')
     })
     it('open Home Page', () => {
      cy.url() 
        .should('eq', 'https://google.com/')
     }) 
    })