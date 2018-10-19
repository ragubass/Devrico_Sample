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

    describe('Validate User can search Layer Editor data table', function () {
        it('Verify Layer Editor selected', function () {
            expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
            expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
            expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
            expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
        });

        describe('Search data', function () {
            it('Tab Layers - Search for ivr then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('ivr');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("ivr");
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 1)).toEqual('BASE');
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });

            it('Tab Layers - Search for web then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('web');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("web");
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 1)).toEqual('BASE');
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });


            it('Tab Layers - Search for single character \'2\' then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('2');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("2");
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });

            it('Tab Layers - Search for no result \'~\' then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('~');
                expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(0);
                expect(POConfigure.tabLayerSearchMsg.getText()).toEqual('Search term(s) not found, please try again.');
                POConfigure.tabLayerSearchBox.clear();
            });

        });


    });

    describe('Validate User can search Visitor Key Matrix data table', function () {
        it('Switch to Visitor Key Matrix and Verify it is present', function () {
            POConfigure.clickVkMatrixBtn();
            expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
        });

        describe('Search Tests', function () {
            it('Tab Layers(VK) - Search for ivr then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('ivr');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("ivr");
                        //TODO: When stable know what vk a layer should have
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 1)).toEqual('true');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 2)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 3)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 4)).toEqual('');
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });

            it('Tab Layers(VK) - Search for web then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('web');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("web");
                        //TODO: When stable know what vk a layer should have
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 1)).toEqual('true');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 2)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 3)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 4)).toEqual('');
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });


            it('Tab Layers(VK) - Search for single character \'2\' then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('2');
                POConfigure.tabLayers_DataTable.checkTableRows().then(function (tableRows) {
                    for (var i = 0; i < tableRows; i++) {
                        expect(POConfigure.tabLayers_DataTable.getCellText(i, 0)).toContain("2");
                        //TODO: When stable know what vk a layer should have
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 1)).toEqual('true');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 2)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 3)).toEqual('');
                        //expect(POConfigure.tabLayers_DataTable.getCellText(i, 4)).toEqual('');
                    }
                });
                POConfigure.tabLayerSearchBox.clear();
            });

            it('Tab Layers(VK) - Search for no result \'~\' then check data', function () {
                POConfigure.tabLayerSearchBox.sendKeys('~');
                expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(0);
                expect(POConfigure.tabLayerSearchMsg.getText()).toEqual('Search term(s) not found, please try again.');
                POConfigure.tabLayerSearchBox.clear();
                POConfigure.tabLayers_DataTable.clickColumnMenu(0, 2);
            });
        });
    });
});