/**
 * Created by ckoerber on 4/14/15.
 */
//Shared Elements
var env = require('../../config/env');
var user = require('../../core/CEAUserList');
var sharedSetup = require('../../core/sharedSetup');
var using = require('../../util/using');

//Page Objects
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

describe('All tests for the landing page', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(HelperPO.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(HelperPO.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(HelperPO.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Validate All Modules are Present', function () {
        expect(POLandingPage.moduleAnalyze.isPresent()).toBe(true);
        expect(POLandingPage.moduleConfigure.isPresent()).toBe(true);
        expect(POLandingPage.moduleDiscover.isPresent()).toBe(true);
        expect(POLandingPage.moduleExecDash.isPresent()).toBe(true);
        expect(POLandingPage.moduleManage.isPresent()).toBe(true);
        expect(POLandingPage.moduleMonitor.isPresent()).toBe(true);
    });

});