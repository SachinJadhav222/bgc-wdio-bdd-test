const { Before, After } = require("cucumber");
Before(() => {
  console.log("This is Before--->>>");
  require("expect-webdriverio").setOptions({ wait: 5000 });
});
