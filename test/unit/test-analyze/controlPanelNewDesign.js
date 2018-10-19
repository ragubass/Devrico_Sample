/**
 * Created by ragu.s on 5/22/2015.
 */
var sharedSetup = require('../../../core/sharedSetup');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var AnalyzePO = require('../../../pageObject/module-analyze/analyzePO');
var ControlPanelDrawerPO = require('../../../pageObject/module-analyze/controlPanelDrawerPO');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POLandingPage = new LandingPagePO();
var POAnalyze = new AnalyzePO();
var POControlPanelDrawer = new ControlPanelDrawerPO();

describe('Analyze - Control Panel - New Design - View Definition Ribbons', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Close Modal and Check if Analyze Module is Visible and Select it', function () {
        POLandingPage.clickModAnalyze();
        expect(browser.getCurrentUrl()).toMatch('ceaEnterprise/analyze');
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Analyze');
    });
    it('To open Control Panel drawer and check the new design data tray', function () {
        POAnalyze.clickDrawerArrow();
        expect(POControlPanelDrawer.selectDataTab.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.selectDataTab.getText()).toEqual('Data');
        expect(POControlPanelDrawer.groupHeaderText(0)).toEqual('Select Data Layer');
        expect(POControlPanelDrawer.groupHeaderText(1)).toEqual('Select View');
    });
    it('Validate the new design dates tray', function () {
        expect(POControlPanelDrawer.selectDatesTab.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.selectDatesTab.getText()).toEqual('Dates');
        POControlPanelDrawer.selectDatesTabContent.selectDatesTray();
        expect((POControlPanelDrawer.dp_jumpTodateBtn).isPresent()).toBe(true);
        expect(POControlPanelDrawer.dp_LegendBtn.isPresent()).toBe(true);
    });
    it('Validate the new design paths tray', function () {
        expect(POControlPanelDrawer.tabPaths.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.tabPaths.getText()).toEqual('Paths');
        POControlPanelDrawer.tabPathsContent.selectPathsTray();
        expect(POControlPanelDrawer.pathHeader.getText()).toEqual('Select Path');

    });
    it('Validate the new design filters tray', function () {
        expect(POControlPanelDrawer.tabFilters.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.tabFilters.getText()).toEqual('Filters');
        POControlPanelDrawer.tabFilterContent.selectFiltersTray();
        expect(POControlPanelDrawer.filtersHeader.getText()).toEqual('Select Filter');
    });
    it('Validate the new design buttons', function () {
        expect(POControlPanelDrawer.saveViewBtn.isDisplayed()).toBe(true);
        expect(POControlPanelDrawer.saveViewBtn.getText()).toEqual('SAVE');
        expect(POControlPanelDrawer.startOverBtn.isPresent()).toBe(false);
    });
    it('To close the flyout window, control panel drawer', function () {
        POControlPanelDrawer.clickCloseButton();
        POControlPanelDrawer.clickDrawerUpArrow();
    });
});