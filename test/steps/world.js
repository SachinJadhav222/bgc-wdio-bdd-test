const { setWorldConstructor } = require("cucumber");
const assert = require("cucumber-assert");
//const expect = require("expect-webdriverio").setOptions({ wait: 5000 });
getLocators = require("./../support/locator").locators;
const getUrl = require("./../config/urls");
const {screenshotPath}= require("./../support/dir-path");


class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
    this.assert=assert;
   // this.expect=expect;
    this.getLocators = getLocators;
    this.getUrl = getUrl;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
