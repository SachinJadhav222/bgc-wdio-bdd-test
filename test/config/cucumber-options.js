const { uiJSONPath } = require("./../support/dir-path");
module.exports = {
  framework: "cucumber",

  reporters: [
    // Like this with the default options, see the options below
    "cucumberjs-json",

    // OR like this if you want to set the folder and the language
    [
      "cucumberjs-json",
      {
        jsonFolder: uiJSONPath,
        language: "en",
      },
    ],
  ],
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: ["./test/steps/*.js"], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    requireModule: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    format: ["pretty"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tagExpression: "", // <string> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 60000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },
};
