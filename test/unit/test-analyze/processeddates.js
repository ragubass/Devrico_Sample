/**
 * Created by kesav.sn on 22-Apr-15.
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

describe('Analyze - To validate the processed dates for data layers in Analyze module', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To open control panel and click date icon next to data layer', function () {
        POLandingPage.clickModAnalyze();
        expect(POAnalyze.drawerDownArrow.isPresent()).toBe(true);
        POAnalyze.clickDrawerArrow();
        expect(POControlPanel.selectDataTab.isPresent()).toBe(true);
        POControlPanel.selectDataTabContent.clickSearchBox(0, 'ivr-pulse');
        POControlPanel.selectDateIconAndCheckTitle.clickDateIconForLayer(0);
        expect(POControlPanel.selectDateIconAndCheckTitle.checkCalendarModelTitle()).toMatch('Select Dates For:');
    });
    it('To click jumptodate and move to old year', function () {
        POControlPanel.selectDatesTabContent.clickCalenderJumpToDateButton();
        expect(POControlPanel.monthCalendarContainer.isPresent()).toBe(true);
        POControlPanel.checkProcessedDates(0, 6, 0, 2009);
        expect(POControlPanel.januaryCalendar.isPresent()).toBe(true);
    });
    it('To check the processed dates and close control panel', function () {
        expect(POHelper.hasClass(POControlPanel.firstProcessedDateBtn, 'date-bold')).toBe(true);
        POControlPanel.clickCalendarCloseIcon();
        expect(POControlPanel.drawerUpBtn.isPresent()).toBe(true);
        POControlPanel.clickDrawerUpArrow();
    });
});