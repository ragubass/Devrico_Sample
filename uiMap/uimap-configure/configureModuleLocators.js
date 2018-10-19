/**
 * Created by ckoerber on 4/15/15.
 */
module.exports = {
    formPopover: by.css('.popover'),
    configureMain: by.css('.configure-main'),
    configureHeader: by.css('.main-view section div.container-fluid h3'),
    configureTabLayers: by.css('#config-layers'),
    configureTabLayersLink: by.css('#config-layers a'),
    configureTabEvents: by.css('#config-events'),
    configureTabEventsLink: by.css('#config-events a'),
    configureTabAttributes: by.css('#config-attributes'),
    configureTabAttributesLink: by.css('#config-attributes a'),
    configureTabLayers_SearchBox: by.model('searchText'),
    configureTabLayers_SearchMsg: by.css('.configure-main .cf-data-table .cf-dt-filter-bar p'),
    configureTabLayers_NewLayerBtn: by.css('#config-new-layer'),
    configureTabLayers_LayerEditorBtn: by.css('#config-layer-editor'),
    configureTabLayers_VisitorKeyMatrixBtn: by.css('#config-visitor-key-matrix'),
    configureDataTable: by.css('.configure-main .cf-data-table-grid'),

    //Data Table Menu
    configureDataTableMenu: by.css('.configure-main .cf-data-table-grid > div.ui-grid-menu-button'),
    configureDataTableMenuBtn: by.css('.configure-main .cf-data-table-grid > div.ui-grid-menu-button .ui-grid-icon-container i.ui-grid-icon-menu'),
    configureDataTableMenuOptionsContainer: by.css('.configure-main .cf-data-table-grid > div.ui-grid-menu-button div.ui-grid-menu'),
    configureDataTableMenuOptions: by.repeater('item in menuItems'),
    configureDataTableHeader: by.repeater('col in colContainer.renderedColumns'),
    configureDataTableHeaderCell: by.css('span.ng-binding'),

    //Column Menus
    configureDataTableColumnMenu: by.css('.ui-grid-column-menu-button i.ui-grid-icon-angle-down'),
    configureDataTableColumnMenuOptions: by.repeater('item in menuItems'),
    configureDataTableDataRow: by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows'),
    configureDataTableDataColumn: by.repeater('(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name'),

    //New Layer Modal and Configuration
    newLayerModal_Modal: by.className('cf-modal-dialog'),
    newLayerModal_BackBtn: by.id('modal-back'),
    newLayerModal_Title: by.id('cf-modal-title'),
    newLayerModal_LayerTypeCbo: by.id('new-layer-type'),
    newLayerModal_LayerName: by.id('new-layer-name'),
    newLayerModal_LayerDays: by.id('new-layer-days'),
    newLayerModal_LayerVisibilityChk: by.id('new-layer-visibility'),
    newLayerModal_LayerTimezoneCbo: by.id('new-layer-time-zone'),
    newLayerModal_LayerSaveBtn: by.id('new-layer-save'),

    //Base Layer
    newLayerModal_Base_SimpleBaseIngestionChk: by.id('new-layer-simple-base-ingestion'),
    newLayerModal_Base_LayerDesc: by.id('new-layer-description'),
    newLayerModal_Base_LayerVisitorKeys: by.id('new-layer-visitor-keys'), //TODO: Old Method. Remove
    newLayerModal_Base_LayerVKAvaliable: by.id('visitorKeysLeft'),
    newLayerModal_Base_LayerVKAvaliableSearch: by.css('#visitorKeysLeft #cf-dt-search-bar input.search-input'),
    newLayerModal_Base_LayerVKAvaliableDataRow: by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows'),
    newLayerModal_Base_LayerVKAvaliableDataColumn: by.repeater('(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name'),
    newLayerModal_Base_LayerVKAvaliableDataCell: by.css('span.ng-binding'),
    newLayerModal_Base_LayerVKSelected: by.id('visitorKeysRight'),
    newLayerModal_Base_LayerVKAddBtn: by.id('addVisitorKeys'),
    newLayerModal_Base_LayerVKCreateBtn: by.id('createAddVisitorKey'),
    newLayerModal_Base_LayerVKRemoveBtn: by.id('removeVisitorKeys'),
    newLayerModal_Base_LayerFilesAvailableSearch: by.id('searchAvailableFiles'),
    newLayerModal_Base_LayerFilesAvailableSelect: by.id('new-layer-available-pdi-files'),
    newLayerModal_Base_LayerFilesSelected: by.id('new-layer-files-associated-grid'),
    newLayerModal_Base_LayerFilesSelected_Name: by.repeater('(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name'),
    newLayerModal_Base_LayerFilesSelected_Type: by.repeater('(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name'), //TODO: gotta be clever here
    newLayerModal_Base_addPDIFileBtn: by.id('new-layer-add-pdi-files'),
    newLayerModal_Base_removePDIFilesBtn: by.id('new-layer-remove-pdi-files'),
    newLayerModal_Base_uploadPDIFilesBtn: by.id('new-layer-upload-pdi-files'),
    newLayerModal_Base_editConfigBtn: by.id('new-layer-edit-config'),

    //Transform Layer
    newLayerModal_Transform_OrderingTypeCbo: by.id('new-layer-order-type'),
    newLayerModal_Transform_Available: by.id('new-layer-available'),
    newLayerModal_Transform_Selected: by.id('new-layer-selected'),
    newLayerModal_Transform_AddBtn: by.id('new-layer-add-available'),
    newLayerModal_Transform_RemoveBtn: by.id('new-layer-remove-selected'),
    newLayerModal_Transform_MergeKey_NameTxt: by.id('new-layer-key-name'),
    newLayerModal_Transform_MergeKey_TimeValueTxt: by.id('new-layer-time-value'),
    newLayerModal_Transform_MergeKey_UnlimitedTxt: by.id('new-layer-unlimited'),
    newLayerModal_Transform_MergeKey_AddBtn: by.id('new-layer-add-merge-key'),
    newLayerModal_Transform_MergeKey_DataGrid: by.name('MergeKeys'),
    newLayerModal_Transform_Transforms_NewCbo: by.id('new-layer-transform-new'),
    newLayerModal_Transform_Transforms_DataGrid: by.name('Transforms'),

    //Configuration Editor
    newLayerModal_ConfigEditor_TextBox: by.id('new-layer-edit-config'),
    newLayerModal_ConfigEditor_SaveBtn: by.id('new-layer-save-config'),
    newLayerModal_ConfigEditor_CancelBtn: by.id('new-layer-cancel-config'),

    //new layer window modal
    newLayerModal_WindowContinueBtn: by.buttonText('Continue'),
    newLayerModal_WindowSaveAndCloseBtn: by.buttonText('Save & Close'),
    newLayerModal_WindowCancelBtn: by.buttonText('Cancel')
};