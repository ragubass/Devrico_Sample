//Template for individual local.js files
//All Values within this file will overwrite values with in the config.js file
//Do not commit env.js or local.js to repository as this will override all env.js and local.js for everyone

exports.config = {
    //Input Specs that you are working on.
    specs: [
        //Example
        '../test/test-configure/configureModule.js'
    ],

    /*TO RUN EXCLUDED TESTS WITHIN DEVELOPMENT
     * Uncomment the following exclude line to run
     * tests ending with _DR
     * */
    //exclude: [ ],

    //What Browser you would like to test with
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']
            }
        }
    ]
};