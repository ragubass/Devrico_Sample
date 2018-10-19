/**
 * Created by kesav.sn on 03-Feb-15.
 */
var ddLoc = require('../../uiMap/uimap-manage/dropdownLocators');

/* To click the Paths link on Manage module */
exports.pathsLink = function pathsLink() {
    element(ddLoc.pathLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var pathLink = element(ddLoc.pathLink);
            pathLink.click();
        }
    });
};

/* To click the Filter link on Manage module */
exports.filtersLink = function filtersLink() {
    element(ddLoc.filterLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var filterLink = element(ddLoc.filterLink);
            filterLink.click();
        }
    });
};

/* To click the view link on Manage module */
exports.viewsLink = function viewsLink() {
    element(ddLoc.viewLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var viewLink = element(ddLoc.viewLink);
            viewLink.click();
        }
    });
};

/* To click the data layer link on Manage module */
exports.dataLayerLink = function dataLayerLink() {
    element(ddLoc.dataLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var dataLink = element(ddLoc.dataLink);
            dataLink.click();
        }
    });
};

/* To check the left border is displaying near the dropdown icon */
exports.checkDropdownIcon = function checkDropdownIcon() {
    element(ddLoc.dropDown).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            /*To locate the first column for all tabs filters,views,data layers */
            var dd = element.all(ddLoc.dropDown).get(0);
            /* To check the left border near the column name */
            expect(dd.isPresent()).toBe(true);
            dd.click();
        }
    });
};

