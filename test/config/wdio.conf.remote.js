//const capabilities = require("./capabilities");
const cucumberOptions = require("./cucumber-options");
const hooks = require("./hooks");
const { featureFilePath } = require("../support/dir-path");

const config = {
  port: 4444,
  path: "/wd/hub",
  host: "hub",
  protocol: "http",

  specs: [featureFilePath],
  // Patterns to exclude.
  exclude: [],

  maxInstances: 10,

  logLevel: "silent",
  coloredLogs: true,
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
    },
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      browserName: "firefox",
      maxInstances: 1,
    },
  ],
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
 // capabilities,
  cucumberOptions,
  hooks,
  config
);
