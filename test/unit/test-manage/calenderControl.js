/**
 * Created by ragu.s on 1/5/2015.
 *
 * Suite of tests for the calendercontrol  screen.
 */

var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var CalenderPO = require('../../../pageObject/module-manage/calenderControlPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POCalender = new CalenderPO();
var POHelper = new HelperPO();

xdescribe('Manage - Calender control page', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Close Modal and Check if Manage Module is Visible and Select it', function () {
        POLandingPage.clickModManage();
        expect(POCalender.datamanagementLink.isPresent()).toBe(true);
    });

    it('Check if Manage Module is Visible and Select it', function () {
        POCalender.clickdatamanagement();
        expect(POCalender.datalayersLink.isPresent()).toBe(true);
    });

    it('Data layers link click', function () {
        POCalender.clickdatalayerlink();
    });

    it('Data source link click', function () {
        POCalender.clickdatasourcelink();
        expect(POCalender.legendBtn.isPresent()).toBe(true);
    });

    it('Should have Legend Button', function () {
        POCalender.clickLegendButton();
    });

    it('verify Red color and beside text', function () {
        expect(POCalender.redColor.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
        expect(POCalender.redcolorbesideText.getText()).toBe('Data changed since last view run');
    });

    it('verify Green color and beside text', function () {
        expect(POCalender.greenColor.getCssValue('color')).toBe('rgba(0, 140, 35, 1)');
        expect(POCalender.greencolorbesideText.getText()).toBe('Views have been run');
    });

    it('verify Gold color and beside text', function () {
        expect(POCalender.goldColor.getCssValue('color')).toBe('rgba(223, 183, 83, 1)');
        expect(POCalender.goldcolorbesideText.getText()).toBe('Data loaded, but not certified');
    });

    it('verify Gray color and beside text', function () {
        expect(POCalender.grayColor.getCssValue('color')).toBe('rgba(187, 187, 187, 1)');
        expect(POCalender.graycolorbesideText.getText()).toBe('No Data');
    });

    it('verify Black color and beside text', function () {
        expect(POCalender.blakColor.getCssValue('color')).toBe('rgba(51, 51, 51, 1)');
        expect(POCalender.blackcolorbesideText.getText()).toBe('Data successfully loaded');
    });

    it('To close Legend window', function () {
        POCalender.clickLegendButton();
    });

    it('To close calender control window', function () {
        POCalender.clickcalendercontrolcloseicon();
        expect(POCalender.legendBtn.isPresent()).toBe(false);
    });
});