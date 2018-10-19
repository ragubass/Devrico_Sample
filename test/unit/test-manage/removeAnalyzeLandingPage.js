/**
 * Created by ragu.s on 2/16/2015.
 * Automate Removing Analyze landing page from Workspace
 */
var RemoveAnalyzeLandingPagePO = require('../../../pageObject/module-manage/removeAnalyzeLandingPagePO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POLandingPage = new LandingPagePO();
var POManage = new ManagePO();
var PORemoveAnalyzeLandingPage = new RemoveAnalyzeLandingPagePO();

describe('Manage - Removing Analyze landing page from Workspace', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Close Modal and Check if Manage Module is Visible and Select it', function () {
        POLandingPage.clickModManage();
        expect(POManage.checkDataMgtText()).toEqual('Manage');
    });
    it('Click Manage Module and validate Analyze landing page is reached', function () {
        PORemoveAnalyzeLandingPage.clickDataManagement();
        expect(POManage.tabDataLayers.getText()).toEqual('Data Layers');
        expect(POManage.analyzeLandingPageTable.isPresent()).toBe(true);
    });
    it('clicking CEA icon', function () {
        POHeader.clickLogo();
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POLandingPage.moduleAnalyzeBtn.getText()).toEqual('Analyze');
    });
    it('click Analyze module and validate Analyze landing page is not reached ', function () {
        POLandingPage.clickModAnalyze();
        expect(POManage.homeLink.getText()).toEqual('Home');
        expect(POManage.analyzeLandingPageTable.isPresent()).toBe(false);
    });
});