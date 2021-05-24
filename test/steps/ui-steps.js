const { Given, When, Then, Before, After } = require("cucumber");
const fs = require("fs");
//const assert = require("cucumber-assert");
//const locators = require("./../support/locator").locators;
//const urls = require("./../config/urls");
After(function () {
  console.log("This in Cucumber After---->>>", this);
  console.log("This in Cucumber Browser---->>>",driver);
});

Given("I visit {string}", async function (URL) {
  await browser.url(this.getUrl[URL]);
  //console.log('This in Given---->>>', this.attach)
  //console.log('This in Given---->>>', this.log)
  //this.log('This in Given---->>>', this.log)
});

Then("I entered {string} at {string}", function (expectedValue, selector) {
  browser.$(this.getLocators[selector]).setValue(expectedValue);
});
Then("I click on {string}", function (selector) {
  browser.$(this.getLocators[selector]).click();
  //console.log("This is locator--->>>", this.getLocators[selector]);
  // browser.$(locators[selector]).click();
});

// Then("I shloud see Page title {string}", async function (expectedValue) {
//   this.assert.equal(browser.getTitle(), expectedValue);
//   const screenshot = await browser.takeScreenshot();
//             // No access to World instance so the code below won't work
//             this.attach(screenshot, "image/png");

// });

Then("I shloud see Page title {string}", function (expectedValue) {
  this.assert.equal(browser.getTitle(), expectedValue);
});

Then(
  "I expect to see placeholder text {string} at {string}",
  function (expectedValue, selector) {
    this.assert.equal(
      browser.$(this.getLocators[selector]).getText(),
      expectedValue
    );
  }
);

Then("I expect to see URL containing {string}", function (expectedValue) {
  //this.expect(browser).toHaveUrlContaining(expectedValue);
  expect(browser).toHaveUrlContaining(expectedValue);
});

Then("I clicked on day {string} to check weather", function (day) {
  //let dayloc = locators["daylink"] + day;
  browser.$(this.getLocators["daylink"] + day).click;
});
