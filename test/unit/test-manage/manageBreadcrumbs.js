/**
 * Created by jayaganapathi.e on 2/12/2015.
 */
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POManage = new ManagePO();
var POHelper = new HelperPO();

describe('Manage - To validate breadcrumbs in Manage module', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Check if module is visible and select it', function () {
        POLandingPage.clickModManage();
        POManage.clickDataManagement();
        expect(POManage.pageHeader.getText()).toBe('Data Management');
        POManage.clickDataLayerTab();
        /*click a Datalayer Link */
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/data-layers');
    });

    it('Check initial breadcrumb text', function () {
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Data Layers');
    });

    describe('Use breadcrumbs to navigate around module and to home', function () {
        it('Use breadcrumbs to go to home', function () {
            POHeader.breadcrumbs.clickHome();
            expect(POLandingPage.moduleManage.isPresent()).toBe(true);
        });

        it('Go back to Manage', function () {
            POLandingPage.clickModManage();
            expect(POManage.pageHeader.isPresent()).toBe(true);
            expect(POManage.pageHeader.getText()).toBe('Manage');
        });

        it('Click Data Management', function () {
            POManage.clickDataManagement();
            expect(POManage.pageHeader.isPresent()).toBe(true);
            expect(POManage.pageHeader.getText()).toBe('Data Management');
        });

        it('Use Breadcrumb to go back to Manage Landing Page', function () {
            POHeader.breadcrumbs.clickCrumb(0);
            expect(POManage.pageHeader.isPresent()).toBe(true);
            expect(POManage.pageHeader.getText()).toBe('Manage');
        });

        it('Use Breadcrumb to go back to Manage Landing Page', function () {
            POManage.clickDataManagement();
            expect(POManage.pageHeader.isPresent()).toBe(true);
            expect(POManage.pageHeader.getText()).toBe('Data Management');
            POHeader.breadcrumbs.clickCrumb(1);
            expect(POManage.pageHeader.isPresent()).toBe(true);
            expect(POManage.pageHeader.getText()).toBe('Data Management');
        });
    });

});