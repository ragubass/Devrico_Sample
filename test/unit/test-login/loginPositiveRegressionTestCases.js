/**
 * Created by cf on 2/25/15.
 */

//Shared Elements
var env = require('../../../config/env.js');
var user = require('../../../core/CEAUserList');
var sharedSetup = require('../../../core/sharedSetup');
var using = require('../../../util/using');

var LoginPO = require('../../../pageObject/module-login/loginPO');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../../pageObject/module-landingpage/landingPagePO');
var POHeader = new HeaderPO();
var POLogin = new LoginPO();
var POLandingPage = new LandingPagePO();

describe('Login - Positive Regression Tests', function () {

    sharedSetup.sharedSetupEach('/');

    // Login with various user types
    it('should validate admin user root1 is able to login', function () {
        POLogin.login(user.authUsers.adminUser, true);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('adminUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate non admin user normalAutoUser1 is able to login', function () {
        POLogin.login(user.authUsers.nonAdminUser, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('nonAdminUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate non admin user normalAutoUser2 is able to login', function () {
        POLogin.login(user.authUsers.normalAutoUser2, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('normalAutoUser2'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate HundredCharacterUsernameUser is able to login', function () {
        POLogin.login(user.authUsers.hunderedCharacterUsernameUser, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('hunderedCharacterUsernameUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate SingleCharacterUsernameUser is able to login', function () {
        POLogin.login(user.authUsers.singleCharacterUsernameUser, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('singleCharacterUsernameUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate HundredCharacterPasswordUser is able to login', function () {
        POLogin.login(user.authUsers.hunderedCharacterPasswordUser, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('hunderedCharacterPasswordUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate admin-email-auto-user-1@clickfox.com is able to login', function () {
        POLogin.login(user.authUsers.emailUsernameUser, false);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('emailUsernameUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('should validate classic CEA Link after login', function () {
        POLogin.login(user.authUsers.adminUser, true);
        POLandingPage.clickWelcomeModalNav();
        expect(POHeader.getUserName()).toEqual(POHeader.getUserFirstLastName('adminUser'));
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

});