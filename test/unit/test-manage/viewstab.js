/**
 * Created by kesav.sn on 29-Apr-15.
 */
//Shared Elements
var sharedSetup = require('../../../core/sharedSetup');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var POLandingPage = new LandingPagePO();
var POManage = new ManagePO();
var POHeader = new HeaderPO();
var POHelper = new HelperPO();

describe('Manage - To check the views tab is default under Manage module', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To click the Manage module for checking view tab', function () {
        POLandingPage.clickModManage();
        expect(POManage.dataManagement.isPresent()).toBe(true);
        POManage.clickDataManagement();
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
    });
});