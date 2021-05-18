const { Given, When, Then, Before, After } = require("cucumber");
//const assert = require("cucumber-assert");
//const locators = require("./../support/locator").locators;
//const urls = require("./../config/urls");

Given("I visit {string}", async function (URL) {
  await browser.url(this.getUrl[URL]);
});

Then("I entered {string} at {string}", function (expectedValue, selector) {
  browser.$(this.getLocators[selector]).setValue(expectedValue);
});
Then("I click on {string}", function (selector) {
  browser.$(this.getLocators[selector]).click();
  //console.log("This is locator--->>>", this.getLocators[selector]);
 // browser.$(locators[selector]).click();
});

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
