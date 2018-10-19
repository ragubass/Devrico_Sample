/**
 * Created by jayaganapathi.e on 2/2/2015.
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
//TODO: Locators shouldn't be located within test cases
var viewsLoc = require('../../uiMap/uimap-analyze/viewsInlineeditLocaters');
var viewsPO = require('../../pageObject/module-analyze/viewsInlineeditPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the views link under the Analyze module */
describe('Analyze|To click the views link', function () {
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

    it('To click the views link', function () {
        expect(element(viewsLoc.viewsLink).isPresent()).toBe(true);
        viewsPO.viewsLink();
    });

    /* To click the 'My views' link for choosing the viewss for deleting */
    it('To click the my views list', function () {
        expect(element(viewsLoc.myViewsLink).isPresent()).toBe(true);
        viewsPO.myViewsLink();
    });

    /* To click the pencil icon next to views name under views name column */
    it('To click the pencil icon next to views name', function () {
        viewsPO.clickPencilIcon();
        /* To call the function clickPencilIcon() which defined in viewsInlineeditPO */
    });

    /*To type the new views name and hit enter key */
    it('To type the new views name and hit enter key', function () {
        expect(element(viewsLoc.inlineEditBox).isPresent()).toBe(true);
        var viewsname = "Abc";
        viewsPO.hitEnterKey(viewsname);
    });

    /*To type the two same views names in edit box and check the duplicates */
    it('To type the two same views names in edit box and check the duplicates', function () {
        viewsPO.myViewsLink();
        var viewssname = "My Views";
        viewsPO.checkDuplicateNames(viewssname);
    });

    /* To check the spinning icon while saving the new views name in inline edit box */
    it('To check the spinning icon', function () {
        viewsPO.myViewsLink();
        var filname = "My First Views";
        viewsPO.checkSpinningIcon(filname);
    });
});