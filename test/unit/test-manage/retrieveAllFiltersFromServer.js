/**
 * Created by ragu.s on 4/13/2015.
 *
 * Manage - Retrive all filters from server
 */

var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var sharedSetup = require('../../../core/sharedSetup');
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var ManagePO = require('../../../pageObject/module-manage/managePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POManage = new ManagePO();
var POHelper = new HelperPO();

describe('Manage - Retrieve all filters from server', function () {
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
        expect(POManage.searchTextbox.getAttribute('placeholder')).toEqual('Search Filters...');
    });
    xit('My Filters tab - Layer Editor Data Table displays correct headers on load', function () {
        //TODO: once create filter feature developed this will work
        expect(POManage.Manage_tabLayers_DataTable.getHeaderCount()).toEqual(8);
        POManage.selectDataTableCheckBoxItem(0, 2);
        POManage.selectDataTableCheckBoxItem(0, 2);
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(1)).toEqual('Filter Name');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(2)).toEqual('Tags');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(3)).toEqual('Filter Type');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(4)).toEqual('Data Layer');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(5)).toEqual('Last Updated');
    });

    xit('My Filters name column values', function () {
        //TODO: once create filter feature developed this will work
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(25)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(29)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(33)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(37)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(41)).toBe(true);
    });

    xit('My Filters type column values', function () {
        //TODO: once create filter feature developed this will work
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(26)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(30)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(34)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(38)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(42)).toBe(true);
    });

    xit('My Filters Data layer column values', function () {
        //TODO: once create filter feature developed this will work
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(27)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(31)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(35)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(39)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(43)).toBe(true);
    });

    xit('My Filters Last Updated column values', function () {
        //TODO: once create filter feature developed this will work
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(28)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(32)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(36)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(40)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(44)).toBe(true);
    });

    it('All Filters tab - Layer Editor Data Table displays correct headers on load', function () {
        POManage.tabFiltersContent.clickAllFiltersLink();
        expect(POManage.Manage_tabLayers_DataTable.getHeaderCount()).toEqual(9);
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(1)).toEqual('Filter Name');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(2)).toEqual('Tags');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(3)).toEqual('Filter Type');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(4)).toEqual('Data Layer');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(5)).toEqual('Created By');
        expect(POManage.Manage_tabLayers_DataTable.getHeaderText(6)).toEqual('Last Updated');
    });

    it('All Filters name column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(27)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(34)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(41)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(48)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(56)).toBe(true);
    });

    it('All tags column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(28)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(35)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(42)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(49)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(57)).toBe(true);
    });

    it('All Filters type column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(30)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(37)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(44)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(52)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(60)).toBe(true);
    });

    it('All Filters Data layer column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(31)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(38)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(45)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(53)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(61)).toBe(true);
    });

    it('All Filters Created by column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(32)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(39)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(46)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(54)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(62)).toBe(true);
    });

    it('All Filters Last Updated column values', function () {
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(33)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(40)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(47)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(55)).toBe(true);
        expect(POManage.Manage_tabLayers_DataTable.getCellTextIsDisplayed(63)).toBe(true);
    });
});

