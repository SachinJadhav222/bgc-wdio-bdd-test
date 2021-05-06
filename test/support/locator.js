const merge = require("deepmerge");
const ele1 = require("../locators/homePage");
const ele2 = require("../locators/weatherPage");
const locators = merge.all([ele1,ele2]);
module.exports = {
  locators: locators
};
