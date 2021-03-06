/**
 * Created by ragu.s on 2/16/2015.
 * Workspace summary drawer and control panel drawer page obeject model
 */
var controlPanelDrawerLoc = require('../../uiMap/uimap-analyze/controlPanelDrawerLoc.js');
var ControlPanelDrawer = function () {
    var that = this;
    this.drawerLabelName = element(controlPanelDrawerLoc.drawerLabelName);
    this.columnHeader = element.all(controlPanelDrawerLoc.columnHeader);
    this.selectDataTab = element(controlPanelDrawerLoc.selectDataTab);
    this.selectDatesTab = element(controlPanelDrawerLoc.selectDatesTab);
    this.tabPaths = element(controlPanelDrawerLoc.analyzePathFlyoutTab);
    this.tabFilters = element(controlPanelDrawerLoc.analyzeFiltersTab);
    this.saveViewBtn = element(controlPanelDrawerLoc.saveViewBtn);
    this.startOverBtn = element(controlPanelDrawerLoc.startOverBtn);
    this.dataLayersBtn = element(controlPanelDrawerLoc.dataLayersBtn);
    this.viewsBtn = element(controlPanelDrawerLoc.viewsBtn);
    this.downArrow = element(controlPanelDrawerLoc.downArrowBtn);
    this.groupHeader = element.all(controlPanelDrawerLoc.groupsHeader);
    this.pathHeader = element(controlPanelDrawerLoc.pathHeader);
    this.filtersHeader = element(controlPanelDrawerLoc.filtersHeader);
    this.showHiddenLayersChk = element(controlPanelDrawerLoc.showHiddenLayersCheckBox);
    this.searchBox = element.all(controlPanelDrawerLoc.searchBox);
    this.dataLayerGroup = element(controlPanelDrawerLoc.dataLayerGroup);
    this.dataTableLayerCheckBox = element.all(controlPanelDrawerLoc.dataTableLayerCheckBox);
    this.dataLayerFirstRowText = element.all(controlPanelDrawerLoc.dataLayerFirstRowText);
    this.dataLayerColumnHeading = element.all(controlPanelDrawerLoc.dataLayerColumnHeadingClick);
    this.dataLayerGroupCollaps = element(controlPanelDrawerLoc.dataLayerGroupCollaps);
    this.viewsRightArrow = element.all(controlPanelDrawerLoc.viewsRightArrowBtn);
    this.viewsGroup = element(controlPanelDrawerLoc.viewsGroup);
    this.newViewBtn = element(controlPanelDrawerLoc.newViewBtn);
    this.narrowByViewsDropdown = element(controlPanelDrawerLoc.narrowByViewsDropdown);
    this.narrowByOption = element.all(controlPanelDrawerLoc.narrowByOption);
    this.switchToViews = element(controlPanelDrawerLoc.switchBetweenMyViewsToAllViewsBtn);
    this.narrowByLabel = element(controlPanelDrawerLoc.narrowByLabel);
    this.viewsColumnHeading = element.all(controlPanelDrawerLoc.viewsColumnHeadingArrow);
    this.viewsNameFirstRowText = element.all(controlPanelDrawerLoc.viewsNameFirstRowText);
    this.viewGroupCollaps = element.all(controlPanelDrawerLoc.viewsGroupCollaps);
    this.addFilterBtn = element(controlPanelDrawerLoc.addFilterBtn);
    this.addPathBtn = element(controlPanelDrawerLoc.addPathBtn);
    this.selectDatesBtn = element(controlPanelDrawerLoc.selectedDatesBtn);
    this.dp_jumpTodateBtn = element(controlPanelDrawerLoc.jumptoDateBtn);
    this.dp_LegendBtn = element(controlPanelDrawerLoc.legendBtn);
    this.redColorBesideText = element(controlPanelDrawerLoc.redColorBesideTextCheck);
    this.greenColorBesideText = element(controlPanelDrawerLoc.greenColorBesideTextCheck);
    this.goldColorBesideText = element(controlPanelDrawerLoc.goldColorBesideTextCheck);
    this.grayColorBesideText = element(controlPanelDrawerLoc.grayColorBesideTextCheck);
    this.blackColorBesideText = element(controlPanelDrawerLoc.blackColorBesideTextCheck);
    this.newPathBtn = element(controlPanelDrawerLoc.newPathBtn);
    this.narrowByTypeOption = element.all(controlPanelDrawerLoc.narrowfiltersByTypeOption);
    this.layoutCloseBtn = element(controlPanelDrawerLoc.closeBtn);
    this.drawerUpBtn = element(controlPanelDrawerLoc.drawerCloseBtn);
    this.summaryContentDetails = element.all(controlPanelDrawerLoc.summaryContentDetails);
    this.selectDates = element.all(controlPanelDrawerLoc.selectDates);
    this.selectedDatesLabel = element(controlPanelDrawerLoc.selectedDatesLabel);
    this.applyBtn = element(controlPanelDrawerLoc.applyBtn);
    this.resetBtn = element(controlPanelDrawerLoc.resetBtn);
    this.summaryContent = element.all(controlPanelDrawerLoc.summaryContent);
    this.filterHeader = element(controlPanelDrawerLoc.filterHeader);
    this.pathHeader = element(controlPanelDrawerLoc.pathHeader);
    this.dateIconForLayer = element.all(controlPanelDrawerLoc.dateIconForLayer);
    this.calendarModalTitle = element(controlPanelDrawerLoc.calendarModalTitle);
    this.monthCalendarContainer = element(controlPanelDrawerLoc.monthCalendarContainer);
    this.leftArrowButton = element(controlPanelDrawerLoc.leftArrowButton);
    this.currentYearDisplay = element(controlPanelDrawerLoc.currentYearDisplay);
    this.monthButtons = element.all(controlPanelDrawerLoc.monthButtons);
    this.januaryCalendar = element(controlPanelDrawerLoc.januaryCalendar);
    this.firstProcessedDateBtn = element(controlPanelDrawerLoc.firstProcessedDateBtn);
    this.calendarCloseIcon = element(controlPanelDrawerLoc.calendarCloseIcon);
    this.leftSlider = element(controlPanelDrawerLoc.leftSlider);
    this.rightSlider = element(controlPanelDrawerLoc.rightSlider);
    this.continueButton = element(controlPanelDrawerLoc.continueButton);

    /**
     *  Select the select data tab in the control panel drawer
     * @type {{selectDataLayerTray: selectDataLayerTray, clickShowHiddenLayers: clickShowHiddenLayers, clickSearchBox: clickSearchBox,selectCheckBoxButton: selectCheckBoxButton}}
     */
    this.selectDataTabContent = {

        selectDataLayerTray: function () {
            that.selectDataTab.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.selectDataTab.click();
                }
            });
        },

        /**
         *  Select the show hidden layers check box in the control panel drawer data layer flyout
         */
        clickShowHiddenLayers: function () {
            that.showHiddenLayersChk.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.showHiddenLayersChk.click();
                }
            });
        },

        /**
         *  Select the search box in the control panel drawer data layer flyout and send keys
         *  @param text to specify search box send keys
         */
        clickSearchBox: function (searchbox, text) {
            that.searchBox.get(searchbox).isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.searchBox.get(searchbox).sendKeys(text);
                }
            });
        },

        /**
         *  Select the check box in the control panel drawer data layer flyout and send keys
         * @param checkBox to specify what check box to be select
         */
        clickDataTableLayerCheckBox: function (checkBox) {
            that.dataTableLayerCheckBox.get(checkBox).isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.dataTableLayerCheckBox.get(checkBox).click();
                }
            });
        },

        /**
         * select the narrow by dropdown in the view flyout
         */

        clickNarrowByOptionsList: function () {
            that.narrowByViewsDropdown.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.narrowByViewsDropdown.click();
                }
            });
        },

        /**
         * get the text from the narrow by views options
         */
        getNarrowByOptionsText: function () {
            return that.narrowByOption.getText();
        },

        /**
         * select the narrow by options in the view flyout
         * @param optionNum
         */

        selectNarrowByOptions: function (optionNum) {
            that.narrowByOption.then(function (options) {
                options[optionNum].click();
            });
        }
    };

    /**
     * get the column header from the data table
     * @param columnHeader
     * @returns column header text
     */

    this.getColumnHeader = function (columnHeader) {
        return that.columnHeader.get(columnHeader).getText();
    };

    /**
     *  Select the select dates tab in the control panel drawer
     *  @type {{selectDatesTray: selectDatesTray, clickJumpToDateButton: clickJumpToDateButton, clickLegendButton: clickLegendButton}}
     */
    this.selectDatesTabContent = {

        selectDatesTray: function () {
            that.selectDatesTab.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.selectDatesTab.click();
                }
            });
        },

        /**
         *  Select the jump to date button in the control panel drawer select dates flyout
         */
        clickCalenderJumpToDateButton: function () {
            that.dp_jumpTodateBtn.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.dp_jumpTodateBtn.click();
                }
            });
        },

        /**
         *  Select the legend button in the control panel drawer select dates flyout
         */
        clickCalenderLegendButton: function () {
            that.dp_LegendBtn.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.dp_LegendBtn.click();
                }
            });
        }
    };

    /**
     *  Select the paths tab in the control panel drawer
     *  @type {{selectPathsTray: selectPathsTray, selectNewPathBtn: selectNewPathBtn}}
     */
    this.tabPathsContent = {

        selectPathsTray: function () {
            that.tabPaths.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.tabPaths.click();
                }
            });
        },

        /**
         *  Select the new paths button in the paths flyout
         */

        selectNewPathBtn: function () {
            that.newPathBtn.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.newPathBtn.click();
                }
            });
        }
    };

    /**
     *  Select the filters tab in the control panel drawer
     *  @type {{selectFiltersTray: selectFiltersTray, selectNarrowByTypeOption: selectNarrowByTypeOption}}
     */
    this.tabFilterContent = {

        selectFiltersTray: function () {
            that.tabFilters.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.tabFilters.click();
                }
            });
        },

        /**
         *  Select the narrow by type options in the filters layout
         * @param options to specify what narrow by type options need to be select
         */
        selectNarrowByTypeOption: function (options) {
            that.narrowByTypeOption.isPresent().then(function (ispresent) {
                if (ispresent) {
                    that.narrowByTypeOption.get(options).click();
                }
            });
        }
    };

    /**
     * get text of the group headers in the control panel layout
     * @param headerText specify the header
     * @returns return text of the group header
     */
    this.groupHeaderText = function (headerText) {
        return that.groupHeader.get(headerText).getText();
    };

    /**
     *  Select the save view button in the control panel drawer
     */
    this.clickSaveViewBtn = function () {
        that.saveViewBtn.isPresent().then(function (ispresent) {
            if (ispresent) {
                that.saveViewBtn.click();
            }
        });
    };

    /**
     *  Select the start over button in the control panel drawer
     */
    this.clickStartOverBtn = function () {
        that.startOverBtn.isPresent().then(function (ispresent) {
            if (ispresent) {
                that.startOverBtn.click();
            }
        });
    };

    /**
     * Functions to work with the data layer flyout on the data layers table for sorting
     * @type {{getDataLayerFirstRowText: getDataLayerFirstRowText, clickDataLayerColumnHeading: clickDataLayerColumnHeading, getDataLayerFirstRowTextAfterSorting: getDataLayerFirstRowTextAfterSorting}}
     */
    this.selectDataLayerAccordion = {

        /**
         * get first row text in the data layer name column
         * @param dataLayerText to specify data layer table first column text
         */

        getDataLayerFirstRowText: function (dataLayerText) {
            that.dataLayerFirstRowText.get(dataLayerText).getText();
        },

        /**
         * select data layer column sorting arrow
         * @param dataLayerArrow to specify arrow for sorting
         */
        clickDataLayerColumnHeading: function (dataLayerArrow) {
            that.dataLayerColumnHeading.get(dataLayerArrow).click();
            that.dataLayerColumnHeading.get(dataLayerArrow).click();
        },

        /**
         * get first row text in the data layer name column after sorting
         * @param dataLayerText to specify data layer table first column text after sorting
         */
        getDataLayerFirstRowTextAfterSorting: function (dataLayerText) {
            return that.dataLayerFirstRowText.get(dataLayerText).getText();
        }
    };

    /**
     *  Select the views layout right arrow in the view layout
     */
    this.clickViewsRightArrow = function () {
        that.viewsRightArrow.click();
    };

    /**
     * Functions to work with the views flyout on the views table for sorting
     * @param viewsText to specify views table first column text
     * @param viewsArrow to specify arrow for sorting
     * @type {{getViewsFirstRowText: getViewsFirstRowText, clickViewsColumnHeading: clickViewsColumnHeading, getViewsFirstRowTextAfterSorting: getViewsFirstRowTextAfterSorting}}
     */
    this.selectViewAccordion = {

        /**
         * select views column sorting arrow
         * @param viewsText to specify arrow for sorting in views flyout
         */
        getViewsFirstRowText: function (viewsText) {
            return that.viewsNameFirstRowText.get(viewsText).getText();
        },

        /**
         * select views column sorting arrow
         * @param viewsArrow to specify arrow for sorting
         */
        clickViewsColumnHeading: function (viewsArrow) {
            that.viewsColumnHeading.get(viewsArrow).click();
            that.viewsColumnHeading.get(viewsArrow).click();
        },

        /**
         * get first row text in the views name column after sorting
         * @param viewsText to specify views table first column text after sorting
         */
        getViewsFirstRowTextAfterSorting: function (viewsText) {
            that.viewsNameFirstRowText.get(viewsText).getText();
        }
    };

    /**
     *  Select the switch between my views to all views button in views layout
     */
    this.switchBetweenViews = function () {
        this.switchToViews.click();
    };

    /**
     *  Select the down arrow for collapsible views table in views layout
     */
    this.clickDownArrow = function () {
        this.downArrow.click();
    };

    /**
     *  Select the close button to close the layout
     */
    this.clickCloseButton = function () {
        this.layoutCloseBtn.isPresent().then(function (ispresent) {
            if (ispresent) {
                that.layoutCloseBtn.click();
            }
        });
    };

    /**
     *  Select the drawer up arrow for close the control panel drawer
     */
    this.clickDrawerUpArrow = function () {
        that.drawerUpBtn.click();
    };

    /** To click the date icon for data layer and check the modal title
     * @author kesavamahalingam nagendran
     * @param dateIconIndex
     */
    this.selectDateIconAndCheckTitle = {

        /**
         * To click the date icon for data layers
         * @param dateIconIndex To pass the index for date icon
         */
        clickDateIconForLayer: function (dateIconIndex) {
            that.dateIconForLayer.get(dateIconIndex).click();
        },

        /**
         * To get the title of the date model window
         * @returns To return the title of the window
         */
        checkCalendarModelTitle: function () {
            return that.calendarModalTitle.getText();
        }
    };

    /** To click the left arrow button for moving old year and check the processed year
     * @author kesavamahalingam nagendran
     * @param index starts with 0
     * @param option count of times moving back to processed year
     * @param monthIndex to select the months
     * @param processedYear to pass the processed year
     */
    this.checkProcessedDates = function (index, option, monthIndex, processedYear) {
        for (var i = index; i < option; i++) {
            that.leftArrowButton.click();
            that.currentYearDisplay.getText().then(function (yearText) {
                if (yearText == processedYear) {
                    that.monthButtons.get(monthIndex).click();
                }
            });
        }
    };

    /**
     * To close the calendar modal window
     */
    this.clickCalendarCloseIcon = function () {
        that.calendarCloseIcon.click();
    };

    /**
      * Select the Summary content Details
      * @param summaryDetailsIndex
      * @returns {*}
      */
    this.getSummaryContentDetailsText = function (summaryDetailsIndex) {
        return that.summaryContentDetails.get(summaryDetailsIndex).getText();
    };

    /**
      * Select the date in DatesTab
      * @param summaryIndex
      */
    this.clickSelectDates = function (summaryDate) {
        that.selectDates.get(summaryDate).click();
    };

    /**
     * To get the text for selected dates
     * @returns returns the text of the selected dates
     */
    this.getSelectedDatesText = function () {
        return that.selectedDatesLabel.getText();
    };

    /**
     * Select the Summary content
     * @param summaryIndex
     * @returns {*}
     */
    this.getSummaryContentText = function (summaryIndex) {
        return that.summaryContent.get(summaryIndex).getText()
    };

    /**
      * To mouse hover on the Summary content Details
      * @param summaryDetailsIndex
      */
    this.mouseHoverOnSummaryContent = function (summaryDetailsIndex) {
        browser.actions().mouseMove(that.summaryContentDetails.get(summaryDetailsIndex)).perform();
    };

    /**
     * To get the tooltip text in summary content
     * @param summaryDetailsIndex
     * @returns returns the tooltip text
     */
    this.getSummaryContentTooltipText = function (summaryDetailsIndex) {
        return that.summaryContentDetails.get(summaryDetailsIndex).getAttribute('title');
    };

    /**
     * To drag and drop the both left and right time sliders
     * @type {{dragLeftSlider: Function, dragRightSlider: Function}}
     */
    this.dragAndDropTimeSlider = {

        /**
         * To drag and drop the left time slider
         */
        dragLeftSlider: function () {
            that.leftSlider.isDisplayed().then(function (isDisplayed) {
                if (isDisplayed) {
                    browser.actions().dragAndDrop(that.leftSlider, {x: 150}).perform();
                    browser.actions().dragAndDrop(that.leftSlider, {x: -150}).perform();
                }
            });
        },

        /**
         * To drag and drop the right time slider
         */
        dragRightSlider: function () {
            that.rightSlider.isDisplayed().then(function (isDisplayed) {
                if (isDisplayed) {
                    browser.actions().dragAndDrop(that.rightSlider, {x: -150, y: 0}).perform();
                    browser.actions().dragAndDrop(that.rightSlider, {x: 150, y: 0}).perform();
                }
            });
        }
    };

    /**
     * To click the continue button in calendar modal
     */
    this.clickContinueButton = function () {
        that.continueButton.isEnabled().then(function (isEnabled) {
            if (isEnabled) {
                that.continueButton.click();
            }
        });
    };
};

module.exports = ControlPanelDrawer;