const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({
  //Default configuration
  defaultCommandTimeout: 3000,
  e2e: {
    baseUrl: "https://demoqa.com",
    specPattern: "**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents,
    chromeWebSecurity: false,
    video: false,
    watchForFileChanges: false
  },
  env: {
    apiUrl: "https://demoqa.com",
    userName: "cypresstraining",
    password: "Kieunhi1412@",
    userId: "e80f7b72-25f5-4b89-8d68-533bd443e904",
  }
});