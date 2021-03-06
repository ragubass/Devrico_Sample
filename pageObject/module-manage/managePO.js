/**
 * Created by ckoerber on 5/12/15.
 */
var HelperPO = require('../../pageObject/module-shared/poHelper');
var loc = require('../../uiMap/uimap-manage/manageModuleLocators');
var manageLoc = require('../../uiMap/uimap-global/manageBreadcrumbLocaters');

var POHelper = new HelperPO();
var ManageModule = function () {
    var that = this;
    this.manageMain = element(loc.manageMain);
    this.pageHeader = element(loc.manageHeader);
    this.dataManagement = element(manageLoc.dataManagement);
    this.manageTabViews = element(loc.manageTabViews);
    this.manageTabViewsLink = element(loc.manageTabViewsLink);
    this.manageTabFilters = element(loc.manageTabFilters);
    this.manageTabFiltersLink = element(loc.manageTabFiltersLink);
    this.manageTabPaths = element(loc.manageTabPaths);
    this.manageTabPathsLink = element(loc.manageTabPathsLink);
    this.manageTabDataLayers = element(loc.manageTabDataLayers);
    this.tabDataLayersContent = element(loc.tabDataLayersContent);
    this.breadcrumbsText = element(manageLoc.breadcrumbsText);
    this.tabLayersDataTableHeaderLoc = loc.tabLayersDataTableHeader;
    this.tabLayersDataTableColumnMenuItemsLoc = loc.tabLayersTabColumnMenuOptions;
    this.tabLayersDataTableDataRowLoc = loc.tabLayersDataTableDataRow;
    this.tabLayersDataTableDataColumnLoc = element.all(loc.tabLayersDataTableDataColumn);
    this.tabLayersDataTableHeaderCellLoc = loc.tabLayersDataTableHeaderCell;
    this.tabDataLayers = element(loc.dataLayerLink);
    this.tabFilters = element(loc.filtersLink);
    this.tabLayersDataTable = loc.tabLayersDataTable;
    this.myFiltersLink = element(loc.myFiltersLink);
    this.allFiltersLink = element(loc.allFiltersLink);
    this.tabViews = element(loc.viewsLink);
    this.myViewsLink = element(loc.myViewsLink);
    this.allViewsLink = element(loc.allViewsLink);
    this.tabPaths = element(loc.pathsLink);
    this.myPathsLink = element(loc.myViewsLink);
    this.allPathsLink = element(loc.allPathsLink);
    this.homeLink = element(manageLoc.homeLink);
    this.discovertab = element(manageLoc.discoverLink);
    this.dataMgtText = element(manageLoc.dataManagementText);
    this.searchTextbox = element(loc.searchTextBox);
    this.deleteLink = element(loc.deleteLink);
    this.deleteWindowModal_Message = element(loc.deleteWindowModal_Message);
    this.okButton = element(loc.okBtn);
    this.cancelButton = element(loc.cancelBtn);
    this.deleteWindowModal_ContinueButton = element(loc.deleteWindowModal_ContinueBtn);
    this.deleteWindowModal_CloseButton = element(loc.deleteWindowModal_CloseBtn);
    this.dependancyWindowModal_TableHeaders = element.all(loc.dependancyWindowModal_TableHeaders);
    this.selectCheckBox = element.all(loc.selectCheckBox);
    this.deleteWindowModal_Title = element(loc.deleteWindowModal_Title);
    this.selectedNameLink = element.all(loc.selectNameLink);
    this.selectViewNameLink = element.all(loc.selectViewNameLink);
    this.deletedLink = element(loc.deleteLink);
    this.searchErrorText = element(loc.searchErrorText);
    this.editableId = element.all(loc.editableId);
    this.editablePathId = element(loc.editablePathId);
    this.editableSaveId = element(loc.editableSaveId);
    this.editableCancelId = element(loc.editableCancelId);
    this.editableWarningId = element(loc.editableWarningId);
    this.selectedNamesLink = element.all(loc.selectedNamesLink);
    this.errorMessageText = element(loc.errorMessageText);
    this.dropDownOptions = element(loc.dropDownOptions);

    /**
     *  get txt from the data management link in the manage module
     */
    this.checkDataMgtText = function () {
        return this.dataMgtText.getText();
    };

    /**
     *  Select data management in the manage module
     */
    this.clickDataManagement = function () {
        that.dataManagement.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.dataManagement.click();
            }
        });
    };

    /**
     *  Select views tab in the manage module
     */
    this.clickViewsTab = function () {
        that.tabViews.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabViews.click();
            }
        });
    };

    /**
     *  Select filters tab in the manage module
     */
    this.clickFiltersTab = function () {
        that.manageTabFiltersLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.manageTabFiltersLink.click();
            }
        });
    };

    /**
     *  Select paths tab in the manage module
     */
    this.clickPathsTab = function () {
        that.manageTabPathsLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.manageTabPathsLink.click();
            }
        });
    };

    /**
     *  Select data layer tab in the manage module
     */
    this.clickDataLayerTab = function () {
        that.tabDataLayers.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.tabDataLayers.click();
            }
        });
    };

    /**
     *  Select data filters tab in the manage module
     *  @type {{selectFiltersTab: selectFiltersTab, clickMyFiltersLink: clickMyFiltersLink, clickAllFiltersLink: clickAllFiltersLink}}
     */
    this.tabFiltersContent = {

        selectFiltersTab: function () {
            that.tabFilters.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.tabFilters.click();
                }
            });
        },

        /**
         *  Select my filters link in the manage module filters tab
         */
        clickMyFiltersLink: function () {
            that.myFiltersLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.myFiltersLink.click();
                }
            });
        },

        /**
         *  Select all filters link in the manage module filters tab
         */
        clickAllFiltersLink: function () {
            that.allFiltersLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.allFiltersLink.click();
                }
            });
        }
    };

    /**
     *  Select data views tab in the manage module
     *  @type {{selectViewsTab: selectViewsTab, clickMyViewsLink: clickMyViewsLink, clickAllViewsLink: clickAllViewsLink}}
     */
    this.tabViewsContent = {
        selectViewsTab: function () {
            that.tabViews.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.tabViews.click();
                }
            });
        },

        /**
         *  Select my views link in the manage module views tab
         */
        clickMyViewsLink: function () {
            that.myViewsLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.myViewsLink.click();
                }
            });
        },

        /**
         *  Select all views link in the manage module views tab
         */
        clickAllViewsLink: function () {
            that.allViewsLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.allViewsLink.click();
                }
            });
        }
    };

    /**
     *  Select data paths tab in the manage module
     *  @type {{selectPathsTab: selectPathsTab, clickMyPathsLink: clickMyPathsLink, clickAllPathsLink: clickAllPathsLink}}
     */
    this.tabPathsContent = {
        selectPathsTab: function () {
            that.tabPaths.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.tabPaths.click();
                }
            });
        },

        /**
         *  Select my paths link in the manage module paths tab
         */
        clickMyPathsLink: function () {
            that.myPathsLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.myPathsLink.click();
                }
            });
        },

        /**
         *  Select all paths link in the manage module paths tab
         */
        clickAllPathsLink: function () {
            that.allPathsLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.allPathsLink.click();
                }
            });
        }
    };

    /**
     * Select checkbox item for views, paths, filters
     * @param index for initial value
     * @param itemIndex for checkbox item value
     */
    this.selectDataTableCheckBoxItem = function (index, itemIndex) {
        for (var i = index; i < itemIndex; i++) {
            that.selectCheckBox.get(i).click();
        }
    };

    /**
     * to get the title of the delete window modal
     */
    this.checkDeleteWindowModalTitle = function () {
        this.deleteWindowModal_Title.isPresent().then(function (isPresent) {
            if (isPresent) {
                return that.deleteWindowModal_Title.getText();
            }
        });
    };

    /**
     *  Get Text of the Deleted item
     * @param selectedIndex
     * @returns selectedName
     */
    this.getSelectedName = function (selectedIndex) {
        return that.selectedNameLink.get(selectedIndex).getText();
    };

    /**
     *  Select delete link in the manage module pop up
     */
    this.clickDeleteLink = function () {
        that.deleteLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.deleteLink.click();
            }
        });
    };

    /**
     *  Select my ok button in the manage module pop up
     */
    this.clickOKButton = function () {
        that.okButton.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.okButton.click();
            }
        });
    };

    /**
     *  Select my cancel button in the manage module pop up
     */
    this.clickCancelButton = function () {
        that.cancelButton.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.cancelButton.click();
            }
        });
    };

    /**
     *  Select my continue button in the manage module pop up
     */
    this.clickDeleteWindowModal_ContinueButton = function () {
        that.deleteWindowModal_ContinueButton.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.deleteWindowModal_ContinueButton.click();
            }
        });
    };

    /**
     * Select delete window model close button
     */
    this.clickDeleteWindowModal_CloseButton = function () {
        that.deleteWindowModal_CloseButton.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.deleteWindowModal_CloseButton.click();
            }
        });
    };

    /**
     * To pass the SelectedName item in search box
     * @param selectedName
     */
    this.validateSelectedName = function (selectedName) {
        that.searchTextbox.sendKeys(selectedName);
    };

    /**
     * Functions to use click to edit pathname and send the path name in editable text path name box
     * @param testVarSelectedName
     * @param selectedIndex
     */
    this.editSelectedName = function (testVarSelectedName, selectedIndex) {
        that.editableId.get(selectedIndex).click();
        browser.driver.manage().timeouts().implicitlyWait(2000);
        that.editablePathId.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.editablePathId.clear();
                that.editablePathId.sendKeys(testVarSelectedName);
            }
        });
    };

    /**
     * Data Management Paths Module  - Click Pathname edit cancel icon
     */
    this.editSelectedNameCancel = function () {
        that.editableCancelId.click();
    };

    /**
     * Data Management Paths Module  - Click Pathname edit save icon
     */
    this.editSelectedNameSave = function () {
        that.editableSaveId.click();
    };

    /** To get the title of the delete window modal dependency messaging table
     * @param title
     */
    this.checkDependancyWindowModal_TableHeaders = function (title) {
       return this.dependancyWindowModal_TableHeaders.get(title).isPresent().then(function (isPresent) {
            if (isPresent) {
               return that.dependancyWindowModal_TableHeaders.getText();
            }
        });
    };

    /**
     * Functions to work with the data table on the module main tab 'Layers'
     * @type {{getHeaderCount: getHeaderCount, checkTableRows: checkTableRows, getHeaderText: getHeaderText,getCellIsDisplayed: getCellIsDisplayed, getDataRow: getDataRow, getCellText: getCellText,getCellTextIsDisplayed: getCellTextIsDisplayed,clickHeaderColumn: clickHeaderColumn, clickDataRow: clickDataRow, clickColumnMenu: clickColumnMenu}}
     */
    this.Manage_tabLayers_DataTable = {
        /**
         * Get the header count for the data table
         * @returns count of header columns
         */
        getHeaderCount: function () {
            return element(that.tabLayersDataTable).all(that.tabLayersDataTableHeaderLoc).count();
        },

        /**
         * Get the count of data rows from within the data table
         * @returns count of data rows
         */
        checkTableRows: function () {
            var rows = element(that.tabLayersDataTable).all(that.tabLayersDataTableDataRowLoc);
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
            return element(that.tabLayersDataTable).all(that.tabLayersDataTableHeaderLoc)
                .get(columnIndex).element(that.tabLayersDataTableHeaderCellLoc).getText().then(function (text) {
                    return text;
                });
        },

        /**
         * Used to get a row object backk
         * @param rowIndex
         * @returns row in an elementfinder object
         */
        getDataRow: function (rowIndex) {
            return element(that.tabLayersDataTable).all(that.tabLayersDataTableDataRowLoc).get(rowIndex);
        },

        /**
         * Get the text from a specified cell using row and column indicies
         * @param rowIndex
         * @param columnIndex
         * @returns text of cell
         */
        getCellText: function (rowIndex, columnIndex) {
            var row = this.getDataRow(rowIndex);
            return row.all(that.tabLayersDataTableDataColumnLoc).get(columnIndex).getText().then(function (text) {
                return text;
            });
        },

        /**
         * Get the text from a specified cell using column indicies
         * @param columnIndex
         * @returns text of cell
         */
        getCellTextIsDisplayed: function (columnIndex) {
            return that.tabLayersDataTableDataColumnLoc.get(columnIndex).isDisplayed();
        },

        /**
         * Click column header to sort data
         * @param columnIndex
         */
        clickHeaderColumn: function (columnIndex) {
            element(that.tabLayersDataTable).all(that.tabLayersDataTableHeaderLoc)
                .get(columnIndex).element(by.cssContainingText('.ui-grid-cell-contents', '')).click();
        },
        /**
         * Click link within cell of data table
         * @param rowIndex
         * @param columnIndex
         */
        clickDataRow: function (rowIndex, columnIndex) {
            var row = this.getDataRow(rowIndex);
            row.all(that.tabLayersDataTableDataColumnLoc).get(columnIndex).element(by.css('.ui-grid-cell-contents a')).isPresent().then(function (isPresent) {
                if (isPresent) {
                    row.all(that.tabLayersDataTableDataColumnLoc).get(columnIndex).element(by.css('.ui-grid-cell-contents a')).click();
                }
            });
        },

        /**
         *  Click column menu and option
         * @param columnIndex
         * @param optionIndex
         */
        clickColumnMenu: function (columnIndex, optionIndex) {
            element(that.tabLayersDataTable).all(that.tabLayersDataTableHeaderLoc)
                .get(columnIndex).element(by.css('.ui-grid-column-menu-button')).isPresent().then(function (isPresent) {
                    if (isPresent) {
                        element(that.tabLayersDataTable).all(that.tabLayersDataTableHeaderLoc)
                            .get(columnIndex).element(by.css('.ui-grid-column-menu-button')).click();
                    }
                });
            element(that.tabLayersDataTable).all(that.tabLayersDataTableColumnMenuItemsLoc).get(optionIndex).isDisplayed().then(function (isDisplayed) {
                if (isDisplayed) {
                    element(that.filtersDataTable).all(that.tabLayersDataTableColumnMenuItemsLoc).get(optionIndex).click();
                }
            });
        }
    };

};

module.exports = ManageModule;