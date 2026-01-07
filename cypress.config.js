const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://kalyani-true-value.vercel.app",
    pageLoadTimeout:180000,
    defaultCommandTimeout:30000,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
