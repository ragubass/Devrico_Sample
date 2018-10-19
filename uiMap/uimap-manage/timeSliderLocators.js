/**
 * Created by kesav.sn on 31-Dec-14.
 */
module.exports = {
    dataManagement: by.linkText('Data Management'),
    dataLayer: by.linkText('Data Layers'),
    dataSourceLink: by.css('div.ui-grid-cell-contents span.ng-scope a.ng-binding'),
    leftSlider: by.css('div.handle.handle-min'),
    rightSlider: by.css('div.handle.handle-max'),
    continueButton: by.css('[ng-click="go()"]'),
    dataManagementText: by.css('.container-fluid>h3')
};