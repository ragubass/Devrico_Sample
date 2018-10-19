/**
 * Created by ragu.s on 6/11/2015.
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
 * Declared originalFilterServerName for the Edit Filter Name
 */
var duplicateFilterName = "AutoFitFilter3";
/**
 * Declared test Variable originalFilterServerName for the Edit Filter Name
 */
var testFilterServerName = "AutoFitFilter3";
describe('Manage - Error Message received when duplicate filter name save is attempted and not allowed', function () {
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
    it('Check to sure duplicate filter name throws error message', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        POManage.validateSelectedName(testFilterServerName);
        POManage.editSelectedName(duplicateFilterName, 0);
        POManage.editSelectedNameSave();
        expect(POManage.errorMessageText.getText()).toEqual('Filter name already in use');
    });
});
