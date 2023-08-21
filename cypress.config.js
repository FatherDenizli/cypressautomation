const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: "https://www.migros.com.tr/",
   viewportWidth: 1280,
    viewportHeight: 720

  },

   












});


 