/**
 * Created by ragu.s on 2/16/2015.
 * Automate Removing Analyze landing page from Workspace page object model
 */
var removeanalyzelandingloc = require('../../uiMap/uimap-manage/removeAnalyzeLandingPageLoc.js');
var RemoveAnalyzeLandingPage = function () {
    this.datamanagement = element(removeanalyzelandingloc.datamanagementLink);
    this.datalayersLink = element(removeanalyzelandingloc.datalayersLink);
    this.manageheader = element(removeanalyzelandingloc.manageHeader);
    this.ceaclassicheader = element(removeanalyzelandingloc.ceaclassicHeader);
    this.analyzeLandingPageTable = element(removeanalyzelandingloc.analyzelandingpageTable);
    this.home = element(removeanalyzelandingloc.homeLink);
    this.clickDataManagement = function () {
        this.datamanagement.click();
    }
};
module.exports = RemoveAnalyzeLandingPage;