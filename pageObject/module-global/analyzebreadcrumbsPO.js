/**
 * Created by jayaganapathi.e on 2/12/2015.
 */
var manageLoc = require('../../uiMap/uimap-global/manageBreadcrumbLocaters');

var Breadcrumbs = function () {
    var that = this;
    this.dataManagement = element(manageLoc.dataManagement);
    this.breadcrumbsText = element(manageLoc.breadcrumbsText);
    this.dataLayerLink = element(manageLoc.dataLayerLink);
    this.homeLink = element(manageLoc.homeLink);
    this.discovertab = element(manageLoc.discoverLink);
    this.dataMgtText = element(manageLoc.dataManagementText);

    this.clickDataLayer = function () {
        that.dataLayerLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.dataLayerLink.click();
            }
        });
    };

    this.checkDataMgtText = function () {
        return this.dataMgtText.getText();
    };

    this.clickDataManagement = function () {
        that.dataManagement.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.dataManagement.click();
            }
        });
    };
};
module.exports = Breadcrumbs;