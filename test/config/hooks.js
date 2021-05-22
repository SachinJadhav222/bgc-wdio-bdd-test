const chalk = require("chalk");
module.exports = {
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  //  beforeSession: function (config, capabilities, specs) {
  //     require('expect-webdriverio').setOptions({ wait: 50000 })
  //  },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {
    require("expect-webdriverio").setOptions({ wait: 5000 });
    //console.log('capabilities',capabilities);
    //console.log('specs',specs);
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Runs before a Cucumber feature
   */
  // beforeFeature: function (uri, feature, scenarios) {
  //   // console.log('\n---------->>>Before feature')
  //   // console.log('\n---------->>',uri);
  //   // console.log('\n---------->>',feature);
  //   // console.log('\n---------->>',scenarios);
  //   //console.log('\n---------->>>Before feature')
  // },
  /**
   * Runs before a Cucumber scenario
   */
  // beforeScenario: function (uri, feature, scenario, sourceLocation) {
  //   console.log(chalk.green('\n',"SCENARIO-->>>", scenario.pickle.name));
  // },
  /**
   * Runs before a Cucumber step
   */
  // beforeStep: function (uri, feature, stepData, context) {
  // },
  /**
   * Runs after a Cucumber step
   */
  // afterStep: function (
  //   uri,
  //   feature,
  //   { error, result, duration, passed },
  //   stepData,
  //   context
  // ) {
  //   // console.log('After steps-->>')
  // },

  /**
   * Runs after a Cucumber scenario
   */

  // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
  // // browser.saveScreenshot('reports/ui/222.png')
  // // console.log('This is after scenario-----> ',uri,feature.name,scenario.name,result.status)
  // var me = this;
  // return browser.takeScreenshot().then(function (screenshot) {
  //   return me.attach(screenshot, "image/png");
  // });

  //   console.log('Taking screenshot---->>>>')
  //    if (result.status === 'passed' ) {
  //      browser.saveScreenshot('reports/ui/222.png')
  //        return browser.takeScreenshot().then(function(screenshot) {
  //            return me.attach(screenshot, "image/png");
  //        }
  //       );
  //   }
  // },
  /**
   * Runs after a Cucumber feature
   */
  // afterFeature: function (uri, feature, scenarios) {
  //   //console.log("After feature---->>>");
  //   //   console.log('\n---->>>',uri)
  //   //   console.log('\n---->>>',feature)
  //   //   console.log('\n---->>>',scenarios)
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function (result, capabilities, specs) {
    console.log(chalk.green("\n", "<<<---------->>>"));
    // console.log('After--->>> ', capabilities)
    // console.log('After--->>> ', specs)
  },

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
