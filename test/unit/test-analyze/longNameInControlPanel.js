/**
 * Created by kesav.sn on 30-Jun-15.
 */
//Shared Elements
var sharedSetup = require('../../../core/sharedSetup');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var AnalyzePO = require('../../../pageObject/module-analyze/analyzePO');
var ControlPanelPO = require('../../../pageObject/module-analyze/controlPanelDrawerPO');
var POLandingPage = new LandingPagePO();
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POAnalyze = new AnalyzePO();
var POControlPanel = new ControlPanelPO();

describe('Analyze - To validate Hover Over to Display Long Names within the Control Panel Summary Section', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To open control panel and click the data layer name', function () {
        POLandingPage.clickModAnalyze();
        expect(POAnalyze.drawerDownArrow.isPresent()).toBe(true);
        POAnalyze.clickDrawerArrow();
        expect(POControlPanel.selectDataTab.getText()).toEqual('Data');
        expect(POControlPanel.selectDatesTab.getText()).toEqual('Dates');
        expect(POControlPanel.tabPaths.getText()).toEqual('Paths');
        expect(POControlPanel.tabFilters.getText()).toEqual('Filters');
        expect(POControlPanel.saveViewBtn.getText()).toEqual('SAVE');
        expect(POControlPanel.applyBtn.getText()).toEqual('APPLY');
        expect(POControlPanel.resetBtn.getText()).toEqual('RESET');
    });
    it('To open Data Layer drawer and select the Data layer', function () {
        POControlPanel.selectDataTabContent.selectDataLayerTray();
        expect(POControlPanel.groupHeaderText(0)).toEqual('Select Data Layer');
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(1);
        expect(POControlPanel.getSummaryContentDetailsText(1).isPresent()).toBe(true);
        POControlPanel.mouseHoverOnSummaryContent(1);
        expect(POControlPanel.getSummaryContentTooltipText(1)).toEqual(POControlPanel.getSummaryContentDetailsText(1));
    });
    it('To open View Name drawer and select the View name', function () {
        POControlPanel.clickDownArrow();
        POControlPanel.clickViewsRightArrow();
        expect(POControlPanel.groupHeaderText(1)).toEqual('Select View');
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(12);
        expect(POControlPanel.getSummaryContentDetailsText(0).isPresent()).toBe(true);
        POControlPanel.mouseHoverOnSummaryContent(0);
        expect(POControlPanel.getSummaryContentTooltipText(0)).toEqual(POControlPanel.getSummaryContentDetailsText(0));
    });
    it('To open Dates drawer and select the Dates', function () {
        POControlPanel.selectDatesTabContent.selectDatesTray();
        expect(POControlPanel.dp_jumpTodateBtn.isPresent()).toBe(true);
        POControlPanel.clickSelectDates(5);
        expect(POControlPanel.getSummaryContentDetailsText(2).isPresent()).toBe(true);
        POControlPanel.mouseHoverOnSummaryContent(2);
        expect(POControlPanel.getSummaryContentTooltipText(2)).toEqual(POControlPanel.getSummaryContentDetailsText(2));
    });
    it('To open path Layer drawer and select the Path name', function () {
        POControlPanel.tabPathsContent.selectPathsTray();
        expect(POControlPanel.pathHeader.getText()).toEqual('Select Path');
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(1);
        expect(POControlPanel.getSummaryContentText(3)).toEqual('Path Name');
        expect(POControlPanel.getSummaryContentDetailsText(2).isPresent()).toBe(true);
        POControlPanel.mouseHoverOnSummaryContent(3);
        expect(POControlPanel.getSummaryContentTooltipText(3)).toEqual(POControlPanel.getSummaryContentDetailsText(3));
    });
    it('To open Filter Layer drawer and select the Filter name', function () {
        POControlPanel.tabFilterContent.selectFiltersTray();
        expect(POControlPanel.filterHeader.getText()).toEqual('Select Filter');
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(1);
        expect(POControlPanel.getSummaryContentText(4)).toEqual('Filter Name');
        expect(POControlPanel.getSummaryContentDetailsText(2).isPresent()).toBe(true);
        POControlPanel.mouseHoverOnSummaryContent(4);
        expect(POControlPanel.getSummaryContentTooltipText(4)).toEqual(POControlPanel.getSummaryContentDetailsText(4));
    });
    it('To close the control panel fly out', function () {
        POControlPanel.clickCloseButton();
        expect(POControlPanel.drawerUpBtn.isPresent()).toBe(true);
        POControlPanel.clickDrawerUpArrow();
    });
});