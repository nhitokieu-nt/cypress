var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonDir: "cypress/reports",
  output: "cypress/reports/cucumber-report.html",
  brandTitle: "Demoqa Test Report",
  storeScreenshots: true,
  screenshotsDirectory: 'cypress/screenshots',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome 54.0.2840.98",
    Platform: "Windows 10",
    Executed: "Remote",
  },
};

reporter.generate(options);