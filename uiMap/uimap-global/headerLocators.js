/**
 * Created by rballantyne on 12/29/14.
 */

module.exports = {

    // The following is a function because it needs the user parameter in order to find the right thing
    landingPageUserName: function (user) {
        return by.cssContainingText('div.cf-top-nav a.ng-binding', user.firstname + ' ' + user.lastname);
    },
    logoutLink: by.linkText('Log Out'),
    headerUserName: by.css('a.delink'),
    logoImgLink: by.css('.cf-logo > a'),
    logoImg: by.css('.cf-logo > img'),
    ceaClassicLogo: by.css('.media > .pull-left.cf-classic-logo'),
    taglineText: by.css('.cf-tagline'),
    helpLink: by.linkText('Help'),
    contactUsLink: by.linkText('Contact Us'),
    contactUsModal: by.css('.modal-dialog'),
    contactUsModalHeader: by.css('.modal-dialog .modal-content .modal-header h3'),
    contactUsModalOkBtn: by.css('.modal-dialog .modal-footer button'),
    ceaClassicLink: by.css('.cf-classic > .media > .media-body > a'),
    ceaClassicContainer: by.css('.cf-classic'),

    //Breadcrumbs
    breadcrumbsContainer: by.css('ul.breadcrumb'),
    breadcrumbs: by.repeater('breadcrumb in breadcrumbs.getAll()'), /* To locate the breadcrumbs Text link */
    breadcrumbLink: by.css('span a'),
    breadcrumbsHomeLink: by.css('ul.breadcrumb > li:first-child span a'), /* To locate the breadcrumbs home link*/

    //Analyze Breadcrumbs
    breadcrumbsAnalyzeLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Configure Breadcrumbs
    breadcrumbsConfigureLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Discover Breadcrumbs
    breadcrumbsDiscoverLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Exec Dashboard Breadcrumbs
    breadcrumbsExecDashLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Manage Breadcrumbs
    breadcrumbsManageLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Monitor Breadcrumbs
    breadcrumbsMonitorLink: by.linkText('Home'), /* To locate the breadcrumbs home link*/

    //Non-Landing Page Header
    trayMenuHidden: by.css('header > div.pull-left > div.ng-hide'), //TODO: Get better locator for this
    trayMenuBtn: by.css('.cf-menu-button'),
    trayMenuContainer: by.css('.sidebar'),
    trayMenuHomeBtn: by.css('.sidebar i.fa-home')
};