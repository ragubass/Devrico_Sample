/**
 * Created by kesav.sn on 02-Feb-15.
 */


var repLoc = require('../../uiMap/uimap-analyze/viewLocators');

/* To click the report link on Analyze module */
exports.viewLink = function () {
    element(repLoc.viewLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var viewLink = element(repLoc.viewLink);
            viewLink.click();
        }
    });
};

/* To click the my views link under the views tab */
exports.myViewLink = function () {
    element(repLoc.myView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var myviewlink = element(repLoc.myView);
            myviewlink.click();
        }
    });
};

/* To select one view and delete it */
var deletelink = element(repLoc.deleteLink);

exports.selectOneView = function () {

    var viewCount = element.all(repLoc.viewText);
    var totcount = viewCount.count();
    var deleteviewText = viewCount.get(0).getText();

    element.all(repLoc.firstView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var oneView = element.all(repLoc.firstView).get(0);
            /* To click the first view */
            oneView.click();
        }
    });

    /* To click the delete link for deleting */
    element(repLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    /* To click the 'ok' button for deleting selected view */
    element(repLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(repLoc.okButton);
            okbutton.click();
        }
    });

    /* To click the ALL VIEWS link and check the deleted view is deleted or not */
    element(repLoc.allView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allview = element(repLoc.allView);
            allview.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allviewText = viewCount.get(i).getText();
                    expect(deleteviewText).not.toEqual(allviewText);
                }
            });
        }
    });
};

exports.selectManyViews = function () {

    var viewCount = element.all(repLoc.viewText);
    var totcount = viewCount.count();
    var alltext = [];

    element.all(repLoc.firstView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            for (var i = 0; i < 2; i++) {
                var oneByOneView = element.all(repLoc.firstView).get(i);
                oneByOneView.click();
                alltext.push(viewCount.get(i).getText());
            }
        }
    });

    /* To click the delete link for deleting */
    element(repLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    /* To click the 'ok' button for deleting selected view */
    element(repLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(repLoc.okButton);
            okbutton.click();
        }
    });

    element(repLoc.allView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allview = element(repLoc.allView);
            allview.click();
            totcount.then(function (totalcount) {

                for (var i = 0; i < totalcount; i++) {
                    var allViewTexts = viewCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allViewTexts);
                    }
                }
            });
        }
    });
};

/* To select the 'Select All' check box for deleting all view */
exports.selectAllViews = function () {
    var viewCount = element.all(repLoc.viewText);
    var totcount = viewCount.count();
    var alltext = [];

    totcount.then(function (totalcount) {
        for (var i = 0; i < totalcount; i++) {
            var allViewText = viewCount.get(i).getText();
            alltext.push(allViewText);
        }
    });

    element(repLoc.selectAll).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var selectall = element(repLoc.selectAll);
            selectall.click();
        }
    });

    /* To click the delete link for deleting */
    element(repLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    /* To click the 'ok' button for deleting selected report */
    element(repLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(repLoc.okButton);
            okbutton.click();
        }
    });

    element(repLoc.allView).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allview = element(repLoc.allView);
            allview.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allViewText = viewCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allViewText);
                    }
                }
            });
        }
    });
};