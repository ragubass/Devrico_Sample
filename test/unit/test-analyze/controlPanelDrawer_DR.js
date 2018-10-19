/**
 * Created by ragu.s on 2/16/2015.
 *
 * Workspace summary drawer and control panel drawer
 *
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var CpdPO = require('../../pageObject/module-analyze/controlPanelDrawerPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POCpd = new CpdPO();

describe('control panel drawer screen', function () {
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

    it('drawer should be labelled as "Control Panel"', function () {
        POCpd.drawerlabelname();
    });

    it('Control Panel drawer should be opened and closed based on click"', function () {
        POCpd.draweropen();
    });

    it('validation buttons of control panel namely data layer, date, path, filters. start over button and Save View button"', function () {
        POCpd.validatebuttons();
    });

    it('Type data source name and verify if matching data source names appear. "', function () {
        POCpd.dataLayerclick();
        POCpd.seachbox();
    });

    it('Validate presence of "Save Changes" button and "Close" button', function () {
        POCpd.savechangesclosebutton();
    });


    it('Control Panel Drawer Dates Tab Validation Test ', function () {
        POCpd.datestab();
    });

    it('validate dates tab buttons', function () {
        POCpd.datestabbutttonvalidation();
        POCpd.savechangesclosebutton();
    });

    it('Control Panel Drawer Entire Functionality Validation Test', function () {
        POCpd.dataLayerclick();
        POCpd.savechangesclick();
    });

    it('workspace summary drawer can be open', function () {
        POCpd.workspacesummaryopen();
    });

    it('Workspace Search box validation Test', function () {
        POCpd.workspacesummarusearchbox();
    });

    it('workspace summary drawer can be close', function () {
        POCpd.workspacesummaryclose();
    });

});
