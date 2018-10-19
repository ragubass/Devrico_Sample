/**
 This is the default configuration for running all tests
 You can override any of these directives by placing a local.js file in the config folder. Do not add your local.js to version control.
 */

var today = new Date(),
    todayMonth = today.getMonth() + 1,
    timeStamp = today.getFullYear() + '-' + todayMonth + '-' + today.getDate() + '_' + today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
var env = require('./env.js');
var path = require('path');
var reportPath = path.join(__dirname, "/../../reports");
var htmlReportPath = path.join(reportPath, "html_report/" + timeStamp + "/");
var xmlReportPath = path.join(reportPath, "xml_report/" + timeStamp + "/");


var defaultConfig = {
    //seleniumAddress: env.seleniumAddress,
    baseUrl: env.baseUrl,
    // Spec patterns are relative to this directory.
    suites: {
        //unitLogin: '../test/unit/test-login/*.js',
        //unitGlobal: '../test/unit/test-global/*.js',
        //unitLandingPage: '../test/unit/test-landingpage/*.js',
        //unitAnalyze: '../test/unit/test-analyze/*.js',
        //unitConfigure: '../test/unit/test-configure/*.js',
        //e2eConfigure: '../test/e2e/test-configure/*.js',
        unitManage: '../test/unit/test-manage/*.js'
    },

    // Exclude patterns are relative to this directory.
    //Exclude all specs that end with _DR
    exclude: ['../test/*/*/*_DR.js'],
    multiCapabilities: [
       /* {
            browserName: 'firefox',
            name: 'Firefox Job',
            logName: 'Firefox - English'
        },*/
        {
            browserName: 'chrome',
            name: 'Chrome Job',
            logName: 'Chrome - English',
            chromeOptions: {
                args: ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']
            }
        }/*, {
         browserName: 'internet explorer',
         version: '8'
         }, {
         browserName: 'internet explorer',
         version: '9'
         }, {
         browserName: 'internet explorer',
         version: '10'
         }, {
         browserName: 'internet explorer',
         version: '11'
         }*/
    ],
    params: {
        activeBrowserName: '',
        classicCEALink: '/cfweb',
        enterpriseCEALink: '/ceaEnterprise',
        expectedLoginFailureMessage: 'Invalid login credentials provided'
    },
    // Page load timeout and verifying angular is on the page (in milliseconds)
    getPageTimeout: 30000, // 30 seconds
    // Asynchronous script execution timeout (in milliseconds) - time to wait (default 11 seconds)
    allScriptsTimeout: 30000, // 30 seconds
    // Choose your underlying test framework for Protractor
    // http://angular.github.io/protractor/#/frameworks
    framework: 'jasmine2',
    // Webdriver element wait timeout
    elementWaitTimeout: 10000,
    // To change for one individual spec, pass a third parameter to it: it(description, testFn, timeout_in_millis).
    //jasmineNodeOpts: 300000, // 5 minutes
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // if true, print timestamps for failures
        showTiming: true,
        // Print failures in realtime
        realtimeFailure: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 300000, // 5 minutes
        // Function called to print jasmine results.
        print: function () {
        }
    },
    /**
     * Global perparation for your tests
     */
    onPrepare: function () {
        // Adding this call to get the browser name within a test
        // Usage: browser.browserName
        browser.getCapabilities().then(function (cap) {
            browser.browserName = cap.caps_.browserName;
        });
        // Chrome Hack: To maximize window since window maximize call currently does not work
        if (browser.browserName === 'chrome') {
            height = browser.driver.executeScript("return screen.height;");
            width = browser.driver.executeScript("return screen.width;");
            browser.driver.manage().window().setPosition(0, 0);
            browser.driver.manage().window().setSize(width, height);
        } else {
            browser.driver.manage().window().maximize();
        }

        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: false,     // display stacktrace for each failed assertion
            displayFailuresSummary: true, // display summary of all failures after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: true,    // display each pending spec
            displaySpecDuration: true,   // display each spec duration
            displaySuiteNumber: true,    // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'cyan'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '- '
            }
        }));

        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            var browserName = caps.caps_.browserName.toUpperCase();
            var jasmineReporters = require('jasmine-reporters');
            var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');

            browser.params.activeBrowserName = browserName;
            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                filePrefix: browserName + '-testResults',
                savePath: xmlReportPath
            }));

            jasmine.getEnv().addReporter(
                new HtmlScreenshotReporter({
                    savePath: htmlReportPath,
                    filename: browserName + '-testResults.html',
                    takeScreenshots: true,
                    takeScreenshotsOnlyOnFailures: true
                }));
        });
    }
};
exports.config = defaultConfig;

//override defaultConfig with local config, if such a thing exists
/*
try {
    var local = require('./local.js');
    for (var key in local.config) {
        defaultConfig[key] = local.config[key];
    }
}
catch (e) {
    // If there is no local config, ain't no thing.
}*/
