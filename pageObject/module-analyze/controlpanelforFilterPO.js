/**
 * Created by saravanan.k on 3/30/2015.
 */


var loc = require('../../uiMap/uimap-analyze/controlpanelforFilterLocators.js');

exports.analyze = function analyze() {
    element(loc.navigationpageloc).click();
    element(loc.analyzeloc1).click();
};

exports.Filterlink = function Filterlink() {
    element(loc.Filterlinkloc).click();
};

exports.controlpanel = function controlpanel() {
    element(loc.controlpanelloc).click();
};

exports.Selectdata = function Selectdata() {
    element(loc.SelectDataastericksloc).click();
};

exports.selectname = function selectname() {
    element(loc.selectnameloc).click();
};

exports.datalayerselect = function datalayerselect() {
    element.all(loc.datalayerselectloc).get(0).click();
};

exports.selectfilter = function selectfilter() {
    element(loc.selectfilterloc).click();
};

exports.selectfilterbuttontextclick = function selectfilterbuttontextclick() {
    element(loc.selectfilterbuttontextloc).click()
};

exports.selectfilterdropdown = function selectfilterdropdown() {
    var filterdropdown2list = element.all(loc.selectfilterdropdownloc);
    filterdropdown2list.get(2).click()

};

exports.filterribbiontext = function filterribbiontext() {
    var filterribbiontextvalue = element(loc.filterribbiontextloc).getText();
    filterribbiontextvalue.then(console.log);
    expect(filterribbiontextvalue).toContain('Select Filters');

};

exports.Allfilterribbiontext = function Allfilterribbiontext() {
    var Allfilterribbiontextvalue = element(loc.Allfilterribbiontextloc).getText();
    Allfilterribbiontextvalue.then(console.log);
    expect(Allfilterribbiontextvalue).toContain('Select Filters');

};

exports.SelectDataastericks = function SelectDataastericks() {
    var astericksvalue = element(loc.SelectDataastericksloc).getAttribute('style');
    astericksvalue.then(console.log);
    expect(astericksvalue).toContain('visibility: visible;');
};

exports.SelectDatesastericks = function SelectDatesastericks() {
    var astericksvalue = element(loc.SelectDatesnotastericksloc).getAttribute('style');
    astericksvalue.then(console.log);
    expect(astericksvalue).toContain('visibility: hidden;');
};

exports.Selectdatacalender = function Selectdatacalender() {
    var SelectdatacalenderText = element(loc.selectdatacalenderloc).getAttribute('ng-click');
    expect(SelectdatacalenderText).toContain('openCalendar');
};

exports.selectdatalayer = function selectdatalayer() {
    var Allfilterribbiontextvalue = element(loc.selectdatalayerloc).getText();
    Allfilterribbiontextvalue.then(console.log);
    expect(Allfilterribbiontextvalue).toContain('Data Source');
};

exports.datalayerribbiontext = function datalayerribbiontext() {
    var alldatalayerribbiontext = element(loc.datalayerribbiontextloc).getText();
    alldatalayerribbiontext.then(console.log);
    expect(alldatalayerribbiontext).toContain('Data Source');
};

exports.selectfilterbuttontext = function selectfilterbuttontext() {
    var firstselectfilterbuttontext = element(loc.selectfilterbuttontextloc).getText();
    firstselectfilterbuttontext.then(console.log);
    expect(firstselectfilterbuttontext).toContain('Attribute Filter');
};

exports.selectfilterbuttonalltext = function selectfilterbuttonalltext() {
    var ALLselectfilterbuttonalltext = element(loc.selectfilterbuttonalltextloc).getText();
    ALLselectfilterbuttonalltext.then(console.log);
    expect(ALLselectfilterbuttonalltext).toContain('Upload Filter File');
};

exports.filterribbontext = function filterribbontext() {
    var Filterribbontext = element(loc.filterribbontextloc).getText();
    Filterribbontext.then(console.log);
    expect(Filterribbontext).toContain('Upload Filter File');
};

exports.savebuttontext = function savebuttontext() {
    var buttontext = element(loc.savebuttontextloc).getText();
    buttontext.then(console.log);
    expect(buttontext).toContain('Save');
};

//Validate the Filters Control Panel may only create filters Step
exports.ValidateControlPanelFilters = function ValidateControlPanelFilters() {
    exports.analyze();
    exports.Filterlink();
    exports.controlpanel();
    exports.filterribbiontext();
};

//2.Validate the Filters Control Panel contains the following Ribbons
exports.ValidateFilterRibbonsTexts = function ValidateFilterRibbonsTexts() {
    exports.filterribbiontext();
};

//Validate the Ribbons may be selected dynamically (not accessible only is a specified order)
exports.ValidatetheRibbonsTextorder = function ValidatetheRibbonsTextorder() {
    exports.Allfilterribbiontext();
};

//Validate Select Dates is not a required field for Filter Creation Step
exports.Validatetheastericks = function Validatetheastericks() {
    exports.SelectDataastericks();
};

//Validate the 'Select Data' ribbon flyout displays all visible data layers with calendar icons by default Step
exports.Validatetheastericksnotrequired = function Validatetheastericksnotrequired() {
    exports.selectname();
    exports.SelectDatesastericks();
};

//Validate when the hidden layers are displayed on the 'Select Data' flyout ribbon they are displayed with calendar icons Step
exports.ValidateSelectdatacalender = function ValidateSelectdatacalender() {
    //exports.Selectdata();
    exports.Selectdatacalender();
};

exports.Validateselectdatalayer = function Validateselectdatalayer() {
    //exports.Selectdata();
    exports.selectdatalayer();
};

//Validate when the hidden layers are displayed on the 'Select Data' flyout ribbon they are displayed in alpha ascending order by default Step
exports.ValidateDataLayername = function ValidateDataLayername() {
    exports.datalayerselect();
    exports.datalayerribbiontext();
};

//Validate the user is able to choose a Data Layer name which populates the Control Panel Step
exports.ValidatetheFiltersribbonflyout = function ValidatetheFiltersribbonflyout() {
    exports.selectfilter();
    exports.selectfilterbuttontext();
};

exports.ValidateAttributeFilterdropdown = function ValidateAttributeFilterdropdown() {
    //exports.selectfilter();
    exports.selectfilterbuttontext();
};

exports.ValidatetheFitlerribbontext = function ValidatetheFitlerribbontext() {
    // exports.selectfilter();
    //exports.selectfilterdropdown();
    //exports.filterribbontext
};

exports.Validatethebuttons = function Validatethebuttons() {
    exports.savebuttontext();
};
