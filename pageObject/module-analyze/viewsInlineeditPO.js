/**
 * Created by jayaganapathi.e on 2/2/2015.
 */

var viewsLoc = require('../../uiMap/uimap-analyze/viewsInlineeditLocaters');

/* To click the views link on Analyze module */

exports.viewsLink = function () {

    element(viewsLoc.viewsLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var viewsLink = element(viewsLoc.viewsLink);
            viewsLink.click();
        }
    });
};

/* To click the myviews link under the views tab */

exports.myViewsLink = function () {

    element(viewsLoc.myViewsLink).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var myviewslink = element(viewsLoc.myViewsLink);
            myviewslink.click();
        }
    });
};

/*To click the pencil icon next toviews name */

exports.clickPencilIcon = function () {

    element.all(viewsLoc.pencilIcon).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var pencilicon = element.all(viewsLoc.pencilIcon).get(0);
            pencilicon.click();
            expect(element(viewsLoc.inlineEditBox).isPresent()).toBe(true);
            /*To validate theviews name in an edit box */
            expect(element(viewsLoc.saveButton).isPresent()).toBe(true);
            /* To validate the new save button */

        }
    });
};

/* To click the pencil icon and type the newviews name in an edit box. Hit the enter */

exports.hitEnterKey = function hitEnterKey(viewsname) {

    var editbox = element(viewsLoc.inlineEditBox);
    editbox.clear();
    /* To clear the edit box for type newviews name */
    editbox.sendKeys(viewsname);
    /* To pass the newviews name */
    editbox.sendKeys(protractor.Key.ENTER);
    /*To press the enter key for saving the newviews name */

    /* To check whether the newviews name is saved or not */

    element.all(viewsLoc.newViewsText).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var newviewsname = element.all(viewsLoc.newViewsText).get(0).getText();
            expect(newviewsname).toEqual(viewsname);
        }
    });

    /* To click the views name column for sorting theviewss */

    element(viewsLoc.viewsNameColumn).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var viewsnamecolumn = element.all(viewsLoc.viewsNameColumn).get(0);
            viewsnamecolumn.click();
            /* To check the alphabetical order for newviews name*/
            var viewsname = element.all(viewsLoc.newViewsText).get(0).getText();
            viewsname.then(function (txt) {
                console.log("New views name is in first position" + ":" + " " + txt);
            });
        }

    });
};

/* To check the duplicateviews names and save button */

exports.checkDuplicateNames = function checkDuplicateNames(viewsname) {

    element.all(viewsLoc.pencilIcon).isEnabled().then(function (isEnabled) {

        if (isEnabled) {
            var firstpencilicon = element.all(viewsLoc.pencilIcon).get(0);
            firstpencilicon.click();
            var editbox1 = element(viewsLoc.inlineEditBox);
            /* To clear the edit box for type newviews name */
            editbox1.clear();
            /* To pass the newviews name */
            editbox1.sendKeys(viewsname);
            var savebutton = element(viewsLoc.saveButton);
            savebutton.click();
            var secondpencilicon = element.all(viewsLoc.pencilIcon).get(1);
            secondpencilicon.click();
            var editbox2 = element(viewsLoc.inlineEditBox);
            editbox2.clear();
            editbox2.sendKeys(viewsname);
            editbox2.sendKeys(protractor.Key.ENTER);
        }
    });

    /* To check the warning icon is display when enter duplicateviews name */

    element.all(viewsLoc.warningIcon).isDisplayed().then(function (isDisplay) {

        if (isDisplay) {
            var warnicon = element(viewsLoc.warningIcon);
            /*To move the mouse point to that warning icon */
            browser.actions().mouseMove(warnicon).perform();
            /* To get the popover text message */
            var warntext = element(viewsLoc.warnText).getText();
            /* To get that warning message also and check it*/
            expect(warntext).toEqual('View name already exists.');
        }
    });
};

/* To check the spinning icon while saving the newviews name in inline edit box */

exports.checkSpinningIcon = function checkSpinningIcon(filname) {

    element.all(viewsLoc.pencilIcon).isEnabled().then(function (isEnabled) {
        if (isEnabled) {
            var firstpencilicon = element.all(viewsLoc.pencilIcon).get(0);
            firstpencilicon.click();
            var editbox = element(viewsLoc.inlineEditBox);
            editbox.clear();
            /* To clear the edit box for type newviews name */
            editbox.sendKeys(filname);
            /* To pass the newviews name */
        }
    });

    element(viewsLoc.saveButton).isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
            var savebutton = element(viewsLoc.saveButton);
            savebutton.click();
            var disbox = element(viewsLoc.inlineEditBox);
            /* To check the inline edit box is disabled when saving theviews name */
            /* User not able to input into the inline edit box */
            expect(disbox.isPresent()).toBe(false);
        }
    });

};
