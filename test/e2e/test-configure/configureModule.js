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

describe('Configure - Configure Module', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBeTruthy();
    });

    it('Close Modal and Check if Configure Module is Visible and Select it', function () {
        POLandingPage.clickModConfigure();
        expect(POConfigure.pageHeader.isPresent()).toBe(true);
        expect(POConfigure.pageHeader.getText()).toBe('Configure');
    });

    it('Check initial breadcrumb text', function () {
        expect(POHeader.breadcrumbs.getCrumbCount()).toBe(2);
        expect(POHeader.breadcrumbs.getCrumbText(0)).toBe('Configure');
        expect(POHeader.breadcrumbs.getCrumbText(1)).toBe('Layers');
        expect(POHeader.breadcrumbs.getCrumbHref(0)).toBe(POHelper.ceaEnterpriseHref() + '/configure');
    });

    it('Use breadcrumbs to go to home, then back to configure', function () {
        POHeader.breadcrumbs.clickHome();
        expect(POLandingPage.moduleConfigure.isPresent()).toBeTruthy();
        POLandingPage.clickModConfigure();
        expect(POConfigure.pageHeader.isPresent()).toBeTruthy();
        expect(POConfigure.pageHeader.getText()).toBe('Configure');
        POHeader.breadcrumbs.clickCrumb(0);
        expect(POConfigure.pageHeader.isPresent()).toBeTruthy();
        expect(POConfigure.pageHeader.getText()).toBe('Configure');
    });

    it('Tab Layers - Is default to active on module load', function () {
        expect(POHelper.hasClass(POConfigure.tabLayers, 'active')).toBe(true);
        expect(POHelper.hasClass(POConfigure.tabEvents, 'active')).toBe(false);
        expect(POHelper.hasClass(POConfigure.tabAttributes, 'active')).toBe(false);
    });

    xit('Tab Event - Content is shown when tab selected', function () {
        POConfigure.clickTabEvents();
        expect(POHelper.hasClass(POConfigure.tabLayers, 'active')).toBe(false);
        expect(POHelper.hasClass(POConfigure.tabEvents, 'active')).toBe(true);
        expect(POHelper.hasClass(POConfigure.tabAttributes, 'active')).toBe(false);
    });

    xit('Tab Attributes - Content is shown when tab selected', function () {
        POConfigure.clickTabAttributes();
        expect(POHelper.hasClass(POConfigure.tabLayers, 'active')).toBe(false);
        expect(POHelper.hasClass(POConfigure.tabEvents, 'active')).toBe(false);
        expect(POHelper.hasClass(POConfigure.tabAttributes, 'active')).toBe(true);
    });

    xit('Tab Layers - Content is shown when tab selected', function () {
        POConfigure.clickTabLayers();
        expect(POHelper.hasClass(POConfigure.tabLayers, 'active')).toBe(true);
        expect(POHelper.hasClass(POConfigure.tabEvents, 'active')).toBe(false);
        expect(POHelper.hasClass(POConfigure.tabAttributes, 'active')).toBe(false);
        //TODO: Add more tests to ensure elements are here on this tab
    });

    it('Tab Layers - Layer Editor Data Table displays correct headers on load', function () {
        //TODO: Layer Editor Defaulted
        expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
        expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
    });

    xit('Tab Layers - Visitor Key Matrix Data Table displays correct headers', function () {
        POConfigure.clickVkMatrixBtn();
        expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
        expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
        POConfigure.clickLayerEditorBtn();
    });

    it('Tab Layers - Layer Editor Data Table displays correct headers after switch', function () {
        //TODO: Layer Editor Defaulted
        expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
        expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
    });

    xit('Tab Layers - Validate count of data rows - **Dependant on data. Might start breaking soon**', function () {
        expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(11);
    });

    xit('Tab Layers - Validate data - **Dependant on data. Might start breaking soon**', function () {
        //Sort
        POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('ddbase');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 1)).toEqual('BASE');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 2)).toEqual('Darrin\'s Base Layer');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 0)).toEqual('ivr');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 1)).toEqual('BASE');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 2)).toEqual('ivr testing');
    });

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

    xit('Tab Layers - Test Column Menu - **Dependant on data. Might start breaking soon**', function () {
        POConfigure.tabLayers_DataTable.clickColumnMenu(0, 1);
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('web2-Copy');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 1)).toEqual('BASE');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 2)).toEqual('web2');
        POConfigure.tabLayers_DataTable.clickColumnMenu(0, 2);
    });

    xit('Tab Layers(VK) - Visitor Key Matrix Data Table displays correct headers after switch', function () {
        POConfigure.clickVkMatrixBtn();
        expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(5);
        expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Layer Name');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('accountnum');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('visitor.vk');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(3)).toEqual('accountnum1');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(4)).toEqual('accountnum2');
    });

    xit('Tab Layers(VK) - Validate count of data rows - **Dependant on data. Might start breaking soon**', function () {
        expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(12);
    });

    xit('Tab Layers(VK) - Validate data - **Dependant on data. Might start breaking soon**', function () {
        //Sort
        POConfigure.tabLayers_DataTable.clickHeaderColumn(0);
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('ddbase');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 1)).toEqual('true');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 2)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 3)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 4)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 0)).toEqual('ivr');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 1)).toEqual('true');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 2)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 3)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(2, 4)).toEqual('');
    });

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

    xit('Tab Layers(VK) - Test Column Menu - **Dependant on data. Might start breaking soon**', function () {
        POConfigure.tabLayers_DataTable.clickColumnMenu(0, 1);
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('web2-Copy');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 1)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 2)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 3)).toEqual('');
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 4)).toEqual('true');
        POConfigure.tabLayers_DataTable.clickColumnMenu(0, 2);
    });

    it('Tab Layers - Back to Layer Editor', function () {
        POConfigure.clickLayerEditorBtn();
        expect(POConfigure.tabLayers_DataTable.getHeaderCount()).toEqual(3);
        expect(POConfigure.tabLayers_DataTable.getHeaderText(0)).toEqual('Name');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(1)).toEqual('Type');
        expect(POConfigure.tabLayers_DataTable.getHeaderText(2)).toEqual('Description');
        POConfigure.tabLayerSearchBox.clear();
    });

    it('Tab Layers - Layer Modal - Open Modal and validate its there', function () {
        POConfigure.clickNewLayerBtn();
        expect(POConfigure.newLayerModal_Modal.isPresent()).toBeTruthy();
    });

    it('Tab Layers - Layer Modal - Verify form elements', function () {
        expect(POConfigure.newLayerModal_BackBtn.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Title.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Title.getText()).toBe('New Layer');
        expect(POConfigure.newLayerModal_LayerTypeCbo.isPresent()).toBeTruthy();
        expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
        //TODO: Add test for all options
        expect(POConfigure.newLayerModal_LayerName.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerDays.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerVisibilityChk.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerVisibilityChk.isSelected()).toBeFalsy();
        expect(POConfigure.newLayerModal_LayerTimezoneCbo.isPresent()).toBeTruthy();
        expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTimezoneCbo)).toBe('Select Time Zone');
        //TODO: Add test for all Timezones
        expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerDesc.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_addPDIFileBtn.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_removePDIFilesBtn.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_editConfigBtn.isPresent()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerSaveBtn.isPresent()).toBeTruthy();
    });

    it('Tab Layers - Layer Modal - Close modal and validate close', function () {
        POConfigure.tabLayers_LayerModal.clickModalBackBtn();
        POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
        expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
    });

    it('Tab Layers - Search for ivr3 then click layer name for modal', function () {
        POConfigure.tabLayerSearchBox.sendKeys('ivr3');
        expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(1);
        expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('ivr3');
        POConfigure.tabLayers_DataTable.clickDataRow(0, 0);
        expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
    });

    it('Tab Layers - Edit Layer - Validate \'ivr3\' Layer Information', function () {
        expect(POConfigure.newLayerModal_LayerName.getAttribute('value')).toBe('ivr3');
        expect(POConfigure.newLayerModal_LayerDays.getText()).toBeFalsy();
        expect(POConfigure.newLayerModal_LayerVisibilityChk.isSelected()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerTimezoneCbo.isPresent()).toBeTruthy();
        expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTimezoneCbo)).toBe('America/Denver');
        expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.getAttribute('value')).toBe('accountnum');
        expect(POConfigure.newLayerModal_Base_LayerDesc.getAttribute('value')).toBe('This Layer contain session data that has been MODIFIED from the original session files to accommodate specific test scenarios.');
    });

    it('Tab Layers - Layer Modal - Close modal and validate close', function () {
        POConfigure.tabLayers_LayerModal.clickModalBackBtn();
        POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
        expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
        POConfigure.tabLayerSearchBox.clear();
    });
});