/**
 * Created by ragu.s on 2/16/2015.
 *
 * Automate Removing Analyze landing page from Workspace page object model
 */

var removeanalyzelandingloc = require('./removeAnalyzeLandingPageLoc');

this.managelink = function () {

    element(removeanalyzelandingloc.managelinktext).click();

};

this.datamanagementclick = function () {

    element(removeanalyzelandingloc.datamanagementlinktext).click();

};

this.analyzelandingpagereached = function () {

    expect(element(removeanalyzelandingloc.analyzelandingpagetablecss).isPresent()).toBeTruthy();
};

this.CEAiconimageclick = function () {

    element(removeanalyzelandingloc.CEAiconclick).click();
};

this.clickanalyzemodule = function () {

    element(removeanalyzelandingloc.analyzeclick).click();
};

this.analyzelandingpagenotreached = function () {

    expect(element(removeanalyzelandingloc.analyzelandingpagetablecss).isPresent()).toBeFalsy();
};
