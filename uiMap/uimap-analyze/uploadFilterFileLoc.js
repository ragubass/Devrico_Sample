/**
 * Created by ragu.s on 2/17/2015.
 * Analyze: Filters Landing Page: Change Bulk FIlter to Upload Filter File locators
 */

module.exports = {
    filterslinkclick: by.linkText('Filters'),
    allfiltertypesdropdownclclick: by.css('.form-control.ng-pristine.ng-untouched.ng-valid.ng-scope'),
    selectallfiltertypesoption: by.css('option:nth-child(1)'),
    selectattributefilteroption: by.css('li:nth-child(2) > div > div > select > option:nth-child(2)'),
    selecteventfilteroption: by.css('option:nth-child(3)'),
    selectpathfilteroption: by.css('option:nth-child(4)'),
    selectuploadfilteroption: by.css('option:nth-child(5)'),
    matchedtablevalues: by.css('div:nth-child(2) > div > span')
};