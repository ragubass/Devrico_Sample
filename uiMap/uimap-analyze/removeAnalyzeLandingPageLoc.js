/**
 * Created by ragu.s on 2/16/2015.
 *
 * Automate Removing Analyze landing page from Workspace locators
 */

module.exports = {
    managelinktext: by.linkText('Manage'),
    datamanagementlinktext: by.linkText('Data Management'),
    analyzelandingpagetablecss: by.css('body > div > div > div > div > div.content > div.cf-content-main > div > section > div > div'),
    CEAiconclick: by.css('body > div > cf-header > header > div.pull-left > div.cf-logo > a > img'),
    analyzeclick: by.linkText('Analyze')
};