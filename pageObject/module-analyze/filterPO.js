/**
 * Created by kesav.sn on 08-Jan-15.
 */

var filLoc = require('./../../uiMap/uimap-analyze/filterLocators');

/* To click the Filter link on Analyze module */
exports.filterLink = function () {
    element(filLoc.filterLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var filterLink = element(filLoc.filterLink);
            filterLink.click();
        }
    });
};

/* To click the my filter link under the Filters tab */
exports.myFilterLink = function () {
    element(filLoc.myFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var myfilterlink = element(filLoc.myFilter);
            myfilterlink.click();
        }
    });
};

/* To select one filter and delete it */
var deletelink = element(filLoc.deleteLink);
exports.selectOneFilter = function () {
    var filterCount = element.all(filLoc.filterText);
    var totcount = filterCount.count();
    var deleteFilterText = filterCount.get(0).getText();
    element.all(filLoc.firstFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var oneFilter = element.all(filLoc.firstFilter).get(0);
            /* To click the first filter */
            oneFilter.click();
        }
    });

    /* To click the delete link for deleting */
    element(filLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    /* To click the 'ok' button for deleting selected filter */
    element(filLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(filLoc.okButton);
            okbutton.click();
            /* To check the deleted filter in my filter list whether its deleted or not */
        }
    });

    /* To click the ALL FILTERS link and check the deleted filter is deleted or not */
    element(filLoc.allFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allfilter = element(filLoc.allFilter);
            allfilter.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allFilterText = filterCount.get(i).getText();
                    expect(deleteFilterText).not.toEqual(allFilterText);
                }
            });
        }
    });
};

exports.selectManyFilters = function () {
    var filterCount = element.all(filLoc.filterText);
    var totcount = filterCount.count();
    var alltext = [];
    element.all(filLoc.firstFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            for (var i = 0; i < 2; i++) {
                var oneByOneFilter = element.all(filLoc.firstFilter).get(i);
                oneByOneFilter.click();
                alltext.push(filterCount.get(i).getText());
            }
        }
    });

    element(filLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    /* To click the 'ok' button for deleting selected filter */
    element(filLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(filLoc.okButton);
            okbutton.click();
        }
    });

    element(filLoc.allFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allfilter = element(filLoc.allFilter);
            allfilter.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allFilterTexts = filterCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allFilterTexts);
                    }
                }
            });
        }
    });
};

/* To select the 'Select All' check box for deleting all filters */
exports.selectAllFilters = function () {
    var filterCount = element.all(filLoc.filterText);
    var totcount = filterCount.count();
    var alltext = [];
    totcount.then(function (totalcount) {
        for (var i = 0; i < totalcount; i++) {
            var allFilterText = filterCount.get(i).getText();
            alltext.push(allFilterText);
        }
    });

    element(filLoc.selectAll).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var selectall = element(filLoc.selectAll);
            selectall.click();
        }
    });

    element(filLoc.deleteLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            deletelink.click();
        }
    });

    //* To click the 'ok' button for deleting selected filter *//**//*

    element(filLoc.okButton).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var okbutton = element(filLoc.okButton);
            okbutton.click();
        }
    });

    element(filLoc.allFilter).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allfilter = element(filLoc.allFilter);
            allfilter.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allFilterText = filterCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allFilterText);
                    }
                }
            });
        }
    });
};