/**
 * Created by jayaganapathi.e on 2/12/2015.
 */
module.exports = {
    dataManagement: by.linkText('Data Management'),
    dataLayerLink: by.partialLinkText('Data Layers'), /* To locate the Data Layers link in Analyze module */
    breadcrumbsText: by.css('ul.breadcrumb'), /* To locate the breadcrumbs Text link in Analyze module */
    homeLink: by.linkText('Home'), /* To locate the breadcrumbs  home link in Analyze module */
    discoverLink: by.partialLinkText('Discover'), /* To locate the Discover link in Home page */
    dataManagementText: by.css('.container-fluid>h3') /* To locate the dataManagement Text */
};