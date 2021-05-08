# BGC SDET Test Automation Framework
*Test Automation for UI test project for BGC  using WebdriverIO , cucumberjs   and other tools
 The framework is BDD enabled,Page Object Model,  using cucumber js to create feature file written in Gherkin Language*

### CircleCI Pipeline Setup: 
https://app.circleci.com/pipelines/github/SachinJadhav222/bgc-wdio-bdd-test 

### Folder Structure
* [Project Root](./tree-md) : BGC-WDIO-BDD-TEST
    * [reports](./reports)  : Cucumber HTML reports
    * [test](./test)
        * [config](./test/config) - webdriver configurations , urls
        * [featureFiles](./test/featureFiles) -All bdd feature file are here 
        * [locators](./test/locators) - Locators, webelements are stored per page as page object.
        * [steps](./test/steps) - Step defition files
        * [support](./test/support) - Support and helpers  files
       
  * [README.md](./README.md)

### *Setup Instuctions*
set .env.local file at root , this file will overwrite local environment variables, We can add login credentials ,  access tokens etc to this file .  best practice, keep this file in .gitignore and do not commit to git for security reasons. 
### *For demo purpuse I have commited .env.local file to git*


### Install node packages
```
npm i

```

### Run Test and Generate Report
```
npm test
```



### Task
1) Use NodeJS (Javascript), WebdriverIO (https://webdriver.io/), Mocha Framework to write below assignment
2) Please make use of aysnc and await while writing your tests (if possible)
3) Create sample test repo which can be run at the end. once assignment is finished
4) Please achieve below by applying page object model and re-usable function if necessary

 - Launch the browser
 - Open BBC news URL (https://www.bbc.co.uk/)
 - Wait for page title (Welcome to the BBC) to be visible. 
 - Get the page title (Welcome to the BBC) and validate it
 - Accept the Cookie message (if any)
 - Go to "Weather" tab
 - Validate placeholder text is displayed on the search input box ("Enter a town, city or UK postcode)
 - Search for a town (Melbourne) and select it.
 - Print and validate the title of page loaded matches town searched/selected
 - Get next three days maximum and minimum temperature and weather description by clicking each tab.
 - From above step print (for next 3 days) 
          1) Day/Date 
          2) Max and min Temperature 
          3) Weather type description
 - Close the browser