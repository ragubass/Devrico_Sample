/**
 * Created by rballantyne on 11/11/14.
 */

var HelperPO = require('../module-shared/poHelper');
var loc = require('../../uiMap/uimap-login/loginLocators');

var POHelper = new HelperPO();
var Login = function () {
    var that = this;
    this.usernameField = element(loc.usernameField);
    this.passwordField = element(loc.passwordField);
    this.rememberUsernameControl = element(loc.rememberUsernameControl);
    this.rememberUsernameControlLoc = loc.rememberUsernameControl;
    this.loginFailureMessage = element(loc.loginFailureMessage);
    this.loginButton = element(loc.loginButton);
    this.forgotUsernameLink = element(loc.forgotUsernameLink);
    this.forgotPasswordLink = element(loc.forgotPasswordLink);
    this.alertList = element(loc.alertList);
    this.alertTextContainer = element(loc.alertTextContainer);
    this.ceaLogo = element(loc.ceaLogo);
    this.ceaText = element(loc.ceaText);
    this.loginTitle = element(loc.loginTitle);
    this.usernameText = element(loc.usernameText);
    this.passwordText = element(loc.passwordText);
    this.rememberUsernameText = element(loc.rememberUsernameText);
    this.copyrightText = element(loc.copyrightText);


    this.isAlertPresent = function (message) {
        this.deferred = protractor.promise.defer();

        this.alerts = element.all(loc.alertList);
        this.result = false;

        this.alerts.each(function (alert) {
            alert.element(that.alertTextContainer).getText().then(function (alertMessage) {

                if (alertMessage === message) {
                    that.result = true;
                    that.deferred.fulfill(true);
                }

            });
        }).then(function () {
            if (that.result === false) {
                that.deferred.fulfill(false);
            }
        });

        return that.deferred.promise;
    };

    this.login = function login(user, rememberMe) {
        this.populateLoginFields(user, rememberMe);
        this.loginButton.click();
    };

    this.populateLoginFields = function populateLoginFields(user, rememberMe) {
        this.usernameField.clear();
        this.usernameField.sendKeys(user.username);

        this.passwordField.clear();
        this.passwordField.sendKeys(user.password);

        POHelper.setCheckboxTo(this.rememberUsernameControlLoc, rememberMe);
    };

    /**
     *
     * @returns Returns login failure message on screen.
     */
    this.loginFailureServiceMessage = function loginFailureServiceMessage() {
        return this.loginFailureMessage.getText().then(function (value) {
            if (value) {
                return value;
            }
        });
    };

    /**
     *
     * @returns Returns expected login failure message from config params.
     */
    this.getExpectedLoginFailureMessage = function getExpectedLoginFailureMessage() {
        return browser.params.expectedLoginFailureMessage.toString();
    };

    this.clickForgotUsernameLink = function clickForgotUsername() {
        this.forgotUsernameLink.click();
    };

    this.clickForgotPasswordLink = function clickForgotPasswordLink() {
        this.forgotPasswordLink.click();
    };
};

module.exports = Login;