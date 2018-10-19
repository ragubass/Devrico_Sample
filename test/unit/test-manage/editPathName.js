/**
 * Created by Saravanan.K on 5/20/2015.
 */
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POLandingPage = new LandingPagePO();
var POManage = new ManagePO();
/**
 * Declared originalPathServerName for the Edit Path Name
 */
var originalPathServerName ='Path Name New 3';
/**
 * Declared test Variable originalPathServerName for the Edit Path Name
 */
var testPathServerName = 'Auto Path Test 100';
describe('Manage - Edit Path Name & save to the Server', function () {
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
    it('Check to make sure we are move to PathsTab', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Paths...');
    });
    it('Check to make sure Path name is editable using test path name', function () {
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(originalPathServerName);
        POManage.editSelectedName(testPathServerName,0);
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
    it('Check to make sure we are move PathsTab', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Paths...');
    });
    it('Check to make sure Path name is editable for save Path name using test path name', function () {
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(originalPathServerName);
        POManage.editSelectedName(testPathServerName,0);
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
    it('Validate edited the Path name should be saved to the server using test path name', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Path');
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(testPathServerName);
        expect(POManage.selectedNamesLink.getText()).toContain(testPathServerName);
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
    it('Check to make sure we are move viewsTab and PathsTab', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Paths...');
    });
    it('Validate duplicate Path name should not be accept using test path name', function () {
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.editSelectedName(testPathServerName,0);
        POManage.editSelectedNameSave();
        expect(POManage.editableWarningId.getAttribute('popover')).toEqual('Path name already exists');
    });
    it('Check to make sure we are move to PathsTab', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Paths...');
    });
    it('Check to make sure Path name is editable using original path name', function () {
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(testPathServerName);
        POManage.editSelectedName(originalPathServerName,0);
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
    it('Check to make sure we are move PathsTab', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Paths...');
    });
    it('Check to make sure path name is editable for save Path name using original path name', function () {
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(testPathServerName);
        POManage.editSelectedName(originalPathServerName,0);
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
    it('Validate edited the Path name should be saved to the server using original path name', function () {
        POManage.tabPathsContent.selectPathsTab();
        expect(POHelper.hasClass(POManage.manageTabViews,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabFilters,'active')).toBe(false);
        expect(POHelper.hasClass(POManage.manageTabPaths,'active')).toBe(true);
        expect(POHelper.hasClass(POManage.manageTabDataLayers,'active')).toBe(false);
        expect(browser.getCurrentUrl()).toMatch('/manage/data-management/paths');
        expect(POManage.allPathsLink.isPresent()).toBeTruthy();
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(3);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Manage');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Data Management');
        expect(POHeader.breadcrumbs.getCrumbText(2)).toBe('Paths');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/manage');
        expect(POHeader.breadcrumbs.getCrumbHref(1)).toBe(POHelper.ceaEnterpriseHref() + '/manage/data-management');
        expect(POManage.searchTextbox.getAttribute('placeholder')).toContain('Search Path');
        POManage.tabPathsContent.clickAllPathsLink();
        POManage.validateSelectedName(originalPathServerName);
        expect(POManage.selectedNamesLink.getText()).toContain(originalPathServerName);
    });
});