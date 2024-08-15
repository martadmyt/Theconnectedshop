const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,  
    viewportHeight: 1080,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: false,
    baseUrl: 'https://theconnectedshop.com',
    specPattern:
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
  },
})
