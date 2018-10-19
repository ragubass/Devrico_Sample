//Template for individual local.js files
//All Values within this file will overwrite values with in the config.js file
//Do not commit env.js or local.js to repository as this will override all env.js and local.js for everyone

exports.config = {
    //seleniumArgs: ['-Dwebdriver.ie.driver=C:/Users/ragu.s/AppData/Roaming/npm/node_modules/protractor/selenium/IEDriverServer.exe'],
    //Input Specs that you are working on.
    specs: [
        //Example
        //'../test/unit/test-manage/deleteMessaging.js'
        //'../test/unit/test-manage/narrowByFiltersDropDown.js'
       // '../test/unit/test-manage/removeAnalyzeLandingPage.js'
       //'../test/unit/test-manage/duplicateFilterErrorMessage.js'
        //'../test/unit/test-manage/saveFilters.js'
       // '../test/unit/test-manage/otherPages.js'
        //'../test/e2e/test-configure/editBaseLayerUI.js'
        //'../test/unit/test-analyze/pathTabLayoutNewDesign.js'
        //'../test/unit/test-analyze/controlPanelNewDesign.js'
        //'../test/unit/test-analyze/calenderControl.js'
         //'../test/unit/test-manage/retrieveAllFiltersFromServer.js'
        //'../test/unit/test-login/forgotUsernameAndforgotPassword.js'
        //'../test/unit/test-analyze/analyzeBreadcrumbs.js'
        //'../test/unit/test-configure/tabLayersDataTableSearching.js'
        //'../test/unit/test-configure/tabLayersNewLayersFunctionalityTests.js'
        // '../test/unit/test-manage/dependancyMessaging.js'
        //'../test/unit/test-manage/insufficientPermissions.js'
        //'../test/unit/test-configure/verifyNewLayerModalFormElements.js'
        '../test/unit/test-analyze/layerEditor.js'
    ],

    /*TO RUN EXCLUDED TESTS WITHIN DEVELOPMENT
     * Uncomment the following exclude line to run
     * tests ending with _DR
     * */
    //exclude: [ ],

    //What Browser you would like to test with
    multiCapabilities: [
        {
            browserName: 'chrome'
        }
    ]
};