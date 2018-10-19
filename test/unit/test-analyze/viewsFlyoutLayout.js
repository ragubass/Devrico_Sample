/**
 * Created by ragu.s on 5/28/2015.
 * Analyze: Workspace: Control Panel - Views Flyout Layout
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

describe('Analyze - Control Panel - views flyout layout', function () {
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
    });
    it('To open Control Panel drawer', function () {
        POAnalyze.clickDrawerArrow();
        expect(POControlPanelDrawer.selectDataTab.getText()).toEqual('Data');
    });
    it('validate control panel drawer trays', function () {
        expect(POControlPanelDrawer.selectDataTab.getText()).toEqual('Data');
        expect(POControlPanelDrawer.selectDatesTab.getText()).toEqual('Dates');
        expect(POControlPanelDrawer.tabPaths.getText()).toEqual('Paths');
        expect(POControlPanelDrawer.tabFilters.getText()).toEqual('Filters');
    });
    it('To Confirm the Data Layer and Views buttons are not displayed anywhere on the Select Data Control Page', function () {
        expect(POControlPanelDrawer.dataLayersBtn.isPresent()).toBe(false);
        expect(POControlPanelDrawer.viewsBtn.isPresent()).toBe(false);
    });
    it('validate view group title', function () {
        expect(POControlPanelDrawer.groupHeader.get(1).isPresent()).toBe(true);
        expect(POControlPanelDrawer.groupHeader.get(1).getText()).toEqual('Select View');
    });
    it('Validate view groups and user is able to  switch between views', function () {
        POControlPanelDrawer.clickViewsRightArrow();
        POControlPanelDrawer.clickDownArrow();
        expect(POControlPanelDrawer.newViewBtn.getText()).toEqual('New View');
        expect(POControlPanelDrawer.newViewBtn.isPresent()).toBe(true);
        expect(POControlPanelDrawer.narrowByLabel.getText()).toEqual('Narrow By');
        expect(POControlPanelDrawer.narrowByLabel.isPresent()).toBe(true);
        POControlPanelDrawer.switchBetweenViews();
        POControlPanelDrawer.switchBetweenViews();
    });
    it('validate views column sorting', function () {
        POControlPanelDrawer.selectViewAccordion.getViewsFirstRowText(2);
        POControlPanelDrawer.selectViewAccordion.clickViewsColumnHeading(30);
        expect(POControlPanelDrawer.selectViewAccordion.getViewsFirstRowText).not.toEqual(POControlPanelDrawer.selectViewAccordion.getViewsFirstRowTextAfterSorting(2));
    });
    it('validate views search box and checkbox ', function () {
        POControlPanelDrawer.selectDataTabContent.clickDataTableLayerCheckBox(13);
        POControlPanelDrawer.selectDataTabContent.clickDataTableLayerCheckBox(13);
        POControlPanelDrawer.selectDataTabContent.clickSearchBox(1, 'vj-layer');
        POControlPanelDrawer.selectViewAccordion.getViewsFirstRowText(2);
    });
    it('validate views column headers', function () {
        expect(POControlPanelDrawer.getColumnHeader(2)).toEqual('View Name');
        expect(POControlPanelDrawer.getColumnHeader(4)).toEqual('Tags');
        expect(POControlPanelDrawer.getColumnHeader(5)).toEqual('View Type');
        expect(POControlPanelDrawer.getColumnHeader(6)).toEqual('Data Layer Name');
    });
    it('Check the narrow option and get the text', function () {
        POControlPanelDrawer.selectDataTabContent.clickNarrowByOptionsList();
        expect(POControlPanelDrawer.selectDataTabContent.getNarrowByOptionsText()).toContain('All View Types', 'Behavior', 'Report', 'Traffic');
        POControlPanelDrawer.clickDownArrow();
        expect(POControlPanelDrawer.viewGroupCollaps.get(24).isPresent()).toBe(true);
    });
    it('To close the select data flyout window, control panel drawer', function () {
        POControlPanelDrawer.clickCloseButton();
        POControlPanelDrawer.clickDrawerUpArrow();
    });
});