/**
 * Created by ckoerber on 5/10/15.
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
var POHelper = new HelperPO();
var POLandingPage = new LandingPagePO();
var POConfigure = new ConfigurePO();

xdescribe('Configure - Tab Layers - Edit Layer', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBeTruthy();
    });

    it('Close Modal and Check if Configure Module is Visible and Select it', function () {
        POLandingPage.clickModConfigure();
        expect(POConfigure.pageHeader.isPresent()).toBeTruthy();
        expect(POConfigure.pageHeader.getText()).toBe('Configure');
    });

    it('Tab Layers - Search for ivr3 then click layer name for modal', function () {
        POConfigure.tabLayerSearchBox.sendKeys('ivr3');
        expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(1);
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