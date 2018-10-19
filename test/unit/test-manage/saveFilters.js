/**
 * Created by ragu.s on 5/20/2015.
 */
var ManagePO = require('../../../pageObject/module-manage/managePO');
var LandingPagePO= require('../../../pageObject/module-landingpage/landingPagePO');
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POLandingPage = new LandingPagePO();
var POManage =new ManagePO();
/**
 * Declared originalFilterServerName for the Edit Filter Name
 */
var originalFilterServerName ="AutoFitFilter3";
/**
 * Declared test Variable originalFilterServerName for the Edit Filter Name
 */
var testFilterServerName = "Auto Filter Test 100";
describe('Manage - module save filters from server ', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function() {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Close Modal and Check if Manage Module is Visible and Select it', function () {
        POLandingPage.clickModManage();
        expect(POManage.dataManagement.getText()).toEqual('Data Management');
    });
    it('Check if Manage Module is Visible and Select it', function () {
        POManage.clickDataManagement();
        expect(POManage.pageHeader.getText()).toBe('Data Management');
        expect(POManage.tabPaths.getText()).toEqual('Paths');
    });
    it('Check to make sure we are move to FiltersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Check to make sure Filters name is editable using test filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(originalFilterServerName);
        POManage.editSelectedName(testFilterServerName,0);
        expect(POManage.editableCancelId.isPresent()).toBe(true);
    });
    it('Check to make sure we are move viewsTab', function () {
        POManage.tabViewsContent.selectViewsTab();
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
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Check to make sure we are move filtersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Check to make sure Filter name is editable for save filter name using test filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(originalFilterServerName);
        POManage.editSelectedName(testFilterServerName,0);
        POManage.editSelectedNameSave();
        POManage.tabViewsContent.selectViewsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
        expect(POManage.allViewsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Views');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Validate edited the Filter name should be saved to the server using test filter name', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Filter');
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(testFilterServerName);
        expect(POManage.selectedNamesLink.getText()).toContain(testFilterServerName);
    });
    it('Check to make sure we are move views Tab', function () {
        POManage.tabViewsContent.selectViewsTab();
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
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Check to make sure we are move viewsTab and filtersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Validate duplicate filter name should not be accept using test filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.editSelectedName(testFilterServerName,0);
        POManage.editSelectedNameSave();
        expect(POManage.editableWarningId.getAttribute('popover')).toEqual('Filter name already exists');
    });
    it('Check to make sure we are move to FiltersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Check to make sure Filters name is editable using original filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(testFilterServerName);
        POManage.editSelectedName(originalFilterServerName,0);
        expect(POManage.editableCancelId.isPresent()).toBe(true);
    });
    it('Check to make sure we are move viewsTab', function () {
        POManage.tabViewsContent.selectViewsTab();
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
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Check to make sure we are move filtersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Check to make sure Filter name is editable for save filter name using original filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(testFilterServerName);
        POManage.editSelectedName(originalFilterServerName,0);
        POManage.editSelectedNameSave();
        POManage.tabViewsContent.selectViewsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/views');
        expect(POManage.allViewsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Views');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Validate edited the Filter name should be saved to the server using original filter name', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Filter');
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(originalFilterServerName);
        expect(POManage.selectedNamesLink.getText()).toContain(originalFilterServerName);
    });
    it('Check to make sure we are move views Tab', function () {
        POManage.tabViewsContent.selectViewsTab();
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
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Views');
    });
    it('Check to make sure we are move viewsTab and filtersTab', function () {
        POManage.tabFiltersContent.selectFiltersTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/filters');
        expect(POManage.allFiltersLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Filters');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    it('Validate duplicate filter name should not be accept using original filter name', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.editSelectedName(originalFilterServerName,0);
        POManage.editSelectedNameSave();
        expect(POManage.editableWarningId.getAttribute('popover')).toEqual('Filter name already exists');
    });
});