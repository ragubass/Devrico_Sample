/**
 * Created by ragu.s on 7/10/2015.
 * Manage - Data Management - Dependancy Messaging
 */
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POHelper = new HelperPO();
var POManage = new ManagePO();
/**
 * Declared path name contains dependancy to delete
 */
var dependencyPathName = "0004 AdminAuto Path";

/**
 * Declared filter name contains dependancy to delete
 */
var dependencyFilterName = "02 Admin Auto Filter";

describe('Manage - Data Management - Dependancy Messaging', function () {
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
    it('To data management link click', function () {
        POManage.clickDataManagement();
        expect(POManage.checkDataMgtText()).toEqual('Data Management');
    });
    it('Paths link click', function () {
        POManage.tabPathsContent.selectPathsTab();
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
    it('To select the paths and delete and validate the delete window model', function () {
        POManage.validateSelectedName(dependencyPathName);
        POManage.selectDataTableCheckBoxItem(0, 1);
        POManage.clickDeleteLink();
        expect(POManage.deleteWindowModal_Message.getText()).toEqual('Selected paths will be deleted. Do you want to continue?');
        expect(POManage.deleteWindowModal_ContinueButton.getText()).toEqual('Continue');
        expect(POManage.deleteWindowModal_CloseButton.getText()).toEqual('Close');
        POManage.clickDeleteWindowModal_ContinueButton();
    });
    it('Validate the delete paths window model dependancy messaging modal', function() {
        expect(POManage.deleteWindowModal_Message.getText()).toEqual('Selected paths have dependencies and cannot be deleted until the dependencies are removed.');
        expect(POManage.checkDependancyWindowModal_TableHeaders(0)).toContain('Name');
        expect(POManage.checkDependancyWindowModal_TableHeaders(1)).toContain('Type');
        expect(POManage.checkDependancyWindowModal_TableHeaders(2)).toContain('Path Name');
        expect(POManage.deleteWindowModal_CloseButton.getText()).toEqual('Close');
        POManage.clickDeleteWindowModal_CloseButton();
    });
    it('Filters link click', function () {
        POManage.tabFiltersContent.selectFiltersTab();
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
    it('To select the filters and delete and validate the delete window model', function () {
        POManage.validateSelectedName(dependencyFilterName);
        POManage.selectDataTableCheckBoxItem(0, 1);
        POManage.clickDeleteLink();
        expect(POManage.deleteWindowModal_Message.getText()).toEqual('Selected filters will be deleted. Do you want to continue?');
        expect(POManage.deleteWindowModal_ContinueButton.getText()).toEqual('Continue');
        expect(POManage.deleteWindowModal_CloseButton.getText()).toEqual('Close');
        POManage.clickDeleteWindowModal_ContinueButton();
    });
    it('Validate the delete filters window model dependancy messaging modal', function() {
        expect(POManage.deleteWindowModal_Message.getText()).toEqual('Selected filters have dependencies and cannot be deleted until the dependencies are removed.');
        expect(POManage.checkDependancyWindowModal_TableHeaders(0)).toContain('Name');
        expect(POManage.checkDependancyWindowModal_TableHeaders(1)).toContain('Type');
        expect(POManage.checkDependancyWindowModal_TableHeaders(2)).toContain('Filter Name');
        expect(POManage.deleteWindowModal_CloseButton.getText()).toEqual('Close');
        POManage.clickDeleteWindowModal_CloseButton();
    });
});