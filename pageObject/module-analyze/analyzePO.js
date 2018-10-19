/**
 * Created by ckoerber on 5/12/15.
 */
var HelperPO = require('../../pageObject/module-shared/poHelper');
var loc = require('../../uiMap/uimap-analyze/analyzeModuleLocators');

var POHelper = new HelperPO();
var AnalyzeModule = function () {
    var that = this;
    this.analyzeMain = element(loc.analyzeMain);
    this.pageHeader = element(loc.analyzeHeader);
    this.drawerDownArrow = element(loc.drawerCaretDownBtn);

    /**
     *  Select the drawer down arrow to open the control panel drawer
     */

    this.clickDrawerArrow = function () {
        that.drawerDownArrow.click();
    };
};
module.exports = AnalyzeModule;