/**
 * Created by kesav.sn on 22-Jan-15.
 */

var filLoc = require('../../uiMap/uimap-analyze/filterInlineeditLocators');

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

/*To click the pencil icon next to filter name */
exports.clickPencilIcon = function () {

    element.all(filLoc.pencilIcon).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var pencilicon = element.all(filLoc.pencilIcon).get(0);
            pencilicon.click();
            expect(element(filLoc.inlineEditBox).isPresent()).toBe(true);
            /*To validate the filter name in an edit box */
            expect(element(filLoc.saveButton).isPresent()).toBe(true);
            /* To validate the new save button */

        }
    });
};

/* To click the pencil icon and type the new filter name in an edit box. Hit the enter */
exports.hitEnterKey = function hitEnterKey(filtername) {

    var editbox = element(filLoc.inlineEditBox);
    editbox.clear();
    /* To clear the edit box for type new filter name */
    editbox.sendKeys(filtername);
    /* To pass the new filter name */
    editbox.sendKeys(protractor.Key.ENTER);
    /*To press the enter key for saving the new filter name */

    /* To check whether the new filter name is saved or not */
    element.all(filLoc.newFilterText).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var newfiltername = element.all(filLoc.newFilterText).get(0).getText();
            expect(newfiltername).toEqual(filtername);
        }
    });

    /* To click the filter name column for sorting the filters */
    element(filLoc.filterNameColumn).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var filternamecolumn = element.all(filLoc.filterNameColumn).get(0);
            filternamecolumn.click();
            /* To check the alphabetical order for new filter name*/
            var filtername = element.all(filLoc.newFilterText).get(0).getText();
            filtername.then(function (txt) {
                console.log("New filter name is in first position" + ":" + " " + txt);
            });
        }

    });
};

/* To check the duplicate filter names and save button */
exports.checkDuplicateNames = function checkDuplicateNames(filtersname) {

    element.all(filLoc.pencilIcon).isEnabled().then(function (isEnabled) {

        if (isEnabled) {
            var firstpencilicon = element.all(filLoc.pencilIcon).get(0);
            firstpencilicon.click();
            var editbox1 = element(filLoc.inlineEditBox);
            /* To clear the edit box for type new filter name */
            editbox1.clear();
            /* To pass the new filter name */
            editbox1.sendKeys(filtersname);
            var savebutton = element(filLoc.saveButton);
            savebutton.click();
            var secondpencilicon = element.all(filLoc.pencilIcon).get(1);
            secondpencilicon.click();
            var editbox2 = element(filLoc.inlineEditBox);
            editbox2.clear();
            editbox2.sendKeys(filtersname);
            editbox2.sendKeys(protractor.Key.ENTER);
        }
    });

    /* To check the warning icon is display when enter duplicate filter name */
    element.all(filLoc.warningIcon).isDisplayed().then(function (isDisplay) {

        if (isDisplay) {
            var warnicon = element(filLoc.warningIcon);
            /*To move the mouse point to that warning icon */
            browser.actions().mouseMove(warnicon).perform();
            /* To get the popover text message */
            var warntext = element(filLoc.warnText).getText();
            /* To get that warning message also and check it*/
            expect(warntext).toEqual('Filter name already exists.');
        }
    });
};

/* To check the spinning icon while saving the new filter name in inline edit box */
exports.checkSpinningIcon = function checkSpinningIcon(filname) {

    element.all(filLoc.pencilIcon).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var firstpencilicon = element.all(filLoc.pencilIcon).get(0);
            firstpencilicon.click();
            var editbox = element(filLoc.inlineEditBox);
            editbox.clear();
            /* To clear the edit box for type new filter name */
            editbox.sendKeys(filname);
            /* To pass the new filter name */
        }
    });

    element(filLoc.saveButton).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var savebutton = element(filLoc.saveButton);
            savebutton.click();
            var disbox = element(filLoc.inlineEditBox);
            /* To check the inline edit box is disabled when saving the filter name */
            /* User not able to input into the inline edit box */
            expect(disbox.isPresent()).toBe(false);
        }
    });

};
