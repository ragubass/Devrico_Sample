/**
 * Created by ragu.s on 1/5/2015.
 *
 * Clicking the Legend icon
 *
 * Check the colors and text beside colors .
 */

var calloc = require('../../uiMap/uimap-manage/calenderControlLocators');
var CalenderControl = function () {
    this.datamanagementLink = element(calloc.datamanagementLink);
    this.datalayersLink = element(calloc.datalayersLink);
    this.datasourceLink = element(calloc.datasourceLink);
    this.legendBtn = element(calloc.LegendBtn);
    this.closecalendercontrolWindow = element(calloc.calenderwindowcloseBtn);
    this.redcolorbesideText = element(calloc.RedcolorbesideTextCheck);
    this.redColor = element(calloc.RedcolorCheck);
    this.greencolorbesideText = element(calloc.GreencolorbesideTextCheck);
    this.greenColor = element(calloc.GreencolorCheck);
    this.goldcolorbesideText = element(calloc.GoldcolorbesideTextCheck);
    this.goldColor = element(calloc.GoldcolorCheck);
    this.graycolorbesideText = element(calloc.GraycolorbesideTextCheck);
    this.grayColor = element(calloc.GraycolorCheck);
    this.blackcolorbesideText = element(calloc.BlackcolorbesideTextCheck);
    this.blakColor = element(calloc.BlackcolorCheck);
    this.clickdatamanagement = function () {
        this.datamanagementLink.click();
    };
    this.clickdatalayerlink = function () {
        this.datalayersLink.click();
    };
    this.clickdatasourcelink = function () {
        this.datasourceLink.click();
    };
    this.clickLegendButton = function () {
        this.legendBtn.click();
    };
    this.clickcalendercontrolcloseicon = function () {
        this.closecalendercontrolWindow.click();
    }
};
module.exports = CalenderControl;