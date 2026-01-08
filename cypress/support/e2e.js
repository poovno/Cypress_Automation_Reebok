// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on("uncaught:exception", (err, runnable) => {
<<<<<<< HEAD
  // returning false prevents Cypress from failing the test
  return false;
});
=======
  // returning false here prevents Cypress from failing the test
  return false;
});
>>>>>>> a1295ac9d2d493c9248e2ec7fffe8a4689b4e171
