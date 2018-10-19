/**
 * Created by ragu.s on 2/16/2015.
 * Workspace summary drawer and control panel drawer Locators
 */

module.exports = {

    //Drawer
    drawerLabelName: by.css('div.drawer-header.dragme > a'),
    selectDataTab: by.name('selectData'),
    selectDatesTab: by.name('dates'),
    analyzePathFlyoutTab: by.id('pathFlyout'),
    analyzeFiltersTab: by.id('filterFlyout'),
    saveViewBtn: by.buttonText('Save'),
    startOverBtn: by.buttonText('Start Over'),
    dataLayersBtn: by.buttonText('Data Layers'),
    viewsBtn: by.buttonText('Views'),
    viewsRightArrowBtn: by.css('div:nth-child(3) > div.toggle-button.right-arrow'),
    downArrowBtn: by.css('.toggle-button.down-arrow'),

    //data layer flyout
    groupsHeader: by.css('.collapse-header .title'),
    showHiddenLayersCheckBox: by.css('.ng-valid.ng-touched.ng-dirty.ng-valid-parse'),
    searchBox: by.css('#cf-dt-search-bar > div > input'),
    searchSendKeys: by.css('#cf-dt-search-bar > div > input'),
    dataLayerGroup: by.css('.cf-datalayer-wrapper'),
    dataLayerGroupCollaps: by.className('ng-hide'),
    dataLayerFirstRowText: by.css('.textEllipsis.ng-binding'),
    dataLayerColumnHeadingClick: by.css('.ng-binding'),
    dataTableLayerCheckBox: by.css('.ui-grid-selection-row-header-buttons.ui-grid-icon-ok.ng-scope'),
    dateIconForLayer: by.css('span#calenderBtn.calender-icon.fa.fa-calendar'),
    calendarModalTitle: by.css('.modal-title'),
    monthCalendarContainer: by.css('.calendar-container.well.well-sm'),
    leftArrowButton: by.css('[ng-click="move(-1)"]'),
    currentYearDisplay: by.css('strong.ng-binding'),
    monthButtons: by.css('[ng-click="select($event, dt)"]'),
    januaryCalendar: by.css('table.calendar.left'),
    firstProcessedDateBtn: by.buttonText('01'),
    calendarCloseIcon: by.css('[ng-click="close()"]'),
    leftSlider: by.css('div.handle.handle-min'),
    rightSlider: by.css('div.handle.handle-max'),
    continueButton: by.css('[ng-click="go()"]'),

    //view flyout
    newViewBtn: by.buttonText('New View'),
    narrowByLabel: by.css('.cf-dt-filter-label.narrowBy.ng-scope'),
    viewsGroup: by.className('cf-view-wrapper'),
    columnHeader: by.css('div > div > span.ng-binding'),
    viewsGroupCollaps: by.css('.ng-hide'),
    narrowByViewsDropdown: by.css('li.viewType.ng-scope.ng-isolate-scope > div > div > select'),
    narrowByOption: by.tagName('option'),
    switchBetweenMyViewsToAllViewsBtn: by.css('.cf-switchKnob'),
    addFilterBtn: by.buttonText('+ Add Filter(s)'),
    addPathBtn: by.buttonText('+ Add Path'),
    selectedDatesBtn: by.buttonText('Select Dates'),
    viewsNameFirstRowText: by.css('.textEllipsis.ng-binding'),
    viewsColumnHeadingArrow: by.css('.ui-grid-cell-contents'),
    matchedDataLayers: by.css('div:nth-child(1) > div.ui-grid-cell.ng-scope.ui-grid-coluiGrid-00D'),

    //select dates flyout
    jumptoDateBtn: by.buttonText('Jump to Date'),
    legendBtn: by.buttonText('Legend'),
    redColorBesideTextCheck: by.id('date-outdated'),
    greenColorBesideTextCheck: by.id('date-reported'),
    goldColorBesideTextCheck: by.id('date-uncertified'),
    grayColorBesideTextCheck: by.id('date-empty'),
    blackColorBesideTextCheck: by.id('date-bold'),
    selectDates: by.css('button > span'),
    selectedDatesLabel: by.css('span.selected-dates-label'),

    //Paths flyout
    newPathBtn: by.buttonText('New Path'),
    pathHeader: by.css('div > div > div.select-path > button'),

    //filters flyout
    filtersHeader: by.id('labeldiv'),
    narrowfiltersByTypeOption: by.css('.form-control.ng-pristine.ng-valid.ng-scope.ng-touched'),
    dataSourceValuesClick: by.css('label.ng-binding'),
    closeBtn: by.id('fclose'),
    drawerCloseBtn: by.css('.enable-border-bottom i.fa.clickme.fa-caret-up'),
    filterHeader: by.id('labeldiv'),

    //summary
    summaryContentDetails: by.css('div.summary-content dl dt.ng-binding'),
    summaryContent: by.css('.summary-content>dl>dd'),
    applyBtn: by.buttonText('APPLY'),
    resetBtn: by.buttonText('RESET')
};