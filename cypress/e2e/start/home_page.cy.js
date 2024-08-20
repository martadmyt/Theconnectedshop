/// <reference types="cypress" />
describe('the connected shop', () => { 
  beforeEach(() => { 
    cy.visit('https://theconnectedshop.com/')
    cy.on('uncaught:exception', (err, runnable) => { return false; })
   })
   it('open Home Page', () => {
    // Check the Home Page opening
    cy.url() 
      .should('eq', 'https://theconnectedshop.com/')

    
      // Check the title 
    cy.title()
      .should('eq', 'The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    
      // Check the header
    cy.waitUntil(() => cy.get('.Header__Wrapper')
      .should('be.visible'))
    // cy.get('.Header__Wrapper')
     // .should('exist')
     // .and('be.visible')
    
      //Check the Logo with hovering
    cy.get('.Header__LogoImage--transparent')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163')
      .and('have.attr', 'alt', 'The Connected Shop Logo White')

    cy.get('.Header__LogoImage--primary')
      .should('exist')
      .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137')
      .and('have.attr', 'alt', 'The Connected Shop Logo')

      // Check the logo url
    cy.get('.Header__LogoLink')
      .should('have.attr', 'href', '/')

      // Check the mennu
    cy.get('.Header__MainNav > .HorizontalList')
      .should('exist')
      .and('be.visible');

      // Check the menu items
    cy.get('.Header__MainNav') 
      .should('be.visible') 
      .within(() => { 
        
        cy.contains('Home')
          .should('exist')
          .and('have.attr', 'href', '/')

        cy.contains('New In')
          .should('exist') 
          .and('have.attr', 'href', '/collections/new-in')

        cy.contains('Collections')
          .should('exist')
          .and('have.attr', 'href', '/pages/products')
          .and('have.text', 'Collections')

        cy.contains('Personal')
          .should('exist')
          .and('have.attr', 'href', '/pages/personal') 

        cy.contains('Businesses')
          .should('exist')
          .and('have.attr', 'href', '/pages/businesses')

        cy.contains('Tech Talk')
          .should('exist')
          .and('have.attr', 'href', '/blogs/tech-talk') 

        cy.contains('About us')
          .should('exist')
          .and('have.attr', 'href', '/pages/about-us') 

        cy.contains('Contact')
          .should('exist')
          .and('have.attr', 'href', '/pages/contact-us') 
          
        cy.contains('📞 Call')
          .should('exist')
          .and('have.attr', 'href', 'tel:3053303424') })

          // Check the Account, Search, Cart
        cy.get('.Header__SecondaryNav')
          .should('be.visible') 
          .within(() => { 
            
          cy.contains('Account')
            .should('exist')
            .and('have.attr', 'href', '/account') 
            
          cy.contains('Search')
            .should('exist')
            .and('have.attr', 'href', '/search') 
            
          cy.contains('Cart (0)')
            .should('exist')
            .and('have.attr', 'href', '/cart')
          
            cy.get('.Header__CartCount')
              .should('exist'); })

              // Check main banner
          cy.get('#Slide31543f3e-6f88-4f19-934c-f64bba31cf85 > .hidden-phone > .Slideshow__Image')
            .should('exist')
            .and('be.visible');

        cy.writeFile('cypress/report.txt', 'report rest')

            
            
            

   }) 
  })

   