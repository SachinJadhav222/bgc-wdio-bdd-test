const reporter = require('cucumber-html-reporter');
require('dotenv-flow').config();
const options = {
    theme: 'bootstrap',
    jsonFolder: "reports/",
    jsonFile: 'reports/bbc-weather.json',
    output: 'reports/ui-test-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'UI Automation',
    brandTitle:'UI-Test Report',
    metadata: {
        "Date:": new Date(),
        "Test Environment": process.env.ENV,
        "Browser": process.env.BROWSER,
        "Platform": process.env.PLATFORM,
        "SDTE": process.env.SDET,  
    }
};

reporter.generate(options);
    