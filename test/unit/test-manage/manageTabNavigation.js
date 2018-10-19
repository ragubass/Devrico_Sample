/**
 * Created by ckoerber on 5/20/15.
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

describe('Manage - Test navigation tab functionality', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Check if module is visible and select it', function () {
        POLandingPage.clickModManage();
        expect(POManage.dataManagement.isPresent()).toBeTruthy();
        expect(browser.getCurrentUrl()).toMatch('/manage');
        POManage.clickDataManagement();
        expect(POManage.pageHeader.getText()).toBe('Data Management');
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
    });

    it('Tab Views - Is default to active on module load', function () {
        expect(POHelper.hasClass(POManage.manageTabViews, 'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabFilters, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers, 'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
        expect(POManage.allViewsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Views');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
    });

    it('Tab Filters - Content is shown when tab selected', function () {
        POManage.clickFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters, 'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers, 'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
    });

    it('Tab Paths - Content is shown when tab selected', function () {
        POManage.clickPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths, 'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers, 'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
    });

    it('Tab Data Layers - Content is shown when tab selected', function () {
        POManage.clickDataLayerTab();
        expect(POHelper.hasClass(POManage.manageTabViews, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers, 'active')).toBe(true);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/data-layers');
        expect(POManage.tabDataLayersContent.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Data Layers');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
    });

    it('Tab Views - Content is shown when tab selected', function () {
        POManage.clickViewsTab();
        expect(POHelper.hasClass(POManage.manageTabViews, 'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabFilters, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths, 'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers, 'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
        expect(POManage.allViewsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Views');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
    });

});