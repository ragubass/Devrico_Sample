/**
 * Created by ckoerber on 4/14/15.
 */
//Shared Elements
var env = require('../../../config/env.js');
var user = require('../../../core/CEAUserList');
var felement = require('../../../core/foxyElement');
var sharedSetup = require('../../../core/sharedSetup');
var using = require('../../../util/using');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var ConfigurePO = require('../../../pageObject/module-configure/configurePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POConfigure = new ConfigurePO();
var POHelper = new HelperPO();

describe('Configure - Tab Layers', function () {
    sharedSetup.sharedSetupAll('/');
    describe('Pre-test - Login and Navigation', function () {
        it('Check to make sure we are logged in', function () {
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
            expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
            expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
            expect(POHeader.logoutLink.isPresent()).toBe(true);
        });

        it('Close Modal and Check if Configure Module is Visible and Select it', function () {
            POLandingPage.clickModConfigure();
            expect(POConfigure.pageHeader.isPresent()).toBe(true);
            expect(POConfigure.pageHeader.getText()).toBe('Configure');
        });
    });

    describe('Validate User can sort Layer Editor data table', function () {
        it('Verify Layer Editor selected', function () {
            expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
            expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
            expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
            expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
        });

        describe('Sort for column \'Name\'', function () {
            it('Sort name column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort name column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide name column from drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });

            xit('Hide name column from data table menu', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });
        });

        describe('Sort for column \'Type\'', function () {
            it('Sort type column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort type column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide type column from drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });

            xit('Hide type column from data table menu', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });
        });

        describe('Sort for column \'Description\'', function () {
            it('Sort description column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort description column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide description column from drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Description');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });

            xit('Hide description column from data table menu', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Description');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(2);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Description');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
            });
        });
    });

    describe('Validate User can sort Visitor Key Matrix data table', function () {
        it('Switch to Visitor Key Matrix and Verify it is present', function () {
            POConfigure.clickVkMatrixBtn();
            expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
        });

        describe('Sort for column \'Layer Name\'', function () {
            it('Sort Layer Name column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort Layer Name column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(0, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide Layer Name column from drop-down **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });

            xit('Hide Layer Name column from data table menu **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });
        });

        describe('Sort for column \'accountnum\'', function () {
            it('Sort \'accountnum\' column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort \'accountnum\' column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(1, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide \'accountnum\' column from drop-down **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickColumnMenu(1, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });

            xit('Hide \'accountnum\' column from data table menu **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });
        });

        describe('Sort for column \'visitor.vk\'', function () {
            it('Sort \'visitor.vk\' column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort \'visitor.vk\' column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(2, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide \'visitor.vk\' column from drop-down **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickColumnMenu(2, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });

            xit('Hide \'visitor.vk\' column from data table menu **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });
        });

        describe('Sort for column \'accountnum1\'', function () {
            it('Sort \'accountnum1\' column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(3);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(3);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(3);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort \'accountnum1\' column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(3, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(3, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(3, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(3, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide \'accountnum1\' column from drop-down **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickColumnMenu(3, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });

            xit('Hide \'accountnum1\' column from data table menu **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });
        });

        describe('Sort for column \'accountnum2\'', function () {
            it('Sort \'accountnum2\' column by clicking column heading', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(4);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(4);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickHeaderColumn(4);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            it('Sort \'accountnum2\' column from the drop-down', function () {
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'none')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(4, 0);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'asc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(4, 1);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'desc')).toBe(true);
                POConfigure.tabLayers_DataTable.clickColumnMenu(4, 2);
                expect(POConfigure.tabLayers_DataTable.checkColumnSort(4, 'none')).toBe(true);
                //TODO: Need stable env first. The list items will reflect the sort order and column heading will display the correct arrow for sort order or no arrow for no order.
            });

            xit('Hide \'accountnum2\' column from drop-down **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickColumnMenu(4, 3);
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum2');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });

            xit('Hide \'accountnum2\' column from data table menu **Dependant on data**', function () {
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum2');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(4);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                POConfigure.tabLayers_DataTable.clickDataTableMenu('accountnum2');
                expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
                expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
                expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
            });
        });
    });
});