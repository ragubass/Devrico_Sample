/**
 * Created by kesav.sn on 08-Jan-15.
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var filLoc = require('./../../uiMap/uimap-analyze/filterLocators');
var filPO = require('./../../pageObject/module-analyze/filterPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the filter link under the Analyze module */
describe('To click the filter link', function () {
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

    it('To click the filter link', function () {
        expect(element(filLoc.filterLink).isPresent()).toBe(true);
        filPO.filterLink();
    });

    /* To click the 'My Filters' link for choosing the filters for deleting */
    it('To click the my filter list', function () {
        filPO.myFilterLink();
    });

    /* To choose one filter and delete for same */
    it('To click one filter and delete it', function () {
        expect(element(filLoc.firstFilter).isPresent()).toBe(true);
        filPO.selectOneFilter();
        filPO.myFilterLink();
    });

    /* To choose one or more filters and delete it */
    it('To click one or more filters and delete it', function () {
        expect(element(filLoc.firstFilter).isPresent()).toBe(true);
        filPO.selectManyFilters();
        filPO.myFilterLink();
    });

    /* To select all filters and delete it */
    it('To click all filters and delete it', function () {
        expect(element(filLoc.firstFilter).isPresent()).toBe(true);
        filPO.selectAllFilters();
    });
});
