const { setWorldConstructor, World } = require("cucumber");
const assert = require("cucumber-assert");
//const expect = require("expect-webdriverio").setOptions({ wait: 5000 });
getLocators = require("../support/locator").locators;
const getUrl = require("../config/urls");
const {screenshotPath}= require("../support/dir-path");


class CustomWorld {
   
//   constructor(options) {
//     super(options)
//     this.context = {};
//     this.variable = 0;
//     this.attach=attach;
//     this.assert=assert;
//    // this.expect=expect;
//     this.getLocators = getLocators;
//     this.getUrl = getUrl;
// }

  constructor({attach,log, parameters }) {
    //super();
    this.context = {};
    this.variable = 0;
    this.attach=attach;
    this.log=log;
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
