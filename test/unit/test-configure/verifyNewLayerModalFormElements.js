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

xdescribe('Configure - Tab Layers - New Layer modal', function () {
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

    it('Tab Layers - Layer Modal - Open Modal and validate its there', function () {
        POConfigure.clickNewLayerBtn();
        expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
    });

    it('should Validate that common fields are displayed', function () {
        expect(POConfigure.newLayerModal_LayerTypeCbo.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerName.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerDays.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerVisibilityChk.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerTimezoneCbo.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_LayerSaveBtn.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_BackBtn.isDisplayed()).toBeTruthy();
    });

    it('should Validate that \'Base Layer\' fields are displayed', function () {
        expect(POConfigure.newLayerModal_Base_SimpleBaseIngestionChk.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerDesc.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.isDisplayed()).toBeTruthy();
        //expect(POConfigure.newLayerModal_Base_LayerVKAvaliable.isDisplayed()).toBeTruthy();
        //expect(POConfigure.newLayerModal_Base_LayerVKSelected.isDisplayed()).toBeTruthy();
        //expect(POConfigure.newLayerModal_Base_LayerVKAddBtn.isDisplayed()).toBeTruthy();
        //expect(POConfigure.newLayerModal_Base_LayerVKCreateBtn.isDisplayed()).toBeTruthy();
        //expect(POConfigure.newLayerModal_Base_LayerVKRemoveBtn.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerFilesAvailableSearch.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerFilesAvailableSelect.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_addPDIFileBtn.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_removePDIFilesBtn.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_uploadPDIFilesBtn.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_LayerFilesSelected.isDisplayed()).toBeTruthy();
        expect(POConfigure.newLayerModal_Base_editConfigBtn.isDisplayed()).toBeTruthy();
    });

    it('Tab Layers - Layer Modal - Close modal and validate close', function () {
        POConfigure.tabLayers_LayerModal.clickModalBackBtn();
        POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
        expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
    });
});