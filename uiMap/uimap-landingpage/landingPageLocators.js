/**
 * Created by ckoerber on 4/14/15.
 */
module.exports = {
    welcomeModal: by.css('div.modal > div.modal-dialog'),
    welcomeMsgModal_Nav: by.css('[ng-click="no()"]'),
    welcomeMsgModal_Classic: by.css('[ng-click="yes()"]'),
    //moduleAnalyze: by.id('module-analyze'),
    //moduleAnalyzeBtn: by.css('#module-analyze div.cf-btn-nav'),
    moduleAnalyzeBtn: by.linkText('Analyze'),
    //moduleConfigure: by.id('module-configure'),
    //moduleConfigureBtn: by.css('#module-configure > div.cf-btn-nav > a'),
    moduleConfigureBtn: by.linkText('Configure'),
    //moduleDiscover: by.id('module-discover'),
    //moduleDiscoverBtn: by.css('#module-discover div.cf-btn-nav'),
    moduleDiscoverBtn: by.linkText('Discover'),
    //moduleExecDash: by.id('module-exec-dashboard'),
    //moduleExecDashBtn: by.css('#module-exec-dashboard div.cf-btn-nav'),
    moduleExecDashBtn: by.linkText('Exec Dashboard'),
    //moduleManage: by.id('module-manage'),
    //moduleManageBtn: by.css('#module-manage div.cf-btn-nav'),
    moduleManageBtn: by.linkText('Manage'),
    //moduleMonitor: by.id('module-monitor'),
    //moduleMonitorBtn: by.css('#module-monitor div.cf-btn-nav'),
    moduleMonitorBtn: by.linkText('Monitor'),

    newsContainer: by.css('.cf-news'),
    newsItems: by.css('.cf-news > .media-list'),
    moreNewsLink: by.linkText('More News >'),  // Should be run in context of newsContainer for safety's sake
    sectionActivity: by.css('.cf-activity'),
    longNewsContainer: by.css('.long-news'),
    newsGoBackLink: by.linkText('Go Back'),

    //TODO: These need review before use. rball added these
    feedList: by.repeater('item in items'),
    titleLink: by.tagName('a'),  // needs to be run in context of a feedList item
    authorDate: by.css('div.media-body span')  // needs to be run in context of a feedList item
};