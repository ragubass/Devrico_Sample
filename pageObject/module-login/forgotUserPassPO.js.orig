/**
 * Created by sunil kumar on 03/10/15 .
 */

var loc = require('../../uiMap/uimap-login/forgotPasswordLocators');
var uloc = require('../../uiMap/uimap-login/forgotUsernameLocators');

var forgotPassword = function () {
    this.forgotPasswordField = element(loc.forgotPasswordField);
    this.forgotPasswordSubmitButton = element(loc.forgotPasswordSubmitButton);
    this.forgotPasswordServiceMessage = element(loc.forgotPasswordServiceMessage);
    this.forgotPasswordTitle = element(loc.forgotPasswordTitle);
    this.forgotPasswordEmailFieldText = element(loc.forgotPasswordEmailFieldText);
    this.forgotPasswordBackButton = element(loc.forgotPasswordBackButton);

    this.forgotUsernameField = element(uloc.forgotUsernameField);
    this.forgotUsernameSubmitButton = element(uloc.forgotUsernameSubmitButton);
    this.forgotUsernameServiceMessage = element(uloc.forgotUsernameServiceMessage);

    this.enterPasswordAndSubmit = function enterPasswordAndSubmit(email) {
        this.forgotPasswordField.sendKeys(email);
        this.forgotPasswordSubmitButton.click();
    };

//// forgot password title
//    this.forgotPasswordTitle = function forgotPasswordTitle() {
//        return this.forgotPasswordTitle.getText().then(function(value){
//            return value;
//        });
//
//    };

// forgot password email text
    this.forgotPasswordEmailText = function forgotPasswordEmailText() {
        return this.forgotPasswordEmailText.getText().then(function (value) {
            return value;
        });
    };

// back button is clickable
    this.clickForgotPasswordBackButton = function clickForgotPasswordBackButton() {
        this.forgotPasswordBackButton.click();
    };

    /**
     * submit button is present
     * @returns {ElementFinder}
     */
    this.isSubmitButtonPresent = function isSubmitButtonPresent() {
        return this.forgotPasswordSubmitButton;
    };

    this.enterUsernameAndSubmit = function enterUsernameAndSubmit(email) {
        this.forgotUsernameField.sendKeys(email);
        this.forgotUsernameSubmitButton.click();
    };
};

module.exports = forgotPassword;