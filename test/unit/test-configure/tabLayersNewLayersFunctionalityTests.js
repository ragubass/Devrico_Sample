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

xdescribe('Configure - Tab Layers - New Layer Functionality Tests', function () {
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

    xdescribe('Layer Modal - Validate Base Layer Drop Down List :: Toggle between Base Layer and Transform Layer', function () {
        it('should Open Modal and validate its there', function () {
            POConfigure.clickNewLayerBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that \'Base Layer\' is default and selected', function () {
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
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

        it('should Validate that \'Transform Layer\' fields are not displayed within \'Base Layer\'', function () {
            expect(POConfigure.newLayerModal_Transform_OrderingTypeCbo.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_Available.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_AddBtn.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_RemoveBtn.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_Selected.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_NameTxt.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_TimeValueTxt.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_UnlimitedTxt.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_AddBtn.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Transform_MergeKey_DataGrid.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Transform_Transforms_NewCbo.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Transform_Transforms_DataGrid.isDisplayed()).toBeFalsy();
        });

        it('should Validate that \'Transform Layer\' in dropdown and select it', function () {
            POHelper.selectDropdownbyOption(POConfigure.newLayerModal_LayerTypeCbo, 'Transform Layer');
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Transform Layer');
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

        it('should Validate that \'Transform Layer\' fields are displayed', function () {
            expect(POConfigure.newLayerModal_Transform_OrderingTypeCbo.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_Available.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_AddBtn.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_RemoveBtn.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_Selected.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_NameTxt.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_TimeValueTxt.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_UnlimitedTxt.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_AddBtn.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_MergeKey_DataGrid.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_Transforms_NewCbo.isDisplayed()).toBeTruthy();
            expect(POConfigure.newLayerModal_Transform_Transforms_DataGrid.isDisplayed()).toBeTruthy();
        });

        it('should Validate that \'Base Layer\' fields are not displayed within \'Transform Layer\'', function () {
            expect(POConfigure.newLayerModal_Base_SimpleBaseIngestionChk.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_LayerDesc.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVKAvaliable.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVKSelected.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVKAddBtn.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVKCreateBtn.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerVKRemoveBtn.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_LayerFilesAvailableSearch.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_LayerFilesAvailableSelect.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_addPDIFileBtn.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_removePDIFilesBtn.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_uploadPDIFilesBtn.isDisplayed()).toBeFalsy();
            //expect(POConfigure.newLayerModal_Base_LayerFilesSelected.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_editConfigBtn.isDisplayed()).toBeFalsy();
        });

        it('should Close modal and validate close', function () {
            POHelper.selectDropdownbyOption(POConfigure.newLayerModal_LayerTypeCbo, 'Base Layer');
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
            POConfigure.tabLayers_LayerModal.clickModalBackBtn();
            POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
        });
    });

    xdescribe('Layer Modal - Validate New Base Layer :: Blank New Base Layer form and Validate Required Fields', function () {
        it('should Open Modal and validate its there', function () {
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
            POConfigure.clickNewLayerBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate save of empty Base Layer not saved', function () {
            POConfigure.tabLayers_LayerModal.clickModalSaveBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that \'Base Layer\' is default and selected', function () {
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
            expect(POConfigure.newLayerModal_Transform_OrderingTypeCbo.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_SimpleBaseIngestionChk.isDisplayed()).toBeTruthy();
        });

        it('should Validate that Layer Name has popover messages and is required', function () {
            expect(POConfigure.newLayerModal_LayerName.getAttribute('popover')).toBe('Please enter Layer name');
            expect(POConfigure.newLayerModal_LayerName.getAttribute('required')).toEqual('true');
            POConfigure.newLayerModal_LayerName.click();
            expect(POConfigure.formPopover.isDisplayed()).toBeTruthy();
            expect(POConfigure.formPopover.getAttribute('content')).toBe('Please enter Layer name');
        });

        it('should Close modal and validate close', function () {
            POConfigure.tabLayers_LayerModal.clickModalBackBtn();
            POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
        });
    });

    xdescribe('Layer Modal - Create A New Base Layer :: Basic Base Layer', function () {
        var configText = "#!/bin/sh\n\n# Basic\ndeployment=auto'\nbase_source=newBaseLayer2\nsource_system=\"${deployment}-${base_source}\"\n\n# Email\nemail_address='qa-test@clickfox.com'\n\nfile_transfer=\\n'/home/cf/upload/demo/ClickFox_extract_TMSU_${date}.dat.gz'\n#PDI_VERSION=5.5\n\n# daily_processing\nsingle_day=1\ncallvolume_threshold=0\nremote_host='cf-04-3-13'\n\n#validate_only='-v'\nsession_type='json'\n\n# process_script\nprocess_script=\"${base_dir}/common/raw2cf-process.sh\"\n\nvalidate_files=\\n'${base_dir}/logs/raw/ClickFox_extract_TMSU_${date}.dat.gz'\n\nraw_cleanup_days=90\ncsl_cleanup_days=90\njson_cleanup_days=90";

        it('should Open Modal and validate its there', function () {
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
            POConfigure.clickNewLayerBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that \'Base Layer\' is default and selected', function () {
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
            expect(POConfigure.newLayerModal_Transform_OrderingTypeCbo.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_SimpleBaseIngestionChk.isDisplayed()).toBeTruthy();
        });

        it('should Create new layer information', function () {
            POHelper.selectDropdownbyOption(POConfigure.newLayerModal_LayerTypeCbo, 'Base Layer');
            POConfigure.newLayerModal_LayerName.sendKeys('auto-newBaseLayer2');
            POHelper.setCheckboxTo(POConfigure.newLayerModal_LayerVisibilityChkLoc, true);
            //POConfigure.newLayerModal_LayerDays.sendKeys('1'); TODO:This doesn't work but default is 1
            POHelper.selectDropdownbyOption(POConfigure.newLayerModal_LayerTimezoneCbo, 'America/Denver');
            POConfigure.newLayerModal_Base_LayerVisitorKeys.sendKeys('accountnum');
            POConfigure.newLayerModal_Base_LayerDesc.sendKeys('Test automation of creating a base layer. Removable.');
        });

        it('should validate layer information', function () {
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
            expect(POConfigure.newLayerModal_LayerName.getAttribute('value')).toBe('auto-newBaseLayer2');
            expect(POConfigure.newLayerModal_LayerDays.getAttribute('value')).toBe('1');
            expect(POConfigure.newLayerModal_LayerVisibilityChk.isSelected()).toBeTruthy();
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTimezoneCbo)).toBe('America/Denver');
            expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.getAttribute('value')).toBe('accountnum');
            expect(POConfigure.newLayerModal_Base_LayerDesc.getAttribute('value')).toBe('Test automation of creating a base layer. Removable.');
        });

        it('should Add text to Edit Configuration', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            POConfigure.newLayerModal_ConfigEditor_TextBox.sendKeys(configText);
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual(configText);
        });

        it('should Validate text saved and popup closed', function () {
            POConfigure.tabLayers_LayerModal.clickEditConfigSaveBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Save Data', function () {
            expect(POConfigure.newLayerModal_LayerSaveBtn.isPresent()).toBeTruthy();
            POConfigure.newLayerModal_LayerSaveBtn.click();
        });

        xit('should Validate that layer \'auto-newBaseLayer2\' has been created', function () {
            //TODO: once delete funtionality is working fine this will work
            POConfigure.tabLayerSearchBox.sendKeys('auto-newBaseLayer2');
            expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(1);
            expect(POConfigure.tabLayers_DataTable.getCellText(0, 0)).toEqual('auto-newBaseLayer2');
            POConfigure.tabLayers_DataTable.clickDataRow(0, 0);
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that layer \'auto-newBaseLayer2\' data was saved', function () {
            expect(POConfigure.newLayerModal_LayerName.getAttribute('value')).toBe('auto-newBaseLayer2');
            expect(POConfigure.newLayerModal_LayerDays.getAttribute('value')).toBe('1');
            expect(POConfigure.newLayerModal_LayerVisibilityChk.isSelected()).toBeTruthy();
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTimezoneCbo)).toBe('America/Denver');
            expect(POConfigure.newLayerModal_Base_LayerVisitorKeys.getAttribute('value')).toBe('accountnum');
            expect(POConfigure.newLayerModal_Base_LayerDesc.getAttribute('value')).toBe('Test automation of creating a base layer. Removable.');
        });

        it('should Edit Configuration - Validate that popup opens and text was saved', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual(configText);
        });

        it('should Edit Configuration - Close Config Popup', function () {
            POConfigure.tabLayers_LayerModal.clickEditConfigCancelBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Close modal and validate close', function () {
            POConfigure.tabLayers_LayerModal.clickModalBackBtn();
            POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
            POConfigure.tabLayerSearchBox.clear();
        });

        xit('should Delete layer \'auto-newBaseLayer2\'', function () {
            //TODO: once create filter feature developed this will work
            expect(POHelper.deleteLayerAPI('auto-newBaseLayer2')).toBe(204);
        });

        it('should Refresh page to get current data', function () {
            browser.driver.navigate().refresh();
            expect(POConfigure.pageHeader.isPresent()).toBeTruthy();
            expect(POConfigure.pageHeader.getText()).toBe('Configure');
        });

        xit('should Validate that layer \'auto-newBaseLayer2\' has been deleted', function () {
            //TODO: once create filter feature developed this will work
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
            POConfigure.tabLayerSearchBox.sendKeys('auto-newBaseLayer2');
            expect(POConfigure.tabLayers_DataTable.checkTableRows()).toEqual(0);
            POConfigure.tabLayerSearchBox.clear();
        });
    });

    xdescribe('Layer Modal - Validate Edit Configuration Functionality', function () {
        var configText = "#!/bin/sh\n\n# Basic\ndeployment=demo\nbase_source=baseweb\nsource_system=\"${deployment}-${base_source}\"\n\n# Email\nemail_address='qa-test@clickfox.com'\n\nfile_transfer=\\n'/home/cf/upload/demo/ClickFox_extract_TMSU_${date}.dat.gz'\n#PDI_VERSION=5.5\n\n# daily_processing\nsingle_day=1\ncallvolume_threshold=0\nremote_host='cf-04-3-13'\n\n#validate_only='-v'\nsession_type='json'\n\n# process_script\nprocess_script=\"${base_dir}/common/raw2cf-process.sh\"\n\nvalidate_files=\\n'${base_dir}/logs/raw/ClickFox_extract_TMSU_${date}.dat.gz'\n\nraw_cleanup_days=90\ncsl_cleanup_days=90\njson_cleanup_days=90";

        it('should Open Modal and validate its there', function () {
            POConfigure.clickNewLayerBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that \'Base Layer\' is default and selected', function () {
            expect(POHelper.getDropdownText(POConfigure.newLayerModal_LayerTypeCbo)).toBe('Base Layer');
            expect(POConfigure.newLayerModal_Transform_OrderingTypeCbo.isDisplayed()).toBeFalsy();
            expect(POConfigure.newLayerModal_Base_SimpleBaseIngestionChk.isDisplayed()).toBeTruthy();
        });

        it('should Validate that Edit Configuration button opens popup and cancel does not save', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            POConfigure.newLayerModal_ConfigEditor_TextBox.sendKeys(configText);
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual(configText);
        });

        it('should Validate that cancel button closes popup', function () {
            POConfigure.tabLayers_LayerModal.clickEditConfigCancelBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that Edit Configuration does not have text', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual('');
        });

        it('should Validate that cancel button closes popup', function () {
            POConfigure.tabLayers_LayerModal.clickEditConfigCancelBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Add text to Edit Configuration', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            POConfigure.newLayerModal_ConfigEditor_TextBox.sendKeys(configText);
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual(configText);
        });

        it('should Validate text saved and popup closed', function () {
            POConfigure.tabLayers_LayerModal.clickEditConfigSaveBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Validate that popup opens and text was saved', function () {
            POConfigure.tabLayers_LayerModal.clickModalEditConfigBtn();
            POHelper.changeFocusPopup();
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.isPresent()).toBeTruthy();
            expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/editConfig');
            expect(POConfigure.newLayerModal_ConfigEditor_TextBox.getAttribute('value')).toEqual(configText);
        });

        it('should Validate that text was removed, saved and closed', function () {
            POConfigure.newLayerModal_ConfigEditor_TextBox.clear();
            POConfigure.tabLayers_LayerModal.clickEditConfigSaveBtn();
            POHelper.changeFocusMain();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeTruthy();
        });

        it('should Close modal and validate close', function () {
            POConfigure.tabLayers_LayerModal.clickModalBackBtn();
            POConfigure.tabLayers_LayerModal.clickNewLayerModalContinueBtn();
            expect(POConfigure.newLayerModal_Modal.isDisplayed()).toBeFalsy();
        });
    });

});