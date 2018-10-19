/**
 * Created by kesav.sn on 11-May-15.
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

xdescribe('Manage - To delete the paths from server under Manage module', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('To click the Manage module and click the data management link', function () {
        POLandingPage.clickModManage();
        expect(POManage.dataManagement.isPresent()).toBe(true);
        expect(browser.getCurrentUrl()).toMatch('/ceaEnterprise/manage');
        POManage.clickDataManagement();
        expect(POManage.checkDataMgtText()).toEqual('Data Management');
    });
    it('To select the Paths tab and click the All Paths link', function () {
        POManage.clickPathsTab();
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Paths');
        POManage.tabPathsContent.clickAllPathsLink();
    });
    it('To select the paths and delete it', function () {
        POManage.selectDataTableCheckBoxItem(0, 2);
        POManage.clickDeleteLink();
        expect(POManage.checkDeleteWindowModalTitle()).toEqual('Delete Paths');
        //POManage.clickOKButton();
        expect(POManage.okButton.isPresent()).toBe(true);
        POManage.clickOKButton();
    });
});