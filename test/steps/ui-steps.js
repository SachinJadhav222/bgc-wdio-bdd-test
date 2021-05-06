const { Given, When, Then, Before, After } = require("cucumber");
const assert = require("cucumber-assert");
const locators = require("./../support/locator").locators;
const urls = require("./../config/urls");

Given("I visit {string}", async function (URL) {
  await browser.url(urls[URL]);
});

Then("I entered {string} at {string}", (expectedValue, selector) => {
  browser.$(locators[selector]).setValue(expectedValue);
});
Then("I click on {string}", (selector) => {
  browser.$(locators[selector]).click();
});

Then("I shloud see Page title {string}", (expectedValue) => {
  assert.equal(browser.getTitle(), expectedValue);
});

Then(
  "I expect to see placeholder text {string} at {string}",
  (expectedValue, selector) => {
    assert.equal(browser.$(locators[selector]).getText(), expectedValue);
  }
);

Then("I expect to see URL containing {string}", (expectedValue) => {
  expect(browser).toHaveUrlContaining(expectedValue);
});

Then("I clicked on day {string} to check weather", (day) => {
  //let dayloc = locators["daylink"] + day;
  browser.$(locators["daylink"] + day).click;
});
