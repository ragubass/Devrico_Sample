/**
 * Created by ragu.s on 4/23/2015.
 * Removing Analyze landing page from Workspace Locators
 */
module.exports = {
    datamanagementLink: by.linkText('Data Management'),
    manageHeader: by.css('.container-fluid>h3'),
    ceaclassicHeader: by.className('media-heading'),
    datalayersLink: by.linkText('Data Layers'),
    analyzelandingpageTable: by.className('manage-main'),
    homeLink: by.linkText('Home')
};