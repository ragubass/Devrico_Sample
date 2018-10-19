/**
 * Created by sunil kumar on 03/10/15 .
 */

var loc = require('../../uiMap/uimap-login/forgotUsernameLocators');


exports.clickForgotUsernameLink = function clickForgotUsername() {

    element(loc.forgotUsernameLink).click();
    console.log('Test');
};

exports.enterUsernameAndSubmit = function enterUsernameAndSubmit(email) {
    element(loc.forgotUsernameField).sendKeys(email);
    element(loc.forgotUsernameSubmitButton).click();
};





