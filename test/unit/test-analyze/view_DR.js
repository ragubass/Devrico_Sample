/**
 * Created by kesav.sn on 02-Feb-15.
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
//TODO: Locators shouldn't be within test cases
var repLoc = require('../../uiMap/uimap-analyze/viewLocators');
var repPO = require('../../pageObject/module-analyze/viewPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the view link under the Analyze module */
describe('To click the view link', function () {
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

    it('To click the view link', function () {
        expect(element(repLoc.viewLink).isPresent()).toBe(true);
        repPO.viewLink();
    });

    /* To click the 'My views' link for choosing the views for deleting */
    it('To click the my view list', function () {
        repPO.myViewLink();
    });

    /* To choose one view and delete for same */
    it('To click one view and delete it', function () {
        expect(element(repLoc.firstView).isPresent()).toBe(true);
        repPO.selectOneView();
        repPO.myViewLink();
    });

    /* To choose one or more views and delete it */
    it('To click one or more views and delete it', function () {
        expect(element(repLoc.firstView).isPresent()).toBe(true);
        repPO.selectManyViews();
        repPO.myViewLink();
    });

    /* To select all views and delete it */
    it('To click all views and delete it', function () {
        expect(element(repLoc.firstView).isPresent()).toBe(true);
        repPO.selectAllViews();
    });

});