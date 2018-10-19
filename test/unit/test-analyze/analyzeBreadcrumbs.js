/**
 * Created by jayaganapathi.e on 2/12/2015.
 */
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var AnalyzePO = require('../../../pageObject/module-analyze/analyzePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POAnalyze = new AnalyzePO();
var POHelper = new HelperPO();

describe('Analyze - To validate breadcrumbs in Analyze module', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Check if module is visible and select it', function () {
        POLandingPage.clickModAnalyze();
        expect(browser.getCurrentUrl()).toMatch('/analyze');
    });

    it('Check initial breadcrumb text', function () {
        //TODO: Empty breadcrumb Exists
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(2);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Analyze');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/analyze');
    });

    describe('Use breadcrumbs to navigate around module and to home', function () {
        xit('Use breadcrumbs to go to home', function () {
            POHeader.breadcrumbs.clickHome();
            expect(POLandingPage.moduleAnalyze.isPresent()).toBe(true);
        });

        xit('Go back to Analyze', function () {
            POLandingPage.clickModAnalyze();
            expect(browser.getCurrentUrl()).toMatch('/analyze');
            //TODO: When header is added, enable these
            //expect(POAnalyze.pageHeader.isPresent()).toBe(true);
            //expect(POAnalyze.pageHeader.getText()).toBe('Analyze');

        });

        xit('Use Breadcrumb to go back to Analyze Landing Page', function () {
            POHeader.breadcrumbs.clickCrumb(0);
            expect(browser.getCurrentUrl()).toMatch('/analyze');
            //TODO: When header is added, enable these
            //expect(POAnalyze.pageHeader.isPresent()).toBe(true);
            //expect(POAnalyze.pageHeader.getText()).toBe('Analyze');
        });
    });

});