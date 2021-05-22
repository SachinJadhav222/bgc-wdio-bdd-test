const capabilities = require("./capabilities");
const cucumberOptions = require("./cucumber-options");
const hooks = require("./hooks");
const { featureFilePath } = require("./../support/dir-path");

const config = {
  runner: "local",
  //
  // Override default path ('/wd/hub') for chromedriver service.
  path: "/wd/hub",

  specs: [featureFilePath],
  // Patterns to exclude.
  exclude: [],

  maxInstances: 10,

  logLevel: "silent",
  coloredLogs: true,

  bail: 0,

  baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ["chromedriver"],
};

exports.config = Object.assign(
  {},
  capabilities,
  cucumberOptions,
  hooks,
  config
);
