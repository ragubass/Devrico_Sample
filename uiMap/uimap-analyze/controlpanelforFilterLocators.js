/**
 * Created by saravanan.k on 3/30/2015.
 */
module.exports = {
    navigationpageloc: by.buttonText('Navigation Page'),
    analyzeloc: by.buttonText('Analyze'),
    analyzeloc1: by.css('body > div > div > div > div > div.content > div > div > div > section.center-block.cf-main-nav > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > a'),
    Filterlinkloc: by.css('body > div > div > div > div > div.content > div > div > div > a:nth-child(1)'),
    controlpanelloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-header.dragme > a > i'),
    controlpaneltextloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-content > div > div > div > div.cf-control-panel'),
    filterribbiontextloc: by.css('#createFilterFlyout > label'),
    Allfilterribbiontextloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-content > div > div > div > div.cf-control-panel > ul'),
    SelectDataastericksloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-content > div > div > div > div.cf-control-panel > ul > li.list-group-item.selectable-item.selected-item > label > span'),
    SelectDatesnotastericksloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-content > div > div > div > div.cf-control-panel > ul > li.list-group-item.selectable-item.selected-item > label > span'),
    selectdataloc: by.css('.list-group-item.selectable-item>label'),
    selectnameloc: by.name('dates'),
    selectdatacalenderloc: by.css('#calenderBtn'),
    selectdatalayerloc: by.css('.textEllipsis.ng-binding'),
    datalayerselectloc: by.css('.ui-grid-selection-row-header-buttons.ui-grid-icon-ok.ng-scope'),
    datalayerribbiontextloc: by.css('.list-group-item.selectable-item.selected-item'),
    selectfilterloc: by.id('createFilterFlyout'),
    selectfilterbuttontextloc: by.css('body > div > div > div > div > div.content > div > div > div > cf-drawer.summary-view.ng-isolate-scope > div > div.drawer-content > div > div > div > div.cf-fly-out > div > ng-transclude > div > cf-create-filter-flyout > div > div > button'),
    selectfilterbuttonalltextloc: by.css('.dropdown-menu.ng-scope'),
    selectfilterdropdownloc: by.css('.dropdown-menu-list.ng-binding.ng-scope'),
    filterribbontextloc: by.css('#createFilterFlyout'),
    savebuttontextloc: by.buttonText('Save')
};