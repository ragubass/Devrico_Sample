/**
 * Created by ragu.s on 10/6/2015.
 */

var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var LayerEditorPO = require('../../../pageObject/module-analyze/layerEditorPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POHelper = new HelperPO();
var POLayerEditor = new LayerEditorPO();

xdescribe('Management - Layer Editor page', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Close Modal and Check if Analyze Module is Visible and Select it', function () {
        POLandingPage.clickModAnalyze();
        //POLayerEditor.layerEditorButton();
        //expect(browser.getCurrentUrl()).toMatch('ceaEnterprise/management');
    });
   /* it('Validate the new design dates tray', function () {
        POAnalyze.clickDrawerArrow();
        expect(POControlPanelDrawer.selectDatesTab.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.selectDatesTab.getText()).toEqual('Dates');
        POControlPanelDrawer.selectDatesTabContent.selectDatesTray();
        expect((POControlPanelDrawer.dp_jumpTodateBtn).isPresent()).toBe(true);
        expect(POControlPanelDrawer.dp_LegendBtn.isPresent()).toBe(true);
    });
    it('Should have Legend Button and validate the text beside colors', function () {
        POControlPanelDrawer.selectDatesTabContent.clickCalenderLegendButton();
        expect(POControlPanelDrawer.grayColorBesideText.getText()).toBe('No Data');
        expect(POControlPanelDrawer.blackColorBesideText.getText()).toBe('Data successfully loaded');
        expect(POControlPanelDrawer.redColorBesideText.getText()).toBe('Data changed since last view run');
        expect(POControlPanelDrawer.greenColorBesideText.getText()).toBe('Views have been run');
        expect(POControlPanelDrawer.goldColorBesideText.getText()).toBe('Data loaded, but not certified');
    });
    it('To close Legend window', function () {
        POControlPanelDrawer.selectDatesTabContent.clickCalenderLegendButton();
    });

    it('To close the flyout window, control panel drawer', function () {
        POControlPanelDrawer.clickCloseButton();
        POControlPanelDrawer.clickDrawerUpArrow();
    });*/
});