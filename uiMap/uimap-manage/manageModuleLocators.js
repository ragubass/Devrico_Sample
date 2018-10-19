/**
 * Created by ckoerber on 5/12/15.
 */
module.exports = {
    manageMain: by.css('.cf-content-main'),
    manageHeader: by.css('.main-view section div.container-fluid > h3'),
    manageTabViews: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:first-child'), //TODO: Get locator
    manageTabViewsLink: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:first-child a'), //TODO: Get locator
    manageTabFilters: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(3)'), //TODO: Get locator
    manageTabFiltersLink: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(3) a'), //TODO: Get locator
    manageTabPaths: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(2)'), //TODO: Get locator
    manageTabPathsLink: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(2) a'), //TODO: Get locator
    manageTabDataLayers: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(4)'), //TODO: Get locator
    manageTabDataLayersLink: by.css('.cf-content-main div.container-fluid > ul.nav-tabs li:nth-child(4) a'), //TODO: Get locator
    tabDataLayersContent: by.css('.cf-content-main .manage-main cf-data-table.data-layers'), //TODO: Get locator
    dataLayerLink: by.partialLinkText('Data Layers'),
    viewsLink: by.linkText('Views'),
    myViewsLink: by.partialLinkText('MY VIEWS'),
    allViewsLink: by.partialLinkText('ALL VIEWS '),
    filtersLink: by.linkText('Filters'),
    myFiltersLink: by.partialLinkText('MY FILTERS'),
    allFiltersLink: by.partialLinkText('ALL FILTERS '),
    tabLayersDataTable: by.css('.manage-main.tab-content.ng-scope'),
    tabLayersDataTableHeader: by.repeater('col in colContainer.renderedColumns'),
    tabLayersDataTableDataRow: by.repeater('(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name'),
    tabLayersDataTableDataColumn: by.css('.ng-binding'),
    tabLayersDataTableHeaderCell: by.css('span.ng-binding'),
    tabLayersTabColumnMenuOptions: by.repeater('item in menuItems'),
    analyzeLandingPageTable: by.className('manage-main'),
    pathsLink: by.linkText('Paths'),
    myPathsLink: by.partialLinkText('MY PATHS'),
    allPathsLink: by.partialLinkText('ALL PATHS'),
    deleteLink: by.partialLinkText('Delete'),
    deleteWindowModal_Message: by.className('alert-message'),
    okBtn: by.buttonText('Ok'),
    deleteWindowModal_ContinueBtn: by.buttonText('Continue'),
    cancelBtn: by.buttonText('Cancel'),
    deleteWindowModal_CloseBtn: by.buttonText('Close'),
    dependancyWindowModal_TableHeaders: by.css('div.ui-grid-cell-contents > span.ng-binding'),
    selectCheckBox: by.css('[ng-click="selectButtonClick(row, $event)"]'),
    deleteWindowModal_Title: by.css('.modal-title.ng-binding'),
    searchTextBox: by.css('#cf-dt-search-bar > div > input'),
    searchErrorText: by.css('.text-danger.ng-binding'),
    editableId: by.id('editableInline'),
    editablePathId: by.css('#editableInputBox'),
    editableCancelId: by.id('editableCancel'),
    editableSaveId: by.id('editableSave'),
    editableWarningId: by.id('toggleStatus'),
    selectedNamesLink: by.css('.cell-temp.ng-scope>span'),
    selectNameLink: by.css('.ui-grid-cell.ng-scope.ui-grid-coluiGrid-003'),
    selectViewNameLink: by.css('.ui-grid-selection-row-header-buttons.ui-grid-icon-ok.ng-scope'),
    errorMessageText: by.css('div.popover div.popover-inner div.popover-content'),
    dropDownOptions : by.css(' li:nth-child(2) > div > div > select')
};