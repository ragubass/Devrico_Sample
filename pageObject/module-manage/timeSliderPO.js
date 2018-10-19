/**
 * Created by kesav.sn on 31-Dec-14.
 */

/** create the page object design pattern for time slider page **/

var timeLoc = require('../../uiMap/uimap-manage/timeSliderLocators');

var timeSlider = function () {
    var that = this;
    this.dataManagement = element(timeLoc.dataManagement);
    this.dataLayer = element(timeLoc.dataLayer);
    this.dataSourceLink = element.all(timeLoc.dataSourceLink);
    this.leftSlider = element(timeLoc.leftSlider);
    this.rightSlider = element(timeLoc.rightSlider);
    this.continueButton = element(timeLoc.continueButton);
    this.dataMgtText = element(timeLoc.dataManagementText);

    this.clickDataManagement = function () {
        that.dataManagement.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.dataManagement.click();
            }
        });
    };

    this.checkDataMgtText = function () {
        return this.dataMgtText.getText();
    };

    this.clickDatalayerTab = function () {
        that.dataLayer.isDisplayed().then(function (isDisplay) {
            if (isDisplay) {
                that.dataLayer.click();
            }
        });
    };

    this.clickDataSourceLink = function () {
        that.dataSourceLink.get(0).click();
    };

    this.dragLeftSlider = function () {
        that.leftSlider.isDisplayed().then(function (isDisplayed) {
            if (isDisplayed) {
                browser.actions().dragAndDrop(that.leftSlider, {x: 150}).perform();
                browser.actions().dragAndDrop(that.leftSlider, {x: -150}).perform();
            }
        });
    };

    this.dragRightSlider = function () {
        that.rightSlider.isDisplayed().then(function (isDisplayed) {
            if (isDisplayed) {
                browser.actions().dragAndDrop(that.rightSlider, {x: -150, y: 0}).perform();
                browser.actions().dragAndDrop(that.rightSlider, {x: 150, y: 0}).perform();
            }
        });
    };

    this.clickContinueButton = function () {
        that.continueButton.isEnabled().then(function (isEnabled) {
            if (isEnabled) {
                that.continueButton.click();
            }
        });
    };

    this.acceptAlert = function () {
        browser.switchTo().alert().then(function (alert) {
            alert.accept();
        });
    };
};

module.exports = timeSlider;