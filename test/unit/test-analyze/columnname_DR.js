/**
 * Created by jayaganapathi.e on 2/3/2015.
 * CMK-Edit to file. Moved references to ControlPanelDrawerPO
 */

var sharedSetup = require('../../core/sharedSetup');
//TODO: Remove locators from test
var columnnameLoc = require('../../uiMap/uimap-analyze/controlPanelDrawerLoc');

var ControlPanelPO = require('../../pageObject/module-analyze/controlPanelDrawerPO');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POControlPanel = new ControlPanelPO();
/* To click the views link under the Analyze module */

describe('go to views link to verify the column are present', function () {
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

    it('To verify the views name column in my views page', function () {
        expect(element(columnnameLoc.viewsLink).isPresent()).toBe(true); //verify the views link present
        POControlPanel.viewsLink();
        /*click the  views link*/
        var pagetxt1 = (element.all(columnnameLoc.viewsname)).get(0).getText();
        expect(pagetxt1).toEqual('View Name'); //*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(0).isPresent()).toBe(true);
        /*verify views name column*/
    });

    it('To verify the views type column in my views page', function () {
        var pagetxt2 = (element.all(columnnameLoc.viewsname)).get(1).getText();
        expect(pagetxt2).toEqual('View Type'); //*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(1).isPresent()).toBe(true);
        /*verify views type column*/
    });

    it('To verify the Data Layer column in my views page', function () {
        var pagetxt3 = (element.all(columnnameLoc.viewsname)).get(2).getText();
        expect(pagetxt3).toEqual('Data Layer'); //*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(2).isPresent()).toBe(true);
        /*verify Data Layer column*/
    });

    it('To verify the Created By column in my views page', function () {
        var pagetxt4 = (element.all(columnnameLoc.viewsname)).get(3).getText();
        expect(pagetxt4).toEqual('Created By');//*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(3).isPresent()).toBe(true);
        /*verify Created By column*/
    });

    it('To verify the views name column in allviews page', function () {
        POControlPanel.allViewsLink();//*verify the text to expected*/
        var pagetxt1 = (element.all(columnnameLoc.viewsname)).get(0).getText();
        expect(pagetxt1).toEqual('View Name');//*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(0).isPresent()).toBe(true);
        /*verify viewsname column in all views page*/
    });

    it('To verify the View Type column in allviews page', function () {
        var pagetxt2 = (element.all(columnnameLoc.viewsname)).get(1).getText();
        expect(pagetxt2).toEqual('View Type');//*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(1).isPresent()).toBe(true);
        /*verify views type column in all views page*/
    });

    it('To verify the Data Layer column in allviews page', function () {
        var pagetxt3 = (element.all(columnnameLoc.viewsname)).get(2).getText();
        expect(pagetxt3).toEqual('Data Layer');//*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(2).isPresent()).toBe(true);
        /*verify Data Layer column in all views page*/
    });

    it('To verify the Created By column in allviews page', function () {
        var pagetxt4 = (element.all(columnnameLoc.viewsname)).get(3).getText();
        expect(pagetxt4).toEqual('Created By');//*verify the text to expected*/
        expect(element.all(columnnameLoc.viewsname).get(3).isPresent()).toBe(true);
        /*verify Created By  column all views page*/
    });
});
