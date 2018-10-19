/**
 * Created by ragu.s on 3/24/2015.
 * Analyze: Workspace: Control Panel - Select Data Accordion - Collapsible Groups
 */
var sharedSetup = require('../../../core/sharedSetup');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var AnalyzePO = require('../../../pageObject/module-analyze/analyzePO');
var ControlPanelDrawerPO = require('../../../pageObject/module-analyze/controlPanelDrawerPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POAnalyze = new AnalyzePO();
var POControlPanelDrawer = new ControlPanelDrawerPO();
var POHelper = new HelperPO();

describe('Analyze - Workspace - Control Panel - Select Data Flyout - Collapsible Groups screen', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Close Modal and Check if Analyze Module is Visible and Select it', function () {
        POLandingPage.clickModAnalyze();
    });
    it('To open Control Panel drawer', function () {
        POAnalyze.clickDrawerArrow();
        expect(POControlPanelDrawer.selectDataTab.getText()).toEqual('Data');
    });
    it('To Confirm the Data Layer and Views buttons are not displayed anywhere on the Select Data Control Page', function () {
        expect(POControlPanelDrawer.dataLayersBtn.isPresent()).toBe(false);
        expect(POControlPanelDrawer.viewsBtn.isPresent()).toBe(false);
    });
    it('To Confirm the add filter,add path,select dates buttons are removed from the data layer page', function () {
        expect(POControlPanelDrawer.dataLayerGroup.isPresent()).toBe(true);
        expect(POControlPanelDrawer.viewsGroup.isPresent()).toBe(true);
        expect(POControlPanelDrawer.addFilterBtn.isPresent()).toBe(false);
        expect(POControlPanelDrawer.addPathBtn.isPresent()).toBe(false);
        expect(POControlPanelDrawer.selectDatesBtn.isPresent()).toBe(false);
    });
    it('validate datalayer sorting', function () {
        POControlPanelDrawer.selectDataLayerAccordion.getDataLayerFirstRowText(2);
        POControlPanelDrawer.selectDataLayerAccordion.clickDataLayerColumnHeading(11);
        expect(POControlPanelDrawer.selectDataLayerAccordion.getDataLayerFirstRowText).not.toEqual(POControlPanelDrawer.selectDataLayerAccordion.getDataLayerFirstRowTextAfterSorting(2));
    });
    it('Validate Select Data Layer group expanded and displays all visible data layers when Select Data Control page initially opened Step', function () {
        expect(POControlPanelDrawer.groupHeader.get(0).isPresent()).toBe(true);
        expect(POControlPanelDrawer.groupHeader.get(0).getText()).toEqual('Select Data Layer');
        POControlPanelDrawer.clickDownArrow();
        expect(POControlPanelDrawer.dataLayerGroupCollaps.isPresent()).toBe(true);
    });
    it('validate view group title', function () {
        expect(POControlPanelDrawer.groupHeader.get(1).isPresent()).toBe(true);
        expect(POControlPanelDrawer.groupHeader.get(1).getText()).toEqual('Select View');
    });
    it('Validate view groups and user is able to  switch between views', function () {
        POControlPanelDrawer.clickViewsRightArrow();
        expect(POControlPanelDrawer.newViewBtn.getText()).toEqual('New View');
        expect(POControlPanelDrawer.newViewBtn.isPresent()).toBe(true);
        expect(POControlPanelDrawer.narrowByLabel.getText()).toEqual('Narrow By');
        expect(POControlPanelDrawer.narrowByLabel.isPresent()).toBe(true);
        POControlPanelDrawer.switchBetweenViews();
        POControlPanelDrawer.switchBetweenViews();
    });
    it('validate views column sorting', function () {
        POControlPanelDrawer.selectViewAccordion.getViewsFirstRowText(1);
        POControlPanelDrawer.selectViewAccordion.clickViewsColumnHeading(29);
        expect(POControlPanelDrawer.selectViewAccordion.getViewsFirstRowText).not.toEqual(POControlPanelDrawer.selectViewAccordion.getViewsFirstRowTextAfterSorting(2));
        POControlPanelDrawer.clickDownArrow();
        expect(POControlPanelDrawer.viewGroupCollaps.get(24).isPresent()).toBe(true);
    });
    it('To close the select data flyout window, control panel drawer', function () {
        POControlPanelDrawer.clickCloseButton();
        POControlPanelDrawer.clickDrawerUpArrow();
    });
});