/**
 * Created by kesav.sn on 31-Dec-14.

 * Suite of tests for the time slider under Manage module
 *
 */
//Shared Elements
var sharedSetup = require('../../../core/sharedSetup');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var AnalyzePO = require('../../../pageObject/module-analyze/analyzePO');
var ControlPanelPO = require('../../../pageObject/module-analyze/controlPanelDrawerPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POHelper = new HelperPO();
var POAnalyze = new AnalyzePO();
var POControlPanel = new ControlPanelPO();

describe('Analyze - To check the drag and drop functionality for both left and right time sliders', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To open control panel, click date icon next to data layer and drag & drop the time slider', function () {
        POLandingPage.clickModAnalyze();
        expect(POAnalyze.drawerDownArrow.isPresent()).toBe(true);
        POAnalyze.clickDrawerArrow();
        expect(POControlPanel.selectDataTab.isPresent()).toBe(true);
        POControlPanel.selectDateIconAndCheckTitle.clickDateIconForLayer(0);
        expect(POControlPanel.selectDateIconAndCheckTitle.checkCalendarModelTitle()).toMatch('Select Dates For:');
        expect(POControlPanel.leftSlider.isPresent()).toBe(true);
        POControlPanel.dragAndDropTimeSlider.dragLeftSlider();
        expect(POControlPanel.rightSlider.isPresent()).toBe(true);
        POControlPanel.dragAndDropTimeSlider.dragRightSlider();
    });
    it('To click the continue button', function () {
        expect(POControlPanel.continueButton.isElementPresent).toBeTruthy();
        POControlPanel.clickContinueButton();
    });
});