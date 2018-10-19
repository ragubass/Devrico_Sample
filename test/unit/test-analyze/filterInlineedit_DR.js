/**
 * Created by kesav.sn on 22-Jan-15.
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var filLoc = require('../../uiMap/uimap-analyze/filterInlineeditLocators');
var filPO = require('../../pageObject/module-analyze/filterInlineeditPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the filter link under the Analyze module */
describe('Analyze|To click the filter link', function () {
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
        expect(element(filLoc.myFilter).isPresent()).toBe(true);
        filPO.myFilterLink();
    });

    /* To click the pencil icon next to filter name under filter name column */
    it('To click the pencil icon next to filter name', function () {
        filPO.clickPencilIcon();
        /* To call the function clickPencilIcon() which defined in filterInlineeditPO */
    });

    /*To type the new filter name and hit enter key */
    it('To type the new filter name and hit enter key', function () {
        expect(element(filLoc.inlineEditBox).isPresent()).toBe(true);
        var filtername = "Abc";
        filPO.hitEnterKey(filtername);
    });

    /*To type the two same filter names in edit box and check the duplicates */
    it('To type the two same filter names in edit box and check the duplicates', function () {
        filPO.myFilterLink();
        var filtersname = "My Filter";
        filPO.checkDuplicateNames(filtersname);
    });

    /* To check the spinning icon while saving the new filter name in inline edit box */
    it('To check the spinning icon', function () {
        filPO.myFilterLink();
        var filname = "My First Filter";
        filPO.checkSpinningIcon(filname);
    });
});