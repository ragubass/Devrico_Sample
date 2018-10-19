/**
 * Created by rballantyne on 11/6/14.
 *
 * Suite of tests for the login screen.
 */

//Shared Elements
var env = require('../../../config/env.js');
var user = require('../../../core/CEAUserList');
var sharedSetup = require('../../../core/sharedSetup');
var using = require('../../../util/using');

var LoginPO = require('../../../pageObject/module-login/loginPO');
var POLogin = new LoginPO();

describe('Login - Negative Regression Tests', function () {

    sharedSetup.sharedSetUpEachWithoutLogout('/');  //TODO: Get explaination as to why we have this function

    it('should validate blankPasswordUser :: root/" " is unable to login', function () {
        POLogin.login(user.authUsers.blankPasswordUser, false);
        expect(POLogin.loginFailureServiceMessage()).toEqual(POLogin.getExpectedLoginFailureMessage());
    });

    it('should validate  invalidUsernameUser :: root1/P@ssword1 is unable to login', function () {
        POLogin.login(user.authUsers.invalidUsernameUser, false);
        expect(POLogin.loginFailureServiceMessage()).toEqual(POLogin.getExpectedLoginFailureMessage());
    });

    it('should validate  invalidPasswordUser :: root/P@ssword4 is unable to login', function () {
        POLogin.login(user.authUsers.invalidPasswordUser, false);
        expect(POLogin.loginFailureServiceMessage()).toEqual(POLogin.getExpectedLoginFailureMessage());
    });

    it('should validate  sqlInjectionUsername :: 1 = 1/P@ssword1 is unable to login', function () {
        POLogin.login(user.authUsers.sqlInjectionUsername, false);
        expect(POLogin.loginFailureServiceMessage()).toEqual(POLogin.getExpectedLoginFailureMessage());
    });

    it('should validate  sqlInjectionPassword :: root/1 = 1 is unable to login', function () {
        POLogin.login(user.authUsers.sqlInjectionPassword, false);
        expect(POLogin.loginFailureServiceMessage()).toEqual(POLogin.getExpectedLoginFailureMessage());
    });

});