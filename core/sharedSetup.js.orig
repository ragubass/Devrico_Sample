// Convenience setup/teardown function for common before/after test suite hooks
module.exports = {

    sharedSetupEach: function (startPage) {
        var GlobalPO = require('../pageObject/module-global/globalHeaderFooterPO');
        var POGlobal = new GlobalPO();

        beforeEach(function () {
            browser.get(startPage);
            browser.waitForAngular();
            //Not putting login here as we are testing that functionality here
        });

        afterEach(function () {
            POGlobal.clickLogout();
        });
    },

    sharedSetUpEachWithoutLogout: function (startPage) {
        beforeEach(function () {
            browser.get(startPage);
            browser.waitForAngular();
            //Not putting login here as we are testing that functionality here
        });
    },

    sharedSetupAll: function (startPage) {
        var user = require('./CEAUserList');
        var LoginPO = require('../pageObject/module-login/loginPO');
        var LandingPagePO = require('../pageObject/module-landingpage/landingPagePO');
        var GlobalPO = require('../pageObject/module-global/globalHeaderFooterPO');
        var POGlobal = new GlobalPO();
        var POLogin = new LoginPO();
        var POLandingPage = new LandingPagePO();

        beforeAll(function () {
            browser.get(startPage);
            browser.waitForAngular();

//            jasmine.addMatchers({
//                toHaveText: function () {
//                    return {
//                        compare: function (actual, expectedText) {
//                            return {
//                                pass: actual.getText().then(function (actualText) {
//                                    return actualText === expectedText;
//                                })
//                            };
//                        }
//                    };
//                }
//            });

            //Login to application using user 'autoTestUser'
            POLogin.login(user.authUsers.autoTestUser, false);
            POLandingPage.clickWelcomeModalNav();
        });

        afterAll(function () {
            POGlobal.clickLogout();
        });
    }
};