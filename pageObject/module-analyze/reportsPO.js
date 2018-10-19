/**
 * Created by kesav.sn on 21-Jan-15.
 */

var repLoc = require('../../uiMap/uimap-analyze/reportsLocators');

/* To click the report link on Analyze module */
exports.reportLink = function () {
    element(repLoc.reportLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var reportLink = element(repLoc.reportLink);
            reportLink.click();
        }
    });
};

/* To click the my reports link under the Reports tab */
exports.myReportLink = function () {
    element(repLoc.myReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var myreportlink = element(repLoc.myReport);
            myreportlink.click();
        }
    });
};

/* To select one report and delete it */
var deletelink = element(repLoc.deleteLink);
exports.selectOneReport = function () {
    var reportCount = element.all(repLoc.ReportText);
    var totcount = reportCount.count();
    var deleteReportText = reportCount.get(0).getText();
    element.all(repLoc.firstReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var oneReport = element.all(repLoc.firstReport).get(0);
            /* To click the first report */
            oneReport.click();
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

    /* To click the ALL REPORTS link and check the deleted report is deleted or not */
    element(repLoc.allReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allreport = element(repLoc.allReport);
            allreport.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allReportText = reportCount.get(i).getText();
                    expect(deleteReportText).not.toEqual(allReportText);
                }
            });
        }
    });
};

exports.selectManyReports = function () {
    var reportCount = element.all(repLoc.ReportText);
    var totcount = reportCount.count();
    var alltext = [];
    element.all(repLoc.firstReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            for (var i = 0; i < 2; i++) {
                var oneByOneReport = element.all(repLoc.firstReport).get(i);
                oneByOneReport.click();
                alltext.push(reportCount.get(i).getText());
            }
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

    element(repLoc.allReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allreport = element(repLoc.allReport);
            allreport.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allReportTexts = reportCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allReportTexts);
                    }
                }
            });
        }
    });
};

/* To select the 'Select All' check box for deleting all reports */
exports.selectAllReports = function () {
    var reportCount = element.all(repLoc.ReportText);
    var totcount = reportCount.count();
    var alltext = [];
    totcount.then(function (totalcount) {
        for (var i = 0; i < totalcount; i++) {
            var allReportText = reportCount.get(i).getText();
            alltext.push(allReportText);
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

    element(repLoc.allReport).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var allreport = element(repLoc.allReport);
            allreport.click();
            totcount.then(function (totalcount) {
                for (var i = 0; i < totalcount; i++) {
                    var allReportText = reportCount.get(i).getText();
                    for (var j = 0; j < alltext.length; j++) {
                        expect(alltext[j]).not.toEqual(allReportText);
                    }
                }
            });
        }
    });
};