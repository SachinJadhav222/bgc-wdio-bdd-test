const fs = require("fs");

const featureFilePath = "./test/featureFiles/*.feature";

const screenshotPath = "./reports/screenshots";
if (!fs.existsSync(screenshotPath)) {
  fs.mkdirSync(screenshotPath);
}

const uiJSONPath = "./reports/ui";
if (!fs.existsSync(uiJSONPath)) {
  fs.mkdirSync(uiJSONPath);
}

module.exports = {
  screenshotPath,
  uiJSONPath,
  featureFilePath,
};
