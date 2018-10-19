/**
 * Created by rballantyne on 11/6/14.
 *
 * Suite of tests for the login screen.
 */

// Override the Protractor global element function with this monkeypatched version
var element = require('../core/foxyElement');
var loc = require('../uiMap/loginLocators');
var po = require('../pageObject/loginPO');
var menuPO = require('../pageObject/menubarPO');
var menuLoc = require('../uiMap/menubarLocators');
var CEAUser = require('../util/CEAUser');
var using = require('../util/using');
var sharedSetup = require('../core/sharedSetup');
var expectedLoginFailureMessage = "Invalid login credentials provided";


describe('The Login Screen', function () {

    sharedSetup('/');

    it('should have the right controls', function () {
        expect(element("Login Username field", loc.usernameField).isPresent()).toBe(true);
        expect(element("Login Password field", loc.passwordField).isPresent()).toBe(true);
        expect(element("Remember Username checkbox", loc.rememberUsernameControl).isPresent()).toBe(true);
        expect(element("Login Button", loc.loginButton).isPresent()).toBe(true);
    });


    // The login button will be needed for the next few cases
    var loginButton = element("Login Button", loc.loginButton);

    it('should enable the login button when the form is populated', function () {
        po.populateLoginFields(po.authUsers.adminUser, false);
        expect(loginButton.isEnabled()).toBe(true);
    });

    it('should disable the login button when the password field is cleared', function () {
        po.populateLoginFields(po.authUsers.adminUser, false);
        element("Login Password field", loc.passwordField).clear();

        expect(loginButton.isEnabled()).toBe(false);
    });

    it('should disable the login button when the username field is cleared', function () {
        po.populateLoginFields(po.authUsers.adminUser, false);
        element("Login Username field", loc.usernameField).clear();

        expect(loginButton.isEnabled()).toBe(false);
    });


    using('valid users', [
        po.authUsers.adminUser,
        po.authUsers.nonAdminUser
    ], function (user) {
        it('should log in a valid user', function () {
            po.login(user, false);

            expect(element("Landing page username", menuLoc.landingPageUserName(user)).isPresent()).toBe(true);

            menuPO.logout();
        });
    });

    using('invalid users', [
        new CEAUser({username: po.authUsers.adminUser.username, password: 'not a password'}),
        new CEAUser({username: po.authUsers.nonAdminUser.username, password: 'not a password'}),
        new CEAUser({username: 'not a user', password: po.authUsers.adminUser.password}),
        new CEAUser({username: 'not a user', password: po.authUsers.nonAdminUser.password}),
        new CEAUser({username: 'not a user', password: 'not a password'})
    ], function (crapUser) {
        it('should not log in an invalid user', function () {
            po.login(crapUser, false);

            expect(po.isAlertPresent(loc.loginInvalidMessage)).toBe(true);
        });
    });


    it('should remember your username if the "Remember Username" checkbox is checked', function () {
        po.login(po.authUsers.nonAdminUser, true);
        menuPO.logout();

        element("Login Username field", loc.usernameField).getAttribute('value').then(function (username) {
            expect(username).toEqual(po.authUsers.nonAdminUser.username);
        });
    });

    it('should forget your password when the "Remember Username" checkbox is unchecked', function () {
        po.login(po.authUsers.nonAdminUser, false);
        menuPO.logout();

        element("Login Username field", loc.usernameField).getAttribute('value').then(function (username) {
            expect(username).toEqual('');
        });
    });
});
