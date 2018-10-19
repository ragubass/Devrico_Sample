/**
 * Created by kesav.sn on 29-May-15.
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
var POHelper = new HelperPO();
var POHeader = new HeaderPO();
var POAnalyze = new AnalyzePO();
var POControlPanel = new ControlPanelPO();

describe('Analyze - To validate the Control Panel: Spilt Select Data and Dates Ribbons in Analyze module', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To open control panel and validate the label', function () {
        POLandingPage.clickModAnalyze();
        expect(POAnalyze.drawerDownArrow.isPresent()).toBe(true);
        POAnalyze.clickDrawerArrow();
        expect(POControlPanel.selectDataTab.getText()).toEqual('Data');
    });
    it('To select the data layer and checks data layer name populates in the Control Panel', function () {
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(0);
        expect(POControlPanel.getSummaryContentDetailsText(1).isPresent()).toBe(true);
    });
    it('To select the view name and checks view name populates in the Control Panel', function () {
        POControlPanel.clickDownArrow();
        //expect(POControlPanel.viewsRightArrow.isPresent()).toBe(true); TODO: 6/10/2015 Figure this out.
        POControlPanel.clickViewsRightArrow();
        POControlPanel.selectDataTabContent.clickDataTableLayerCheckBox(12);
        expect(POControlPanel.getSummaryContentDetailsText(0).isPresent()).toBe(true);
        expect(POControlPanel.selectViewAccordion.getViewsFirstRowText(13)).toEqual(POControlPanel.getSummaryContentDetailsText(0));
    });
    it('To select the dates and checks dates populates in the Control Panel', function () {
        POControlPanel.selectDatesTabContent.selectDatesTray();
        expect(POControlPanel.dp_jumpTodateBtn.isPresent()).toBe(true);
        POControlPanel.clickSelectDates(5);
        expect(POControlPanel.getSummaryContentDetailsText(2).isPresent()).toBe(true);
        expect(POControlPanel.getSelectedDatesText()).toEqual(POControlPanel.getSummaryContentDetailsText(2));
    });
    it('To close the control panel fly out and checks the selected items persist in ribbon', function () {
        POControlPanel.clickCloseButton();
        expect(POControlPanel.getSummaryContentDetailsText(0).isPresent()).toBe(true);
        expect(POControlPanel.getSummaryContentDetailsText(1).isPresent()).toBe(true);
        expect(POControlPanel.getSummaryContentDetailsText(2).isPresent()).toBe(true);
        POControlPanel.clickDrawerUpArrow();
    });
});