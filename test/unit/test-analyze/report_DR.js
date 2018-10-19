/**
 * Created by kesav.sn on 21-Jan-15.
 */

//TODO: Remove locators from test cases
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var repLoc = require('../../uiMap/uimap-analyze/reportsLocators');
var repPO = require('../../pageObject/module-analyze/reportsPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the report link under the Analyze module */
describe('Analyze|To click the report link', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(HelperPO.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(HelperPO.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(HelperPO.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Close Modal and Check if Module is Visible and Select it', function () {
        POLandingPage.clickModAnalyze();
    });

    it('To click the report link', function () {
        expect(element(repLoc.reportLink).isPresent()).toBe(true);
        repPO.reportLink();
    });

    /* To click the 'My Reports' link for choosing the reports for deleting */
    it('To click the my report list', function () {
        repPO.myReportLink();
    });

    /* To choose one report and delete for same */
    it('To click one report and delete it', function () {
        expect(element(repLoc.firstReport).isPresent()).toBe(true);
        repPO.selectOneReport();
        repPO.myReportLink();
    });

    /* To choose one or more reports and delete it */
    it('To click one or more reports and delete it', function () {
        expect(element(repLoc.firstReport).isPresent()).toBe(true);
        repPO.selectManyReports();
        repPO.myReportLink();
    });

    /* To select all reports and delete it */
    it('To click all reports and delete it', function () {
        expect(element(repLoc.firstReport).isPresent()).toBe(true);
        repPO.selectAllReports();
    });
});