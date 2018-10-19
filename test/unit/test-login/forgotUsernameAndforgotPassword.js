/**
 * Created by Sunil Kumar on 11/6/14.
 *
 * Suite of tests for the forgotUsername and forgotPassword
 */

//Shared Elements
var env = require('../../../config/env.js');
var user = require('../../../core/CEAUserList');
var sharedSetup = require('../../../core/sharedSetup');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var LoginPO = require('../../../pageObject/module-login/loginPO');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var fUsrPassPO = require('../../../pageObject/module-login/forgotUserPassPO.js');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();
var POLogin = new LoginPO();
var POFUserPwd = new fUsrPassPO();

var testEmail = 'admin-email-auto-user1@clickfox.com';

var expectedForgotUsernameServiceMessage = "If test1@clickfox.com is on file, your username will be sent momentarily. If you don't receive an email contact your support representative.";
var expectedForgotPasswordServiceMessage = "An email has been sent to the address provided with a link to reset your password. This link expires in 24 hours.";
var tempForgotUsernameForgotPasswordServiceMessage = "Further instructions have been sent to your email account";

var expectedForgotPasswordTitle = "Forgot Password?";
var expectedForgotPasswordEmailText = "Enter email address.";

describe('Login - Forgot username and forgot password test', function () {

    sharedSetup.sharedSetUpEachWithoutLogout('/');  //TODO: Find out why we are using this

    //TODO: Should this be on login tests too?
    it('should validate login screen elements', function () {
        expect(POHeader.getLogoSrc()).toEqual(env.baseUrl + "/ceaEnterprise/target/img/cea_logo.png");
        // expect(element("CEA Text",loc.ceaText).getText()).toEqual(expectedCEAText);
        expect(POLogin.loginTitle.getText()).toEqual("Log In");
        expect(POLogin.usernameText.getText()).toEqual("Username");
        expect(POLogin.passwordText.getText()).toEqual("Password");
        expect(POLogin.rememberUsernameText.getText()).toEqual("Remember username");
        expect(POHeader.footerCopyrightText.getText()).toEqual("© " + POHelper.getCurrentYear() + " ClickFox, Inc. All rights reserved.");
    });

    it('should validate forgot username request and service message returned', function () {
        POLogin.clickForgotUsernameLink();
        POFUserPwd.enterUsernameAndSubmit(testEmail);
        expect(POFUserPwd.forgotUsernameServiceMessage.getText()).toEqual(tempForgotUsernameForgotPasswordServiceMessage);
    });

    it('should validate forgot password request and service message returned', function () {
        POLogin.clickForgotPasswordLink();
        POFUserPwd.enterPasswordAndSubmit(testEmail);
        expect(POFUserPwd.forgotPasswordServiceMessage.getText()).toEqual(tempForgotUsernameForgotPasswordServiceMessage);
    });

    // Forgot password acceptance criteria.
    it('should validate forgot password page elements', function () {
        POLogin.clickForgotPasswordLink();

        expect(POFUserPwd.forgotPasswordTitle.getText()).toEqual(expectedForgotPasswordTitle);
        expect(POFUserPwd.forgotPasswordEmailFieldText.getText()).toEqual(expectedForgotPasswordEmailText);
        //    expect(fPwdPO.isSubmitButtonPresent().toEqual(true));

        //  click back button.
        POFUserPwd.clickForgotPasswordBackButton();
    });

});



