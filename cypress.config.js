const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprocessor,} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
   
  on("file:preprocessor", preprocessor(config));
  allureWriter(on,config);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/Integeration/examples/Features/*.feature"
  },
  // "defaultCommandTimeout": 5000,
  // "chromeWebSecurity" : false,
  // "modifyObstructiveCode" : false
});
