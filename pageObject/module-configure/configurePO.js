/**
 * Created by ckoerber on 4/26/15.
 */
var HelperPO = require('../../pageObject/module-shared/poHelper');
var loc = require('../../uiMap/uimap-configure/configureModuleLocators');

var POHelper = new HelperPO();
var ConfigureModule = function () {
    var that = this;
    this.formPopover = element(loc.formPopover);
    this.configureMain = element(loc.configureMain);
    this.pageHeader = element(loc.configureHeader);
    this.tabLayers = element(loc.configureTabLayers);
    this.tabLayersLink = element(loc.configureTabLayers);
    this.tabEvents = element(loc.configureTabEvents);
    this.tabEventsLink = element(loc.configureTabEvents);
    this.tabAttributes = element(loc.configureTabAttributes);
    this.tabAttributesLink = element(loc.configureTabAttributes);
    this.tabLayerSearchBox = this.configureMain.element(loc.configureTabLayers_SearchBox);
    this.tabLayerSearchMsg = element(loc.configureTabLayers_SearchMsg);
    this.tabLayerNewLayerBtn = element(loc.configureTabLayers_NewLayerBtn);
    this.tabLayerLayerEditorBtn = element(loc.configureTabLayers_LayerEditorBtn);
    this.tabLayerVkMatrixBtn = element(loc.configureTabLayers_VisitorKeyMatrixBtn);
    this.tabLayerDataTable = loc.configureDataTable;
    this.tabLayerDataTableMenu = element(loc.configureDataTableMenu);
    this.tabLayerDataTableMenuLoc = loc.configureDataTableMenu;
    this.tabLayerDataTableMenuBtn = this.configureMain.element(loc.configureDataTableMenuBtn);
    this.tabLayerDataTableMenuContainerLoc = loc.configureDataTableMenuOptionsContainer;
    this.tabLayerDataTableMenuOptionsLoc = loc.configureDataTableMenuOptions;
    this.tabLayerDataTableHeaderLoc = loc.configureDataTableHeader;
    this.tabLayerDataTableHeaderCellLoc = loc.configureDataTableHeaderCell;
    this.tabLayerDataTableDataRowLoc = loc.configureDataTableDataRow;
    this.tabLayerDataTableDataColumnLoc = loc.configureDataTableDataColumn;
    this.tabLayerDataTableColumnMenu = this.configureMain.element(loc.configureDataTableColumnMenu);
    this.tabLayerDataTableColumnMenuItemsLoc = loc.configureDataTableColumnMenuOptions;

    this.newLayerModal_Modal = element(loc.newLayerModal_Modal);
    this.newLayerModal_BackBtn = element(loc.newLayerModal_BackBtn);
    this.newLayerModal_Title = element(loc.newLayerModal_Title);
    this.newLayerModal_LayerTypeCbo = element(loc.newLayerModal_LayerTypeCbo);
    this.newLayerModal_LayerName = element(loc.newLayerModal_LayerName);
    this.newLayerModal_LayerDays = element(loc.newLayerModal_LayerDays);
    this.newLayerModal_LayerVisibilityChk = element(loc.newLayerModal_LayerVisibilityChk);
    this.newLayerModal_LayerVisibilityChkLoc = loc.newLayerModal_LayerVisibilityChk;
    this.newLayerModal_LayerTimezoneCbo = element(loc.newLayerModal_LayerTimezoneCbo);
    this.newLayerModal_LayerSaveBtn = element(loc.newLayerModal_LayerSaveBtn);

    this.newLayerModal_Base_SimpleBaseIngestionChk = element(loc.newLayerModal_Base_SimpleBaseIngestionChk);
    this.newLayerModal_Base_LayerDesc = element(loc.newLayerModal_Base_LayerDesc);
    this.newLayerModal_Base_LayerVisitorKeys = element(loc.newLayerModal_Base_LayerVisitorKeys);
    this.newLayerModal_Base_LayerVKAvaliable = element(loc.newLayerModal_Base_LayerVKAvaliable);
    this.newLayerModal_Base_LayerVKAvaliableSearch = element(loc.newLayerModal_Base_LayerVKAvaliableSearch);
    this.newLayerModal_Base_LayerVKAvaliableDataRow = this.newLayerModal_Base_LayerVKAvaliable.element(loc.newLayerModal_Base_LayerVKAvaliableDataRow);
    this.newLayerModal_Base_LayerVKAvaliableDataColumn = this.newLayerModal_Base_LayerVKAvaliable.element(loc.newLayerModal_Base_LayerVKAvaliableDataColumn);
    this.newLayerModal_Base_LayerVKAvaliableDataCell = this.newLayerModal_Base_LayerVKAvaliable.element(loc.newLayerModal_Base_LayerVKAvaliableDataCell);
    this.newLayerModal_Base_LayerVKSelected = element(loc.newLayerModal_Base_LayerVKSelected);
    this.newLayerModal_Base_LayerVKAddBtn = element(loc.newLayerModal_Base_LayerVKAddBtn);
    this.newLayerModal_Base_LayerVKCreateBtn = element(loc.newLayerModal_Base_LayerVKCreateBtn);
    this.newLayerModal_Base_LayerVKRemoveBtn = element(loc.newLayerModal_Base_LayerVKRemoveBtn);
    this.newLayerModal_Base_LayerFilesAvailableSearch = element(loc.newLayerModal_Base_LayerFilesAvailableSearch);
    this.newLayerModal_Base_LayerFilesAvailableSelect = element(loc.newLayerModal_Base_LayerFilesAvailableSelect);
    this.newLayerModal_Base_LayerFilesSelected = element(loc.newLayerModal_Base_LayerFilesSelected);
    this.newLayerModal_Base_LayerFilesSelected_Name = this.newLayerModal_Base_LayerFilesSelected.element(loc.newLayerModal_Base_LayerFilesSelected_Name);
    this.newLayerModal_Base_LayerFilesSelected_Type = this.newLayerModal_Base_LayerFilesSelected.element(loc.newLayerModal_Base_LayerFilesSelected_Type);
    this.newLayerModal_Base_addPDIFileBtn = element(loc.newLayerModal_Base_addPDIFileBtn);
    this.newLayerModal_Base_removePDIFilesBtn = element(loc.newLayerModal_Base_removePDIFilesBtn);
    this.newLayerModal_Base_uploadPDIFilesBtn = element(loc.newLayerModal_Base_uploadPDIFilesBtn);
    this.newLayerModal_Base_editConfigBtn = element(loc.newLayerModal_Base_editConfigBtn);

    this.newLayerModal_Transform_OrderingTypeCbo = element(loc.newLayerModal_Transform_OrderingTypeCbo);
    this.newLayerModal_Transform_Available = element(loc.newLayerModal_Transform_Available);
    this.newLayerModal_Transform_Selected = element(loc.newLayerModal_Transform_Selected);
    this.newLayerModal_Transform_AddBtn = element(loc.newLayerModal_Transform_AddBtn);
    this.newLayerModal_Transform_RemoveBtn = element(loc.newLayerModal_Transform_RemoveBtn);
    this.newLayerModal_Transform_MergeKey_NameTxt = element(loc.newLayerModal_Transform_MergeKey_NameTxt);
    this.newLayerModal_Transform_MergeKey_TimeValueTxt = element(loc.newLayerModal_Transform_MergeKey_TimeValueTxt);
    this.newLayerModal_Transform_MergeKey_UnlimitedTxt = element(loc.newLayerModal_Transform_MergeKey_UnlimitedTxt);
    this.newLayerModal_Transform_MergeKey_AddBtn = element(loc.newLayerModal_Transform_MergeKey_AddBtn);
    this.newLayerModal_Transform_MergeKey_DataGrid = element(loc.newLayerModal_Transform_MergeKey_DataGrid);
    this.newLayerModal_Transform_Transforms_NewCbo = element(loc.newLayerModal_Transform_Transforms_NewCbo);
    this.newLayerModal_Transform_Transforms_DataGrid = element(loc.newLayerModal_Transform_Transforms_DataGrid);

    this.newLayerModal_WindowContinueBtn = element(loc.newLayerModal_WindowContinueBtn);
    this.newLayerModal_WindowSaveAndCloseBtn = element(loc.newLayerModal_WindowSaveAndCloseBtn);
    this.newLayerModal_WindowCancelBtn = element(loc.newLayerModal_WindowCancelBtn);

    this.newLayerModal_ConfigEditor_TextBox = element(loc.newLayerModal_ConfigEditor_TextBox);
    this.newLayerModal_ConfigEditor_SaveBtn = element(loc.newLayerModal_ConfigEditor_SaveBtn);
    this.newLayerModal_ConfigEditor_CancelBtn = element(loc.newLayerModal_ConfigEditor_CancelBtn);

    /**
     * Select main module tab - Layers
     */
    this.clickTabLayers = function () {
        this.tabLayersLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabLayersLink.click();
            }
        });
    };

    /**
     * Select main module tab - Events
     */
    this.clickTabEvents = function () {
        this.tabEventsLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabEventsLink.click();
            }
        });
    };

    /**
     * Select main module tab - Attributes
     */
    this.clickTabAttributes = function () {
        this.tabAttributesLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabAttributesLink.click();
            }
        });
    };

    /**
     * Main Module Tab Layers - Click New Layer Button
     */
    this.clickNewLayerBtn = function () {
        this.tabLayerNewLayerBtn.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabLayerNewLayerBtn.click();
            }
        });
    };

    /**
     * Main Module Tab Layers - Click Layer Editor Button/Switch
     */
    this.clickLayerEditorBtn = function () {
        this.tabLayerLayerEditorBtn.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabLayerLayerEditorBtn.click();
            }
        });
    };

    /**
     * Main Module Tab Layers - Click Visitor Key Matrix Button/Switch
     */
    this.clickVkMatrixBtn = function () {
        this.tabLayerVkMatrixBtn.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabLayerVkMatrixBtn.click();
            }
        });
    };

    /**
     * Functions to work with the data table on the module main tab 'Layers'
     *
     * @type {{getHeaderCount: getHeaderCount, checkTableRows: checkTableRows, getHeaderText: getHeaderText, getDataRow: getDataRow, getCellText: getCellText, clickHeaderColumn: clickHeaderColumn, clickDataRow: clickDataRow, clickColumnMenu: clickColumnMenu}}
     */
    this.tabLayers_DataTable = {
        /**
         * Get the header count for the data table
         * @returns count of header columns
         */
        getHeaderCount: function () {
            return element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc).count();
        },

        /**
         * Get the count of data rows from within the data table
         * @returns count of data rows
         */
        checkTableRows: function () {
            var rows = element(that.tabLayerDataTable).all(that.tabLayerDataTableDataRowLoc);
            return rows.then(function (data) {
                return data.length;
            });
        },

        /**
         * Get the text of a header column
         * @param columnIndex to specify what column text is returned
         * @returns text of the header column
         */
        getHeaderText: function (columnIndex) {
            return element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                .get(columnIndex).element(that.tabLayerDataTableHeaderCellLoc).getText().then(function (text) {
                    return text;
                });
        },

        /**
         * Used to get a row object backk
         * @param rowIndex
         * @returns row in an elementfinder object
         */
        getDataRow: function (rowIndex) {
            return element(that.tabLayerDataTable).all(that.tabLayerDataTableDataRowLoc).get(rowIndex);
        },

        /**
         * Get the text from a specified cell using row and column indicies
         * @param rowIndex
         * @param columnIndex
         * @returns text of cell
         */
        getCellText: function (rowIndex, columnIndex) {
            var row = this.getDataRow(rowIndex);
            return row.all(that.tabLayerDataTableDataColumnLoc).get(columnIndex).getText().then(function (text) {
                return text;
            });
        },

        /**
         *  Click column header to sort data
         * @param columnIndex
         */
        clickHeaderColumn: function (columnIndex) {
            element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                .get(columnIndex).element(by.cssContainingText('.ui-grid-cell-contents', '')).click();
        },

        /**
         * Click link within cell of data table
         * @param rowIndex
         * @param columnIndex
         */
        clickDataRow: function (rowIndex, columnIndex) {
            var row = this.getDataRow(rowIndex);
            row.all(that.tabLayerDataTableDataColumnLoc).get(columnIndex).element(by.css('.ui-grid-cell-contents a')).isPresent().then(function (isPresent) {
                if (isPresent) {
                    row.all(that.tabLayerDataTableDataColumnLoc).get(columnIndex).element(by.css('.ui-grid-cell-contents a')).click();
                }
            });
        },

        /**
         *  Click column menu and option
         * @param columnIndex
         * @param optionIndex
         */
        clickColumnMenu: function (columnIndex, optionIndex) {
            element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                .get(columnIndex).element(by.css('.ui-grid-column-menu-button')).isPresent().then(function (isPresent) {
                    if (isPresent) {
                        element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                            .get(columnIndex).element(by.css('.ui-grid-column-menu-button')).click();
                    }
                });
            element(that.tabLayerDataTable).all(that.tabLayerDataTableColumnMenuItemsLoc).get(optionIndex).isDisplayed().then(function (isDisplayed) {
                if (isDisplayed) {
                    element(that.tabLayerDataTable).all(that.tabLayerDataTableColumnMenuItemsLoc).get(optionIndex).click();
                }
            });

        },

        /**
         * Check column for selected sort
         * @param columnIndex What column should be checked
         * @param expectedSort should be passed as string. asc, desc or none
         * @returns {boolean}
         */
        checkColumnSort: function (columnIndex, expectedSort) {
            if (expectedSort == 'asc') {
                return element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                    .get(columnIndex).isElementPresent(by.css('span.ui-grid-icon-up-dir')).then(function (isPresent) {
                        return isPresent;
                    });
            } else if (expectedSort == 'desc') {
                return element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                    .get(columnIndex).isElementPresent(by.css('span.ui-grid-icon-down-dir')).then(function (isPresent) {
                        return isPresent;
                    });
            } else if (expectedSort == 'none') {
                return element(that.tabLayerDataTable).all(that.tabLayerDataTableHeaderLoc)
                    .get(columnIndex).isElementPresent(by.css('span.ui-grid-icon-blank')).then(function (isPresent) {
                        return isPresent;
                    });
            } else {
                return false;
            }
        },

        clickDataTableMenu: function (optionText) {
            that.tabLayerDataTableMenuBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.tabLayerDataTableMenuBtn.click();
                }
            });

            element(that.tabLayerDataTableMenuContainerLoc).all(that.tabLayerDataTableMenuOptionsLoc).each(function (item) {
                item.getText().then(function (text) {
                    if (text == optionText) {
                        item.click();
                    }
                })
            });
        }
    };

    this.tabLayers_LayerModal = {
        clickModalBackBtn: function () {
            that.newLayerModal_BackBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_BackBtn.click();
                }
            });
        },

        clickModalAddPdiFilesBtn: function () {
            that.newLayerModal_Base_addPDIFileBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_Base_addPDIFileBtn.click();
                }
            });
        },

        clickModalRemovePdiFilesBtn: function () {
            that.newLayerModal_Base_removePDIFilesBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_Base_removePDIFilesBtn.click();
                }
            });
        },

        clickModalEditConfigBtn: function () {
            that.newLayerModal_Base_editConfigBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_Base_editConfigBtn.click();
                }
            });
        },

        clickModalSaveBtn: function () {
            that.newLayerModal_LayerSaveBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_LayerSaveBtn.click();
                }
            });
        },
        /**
         * Select window modal continue button
         */
        clickNewLayerModalContinueBtn: function () {
            that.newLayerModal_WindowContinueBtn.isPresent().then(function (isPresent){
                if(isPresent) {
                    that.newLayerModal_WindowContinueBtn.click();
                }
            });
        },

        /**
         * Select window modal save & close button
         */
        clickNewLayerModalSaveAndCloseBtn: function () {
            that.newLayerModal_WindowSaveAndCloseBtn.isPresent().then(function (isPresent){
                if(isPresent) {
                    that.newLayerModal_WindowSaveAndCloseBtn.click();
                }
            });
        },
        /**
         * Select window modal cancel button
         */
        clickNewLayerModalCancelBtn: function () {
            that.newLayerModal_WindowCancelBtn.isPresent().then(function (isPresent){
                if(isPresent) {
                    that.newLayerModal_WindowCancelBtn.click();
                }
            });
        },

        clickEditConfigSaveBtn: function () {
            that.newLayerModal_ConfigEditor_SaveBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_ConfigEditor_SaveBtn.click();
                }
            });
        },

        clickEditConfigCancelBtn: function () {
            that.newLayerModal_ConfigEditor_CancelBtn.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.newLayerModal_ConfigEditor_CancelBtn.click();
                }
            });
        }
    };
};

module.exports = ConfigureModule;