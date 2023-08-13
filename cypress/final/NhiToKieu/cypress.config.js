const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  on('task', {downloadFile});
  return config;
}

module.exports = defineConfig({
  //Default configuration
  defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: "https://unsplash.com",
    specPattern: [
      "cypress/e2e/ui/*.feature", 
      "cypress/e2e/api/*.cy.js"
    ],
    setupNodeEvents,
    chromeWebSecurity: false,
    video: false,
    watchForFileChanges: false
  },
  env: {
    apiUrl: 'https://api.unsplash.com',
    email: 'tokwwnhi@gmail.com',
    password: 'Kieunhi1412',
    // userName: "nhitokieu_",
    token: "hzVdVH1Zjax-dJ_rYfLIMEg3Pzps2yzjT3fqF5v3340"
  }
});