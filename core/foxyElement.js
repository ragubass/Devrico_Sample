var StringUtil = require('../util/stringUtils');


/**
 * Calls to element may be chained to find elements within a parent.
 *
 * @param {string} name : Human-readable name of the web element
 * @param {webdriver.Locator} locator : webdriver locator
 * @return {ElementFinder}
 */
module.exports = function foxyElement(name, locator) {

    if (typeof name != 'string') {
        throw new TypeError("Invalid 'name' parameter: Expected a string");
    }

    _element = element(locator);
    _element.name = name;
    _element.myLocatorStr = locator.toString();

    _element = monkeyPatchElement(_element);

    var oldElement = _element.element;
    _element.element = function element(name, locator) {
        if (typeof name != 'string') {
            throw new TypeError("Invalid 'name' parameter: Expected a string");
        }

        retVal = oldElement.call(this, locator);
        retVal.name = name;
        retVal.myLocatorStr = locator.toString();
        retVal = monkeyPatchElement(retVal);
        return retVal;
    };

    return _element;
};


/**
 * Ensure element.all calls are wrapped within this custom module for elements
 *
 * @param {webdriver.Locator} locator : webdriver locator
 * @return {ElementArrayFinder}
 */
module.exports.all = function foxyElementAll(locator) {
    return element.all(locator);
};


/**
 * Monkey-patch the relevant Protractor web driver wrapped calls with logging
 *
 * @param {ElementFinder} _element : element finder object
 * @return {ElementFinder} : monekypatched element finder object
 */
function monkeyPatchElement(_element) {

    var oldSendKeys = _element.sendKeys;
    _element.sendKeys = function (text) {
        if (text.length) {
            console.log(StringUtil.format("Sending keys '{0}' to '{1}'", text, _element.name));
        }
        retVal = oldSendKeys.call(this, text);

        return retVal;
    };

    var oldClick = _element.click;
    _element.click = function () {
        console.log(StringUtil.format("Clicking on '{0}' ({1})", _element.name, _element.myLocatorStr));
        retVal = oldClick.call(this);
    };

    var oldClear = _element.clear;
    _element.clear = function () {
        console.log(StringUtil.format("Clearing out element '{0}' ({1})", _element.name, _element.myLocatorStr));
        retVal = oldClear.call(this);
    };

    var oldIsPresent = _element.isPresent;
    _element.isPresent = function () {
        presentObj = oldIsPresent.call(this);

        presentObj.then(function (present) {
            console.log(StringUtil.format("Element '{0}' ({1}) is {2}", _element.name, _element.myLocatorStr, (present) ? "present" : "not present"));
        }, function (err) {
            console.error("Element Error: " + err);
        });

        return presentObj;
    };

    var oldIsEnabled = _element.isEnabled;
    _element.isEnabled = function () {
        enabledObj = oldIsEnabled.call(this);
        enabledObj.then(function (enabled) {
            console.log(StringUtil.format("Element '{0}' ({1}) is {2}", _element.name, _element.myLocatorStr, (enabled) ? "enabled" : "not enabled"));
        }, function (err) {
            console.error("Element Error: " + err);
        });

        return enabledObj;
    };

    var oldIsSelected = _element.isSelected;
    _element.isSelected = function () {
        selectedObj = oldIsSelected.call(this);
        selectedObj.then(function (selected) {
            console.log(StringUtil.format("Element '{0}' ({1}) is {2}", _element.name, _element.myLocatorStr, (selected) ? "selected" : "not selected"));
        }, function (err) {
            console.error("Element Error: " + err);
        });

        return selectedObj;
    };

    var oldIsDisplayed = _element.isDisplayed;
    _element.isDisplayed = function () {
        displayedObj = oldIsDisplayed.call(this);
        displayedObj.then(function (displayed) {
            console.log(StringUtil.format("Element '{0}' ({1}) is {2}", _element.name, _element.myLocatorStr, (displayed) ? "displayed" : "not displayed"));
        }, function (err) {
            console.error("Element Error: " + err);
        });

        return displayedObj;
    };

    var oldGetText = _element.getText;
    _element.getText = function () {
        textObj = oldGetText.call(this);
        textObj.then(function (text) {
            console.log(StringUtil.format("Element '{0}' ({1}) has text {2}", _element.name, _element.myLocatorStr, text));
        }, function (err) {
            console.error("Element Error: " + err);
        });

        return textObj;
    };

    return _element;
} // End monkeyPatchElement