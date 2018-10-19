/**
 * Created by rballantyne on 12/29/14.
 *
 * Page object for the menubar at the top of the page.
 */

var user = require('../../core/CEAUserList');
var loc = require('../../uiMap/uimap-global/headerLocators');
var floc = require('../../uiMap/uimap-global/footerLocators');

var GlobalElements = function () {
    var that = this;
    this.logoutLink = element(loc.logoutLink);
    this.logoImg = element(loc.logoImg);
    this.logoImgLink = element(loc.logoImgLink);
    this.ceaClassicLink = element(loc.ceaClassicLink);
    this.headerUserName = element(loc.headerUserName);
    this.helpLink = element(loc.helpLink);
    this.contactUsLink = element(loc.contactUsLink);
    this.contactUsModal = element(loc.contactUsModal);
    this.contactUsModalHeader = element(loc.contactUsModalHeader);
    this.contactUsModalOkBtn = element(loc.contactUsModalOkBtn);

    //Breadcrumbs
    this.breadcrumbContainer = element(loc.breadcrumbsContainer);
    this.breadcrumbs = element.all(loc.breadcrumbs);
    this.breadcrumbsLoc = loc.breadcrumbs;
    this.breadcrumbLink = element(loc.breadcrumbLink);
    this.breadcrumbLinkLoc = loc.breadcrumbLink;
    this.breadcrumbHomeLink = element(loc.breadcrumbsHomeLink);

    //Footer
    this.footerCopyrightText = element(floc.footerCopyrightText);

    /** Click Logout Link located within header
     * @author Chris Koerber
     */
    this.clickLogout = function () {
        this.logoutLink.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.logoutLink.click();
            }
        });

    };

    /** Access userInfo object within local storage to get active user name
     * @author Chris Koerber
     * @returns name of active user
     */
    this.getLocalStorageActiveUser = function () {
        return browser.executeScript("return window.localStorage.getItem('userInfo');").then(function (value) {
            var userObj = JSON.parse(value);
            return userObj.user.name;
        });
    };

    /** Access user name from header element
     * @author Chris Koerber
     * @returns name of user from the text located within header
     */
    this.getUserName = function () {
        return this.headerUserName.getText();
    };

    /** Create string from CEAUserList of Users First and Last name for comparison
     * @author Chris Koerber
     * @param userName from CEAUserList
     * @returns {string}
     */
    this.getUserFirstLastName = function (userName) {
        return user.authUsers[userName].firstname + " " + user.authUsers[userName].lastname;
    };

    /** Get CEA Logo source
     * @author Chris Koerber
     * @returns src of the CEA logo
     */
    this.getLogoSrc = function () {
        return that.logoImg.getAttribute("src").then(function (value) {
            return value;
        });
    };

    /** Click the CEA Logo
     * @author Chris Koerber
     */
    this.clickLogo = function () {
        this.logoImgLink.click();
    };

    /** Click the CEA Classic link in header
     * @author Chris Koerber
     */
    this.clickClassicCea = function () {
        this.ceaClassicLink.click();
    };

    /** Click the Help dropdown then click the only option 'Contact Us'
     * @author Chris Koerber
     */
    this.clickHelpContactUs = function () {
        this.helpLink.click();
        this.contactUsLink.click();
    };

    /** Click the ok button within Contact Us modal to close it
     * @author Chris Koerber
     */
    this.clickContactUsModalOkBtn = function () {
        this.contactUsModalOkBtn.click();
    };

    /** Get the CEA Logo href
     * @author Chris Koerber
     * @returns href of CEA Logo
     */
    this.getLogoHref = function getLogoHref() {
        return that.logoImgLink.getAttribute('href').then(function (href) {
            if (href) {
                return href;
            }
        });
    };

    /** Get the CEA Classic href
     * @author Chris Koerber
     * @returns href of CEA Classic link
     */
    this.getClassicCeaHref = function () {
        return that.ceaClassicLink.getAttribute('href').then(function (href) {
            if (href) {
                return href;
            }
        });
    };

    /**
     *
     * @type {{getHomeText: getHomeText, clickHome: clickHome, getCrumbCount: getCrumbCount, getCrumbText: getCrumbText, getCrumbHref: getCrumbHref, clickCrumb: clickCrumb}}
     */
    this.breadcrumbs = {
        /** Get Breadcrumb Home Text
         * @author Chris Koerber
         * @return text from Home Breadcrumb
         */
        getHomeText: function () {
            return that.breadcrumbHomeLink.getText().then(function (text) {
                return text;
            });
        },

        /** Click Breadcrumb Home Link
         * @author Chris Koerber
         */
        clickHome: function () {
            that.breadcrumbHomeLink.isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.breadcrumbHomeLink.click();
                }
            });
        },

        /** Get Breadcrumb Count minus Home Link which isn't included within breadcrumbs
         * @author Chris Koerber
         * @returns count of breadcrumb links
         */
        getCrumbCount: function () {
            return that.breadcrumbContainer.all(that.breadcrumbsLoc).count();
        },

        /** Get Breadcrumb Text
         * @author Chris Koerber
         * @param crumbIndex - Breadcrumb you want text for. 0 based.
         * @return text from selected breadcrumb
         */
        getCrumbText: function (crumbIndex) {
            return that.breadcrumbContainer.all(that.breadcrumbsLoc).get(crumbIndex).getText().then(function (text) {
                return text;
            });
        },

        /** Get Breadcrumb Href
         * @author Chris Koerber
         * @param crumbIndex - Breadcrumb you want href for. 0 based.
         * @return href from selected breadcrumb
         */
        getCrumbHref: function (crumbIndex) {
            return that.breadcrumbContainer.all(that.breadcrumbsLoc).get(crumbIndex).element(that.breadcrumbLinkLoc).getAttribute('href').then(function (href) {
                if (href) {
                    return href;
                }
            });
        },

        /** Click Breadcrumb Link
         * @author Chris Koerber
         * @param crumbIndex - Breadcrumb you want to click
         */
        clickCrumb: function (crumbIndex) {
            that.breadcrumbContainer.all(that.breadcrumbsLoc).get(crumbIndex).element(that.breadcrumbLinkLoc).isPresent().then(function (isPresent) {
                if (isPresent) {
                    that.breadcrumbContainer.all(that.breadcrumbsLoc).get(crumbIndex).element(that.breadcrumbLinkLoc).click();
                }
            });
        }
    };
};

module.exports = GlobalElements;