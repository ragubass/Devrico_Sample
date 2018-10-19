/**
 * Created by jayaganapathi.e on 2/6/2015.
 */

var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var ControlPanelPO = require('../../pageObject/module-analyze/controlpanelPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

/* To click the control panel icon in the Analyze module page */
describe('go to views link to verify the control panel Elements', function () {
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

    it('Verify DataLayer Flyouts/Layout-Opened-Closed functionality', function () {
        ControlPanelPO.controlpanelopen();//open the control panel//
        expect(element(ControlPanelPO.Controlpanelclose).isPresent()).toBe(true);
        /*after open control panel close verify  control panel close options present*/
        expect(element(ControlPanelPO.datalayertxt).isPresent()).toBe(true);
        /*verify the datalayer text are present*/
        ControlPanelPO.clickclose();
        /*close the Data Layer flyout */
        ControlPanelPO.controlpanelclose();
        /*close the control panel*/
        expect(element(ControlPanelPO.Controlpanelopen).isPresent()).toBe(true);
        /*after close control panel verify control panel open element options present*/
    });

});

