const { setWorldConstructor } = require("cucumber");
class CustomWorld {
  constructor({ parameters }) {
    this.context = {};
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
