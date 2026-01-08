const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: "https://reebok.abfrl.in",
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
=======
    baseUrl:"https://kalyani-true-value.vercel.app",
    pageLoadTimeout:180000,
    defaultCommandTimeout:30000,
    chromeWebSecurity:false,
>>>>>>> a1295ac9d2d493c9248e2ec7fffe8a4689b4e171
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
