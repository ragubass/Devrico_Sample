/**
 * Created by ragu.s on 3/24/2015.
 * Analyze: Workspace: Control Panel - Select Data Flyout - Collapsible Groups page object model
 */
var collapsibleDataFlyoutLoc = require('../../uiMap/uimap-manage/collapsibleDataFlyoutLoc');
var CollapsibleDataFlyout = function () {
    var that = this;
    this.dataLayers = element(collapsibleDataFlyoutLoc.datalayersBtn);
    this.views = element(collapsibleDataFlyoutLoc.viewsBtn);
    this.viewsRightArrow = element.all(collapsibleDataFlyoutLoc.viewsrightarrowBtn);
    this.downArrow = element(collapsibleDataFlyoutLoc.downarrowBtn);
    this.groupHeader = element.all(collapsibleDataFlyoutLoc.groupsHeader);
    this.dataLayerGroup = element(collapsibleDataFlyoutLoc.datalayerGroup);
    this.dataLayerGroupCollaps = element(collapsibleDataFlyoutLoc.datalayergroupCollaps);
    this.viewsGroup = element(collapsibleDataFlyoutLoc.viewsGroup);
    this.viewGroupCollaps = element.all(collapsibleDataFlyoutLoc.viewsgroupCollaps);
    this.newView = element(collapsibleDataFlyoutLoc.newviewBtn);
    this.addFilter = element(collapsibleDataFlyoutLoc.addfilterBtn);
    this.addPath = element(collapsibleDataFlyoutLoc.addpathBtn);
    this.selectDates = element(collapsibleDataFlyoutLoc.selecteddatesBtn);
    this.tableFirstRowItem = element.all(collapsibleDataFlyoutLoc.tablefirstrowItem);
    this.dataLayerColumnHeading = element.all(collapsibleDataFlyoutLoc.datalayercolumnheadingClick);
    this.switchToViews = element(collapsibleDataFlyoutLoc.switchbetweenmyviewstoallviewsBtn);
    this.narrowBy = element(collapsibleDataFlyoutLoc.narrowbyLabel);
    this.tagsColumnHeading = element.all(collapsibleDataFlyoutLoc.tagscolumnheadingClick);
    this.tagsFirstRowItem = element.all(collapsibleDataFlyoutLoc.tagsfirstrowItem);
    this.clickDatalayerArrow = function (rowtext, arrow) {
        that.tableFirstRowItem.get(rowtext).getText();
        that.dataLayerColumnHeading.get(arrow).click();
        that.dataLayerColumnHeading.get(arrow).click();
    };
    this.dataLayerAfterSorting = function (rowtext) {
        that.tableFirstRowItem.get(rowtext).getText();
    };
    this.clickTagsColumnArrow = function (tagstext, tagsarrow) {
        that.tagsFirstRowItem.get(tagstext).getText();
        that.tagsColumnHeading.get(tagsarrow).click();
        that.tagsColumnHeading.get(tagsarrow).click();
    };
    this.tagsAfterSorting = function (tagstext) {
        that.tagsFirstRowItem.get(tagstext).getText();
    };
    this.clickDownArrow = function () {
        this.downArrow.click();
    };
    this.clickViewsRightArrow = function () {
        that.viewsRightArrow.click();
    };
    this.switchBetweenViews = function () {
        this.switchToViews.click();
    }
};
module.exports = CollapsibleDataFlyout;