/**
 * Created by kesav.sn on 12-Feb-15.
 */

var viewLoc = require('../../uiMap/uimap-manage/viewstabLocators');

var ViewsDefaultLandingPage = function () {
    var that = this;
    this.dataManagementLink = element(viewLoc.dataManagementLink);
    this.myViewsLink = element(viewLoc.myViewsLink);
    this.dataManagementText = element(viewLoc.dataManagementText);

    this.clickDataManagementLink = function () {
        that.dataManagementLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.dataManagementLink.click();
            }
        });
    };
    this.checkDataMgtText = function () {
        return this.dataManagementText.getText();
    };
};

module.exports = ViewsDefaultLandingPage;