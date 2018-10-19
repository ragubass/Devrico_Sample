/**
 * Created by ckoerber on 4/14/15.
 */
var loc = require('../../uiMap/uimap-landingpage/landingPageLocators');

var LandingPage = function () {
    var that = this;
    this.welcomeModalNavBtn = element(loc.welcomeMsgModal_Nav);
    this.welcomeModalClassicBtn = element(loc.welcomeMsgModal_Classic);
    this.moduleAnalyze = element(loc.moduleAnalyzeBtn);
    this.moduleAnalyzeBtn = element(loc.moduleAnalyzeBtn);
    this.moduleConfigure = element(loc.moduleConfigureBtn);
    this.moduleConfigureBtn = element(loc.moduleConfigureBtn);
    this.moduleDiscover = element(loc.moduleDiscoverBtn);
    this.moduleDiscoverBtn = element(loc.moduleDiscoverBtn);
    this.moduleExecDash = element(loc.moduleExecDashBtn);
    this.moduleExecDashBtn = element(loc.moduleExecDashBtn);
    this.moduleManage = element(loc.moduleManageBtn);
    this.moduleManageBtn = element(loc.moduleManageBtn);
    this.moduleMonitor = element(loc.moduleMonitorBtn);
    this.moduleMonitorBtn = element(loc.moduleMonitorBtn);

    this.newsContainer = element(loc.newsContainer);
    this.newsItems = element(loc.newsItems);
    this.moreNewsLink = element(loc.moreNewsLink);
    this.longNewsContainer = element(loc.longNewsContainer);
    this.newsGoBackLink = element(loc.newsGoBackLink);

    this.clickWelcomeModalNav = function () {
        that.welcomeModalNavBtn.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.welcomeModalNavBtn.click();
            }
        });
    };

    this.clickWelcomeModalClassic = function () {
        that.welcomeModalClassicBtn.isPresent().then(function (isPresent) {
            if (isPresent) {
                that.welcomeModalClassicBtn.click();
            }
        });
    };

    this.clickModAnalyze = function () {
        this.moduleAnalyzeBtn.click();
    };

    this.clickModConfigure = function () {
        this.moduleConfigureBtn.click();
    };

    this.clickModDiscover = function () {
        this.moduleDiscoverBtn.click();
    };

    this.clickModExecDash = function () {
        this.moduleExecDashBtn.click();
    };

    this.clickModManage = function () {
        this.moduleManageBtn.click();
    };

    this.clickModMonitor = function () {
        this.moduleMonitorBtn.click();
    };
};

module.exports = LandingPage;