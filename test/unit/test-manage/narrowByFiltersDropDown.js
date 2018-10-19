/**
 * Created by ragu.s on 6/16/2015.
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

describe('Manage - Narrow by filters dropdown', function () {
    sharedSetup.sharedSetupAll('/');
    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });
    it('Check if module is visible and select it', function () {
        POLandingPage.clickModManage();
        expect(POManage.checkDataMgtText()).toEqual('Manage');
    });
    it('Data management link click', function () {
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
    it('Filters narrow by dropdown validation',function(){
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,0);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('All Filter Types');
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,1);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('cddFilter');
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,2);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('stateFilter');
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,3);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('tasksFilter');
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,4);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('timeInTaskFilter');
        POHelper.selectDropdownbyNum(POManage.dropDownOptions,5);
        expect(POHelper.getDropdownText(POManage.dropDownOptions)).toEqual('utteranceFilter');
    });
});