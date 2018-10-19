/**
 * Created by ckoerber on 4/13/15.
 */

var CEAUser = require('../util/CEAUser');

exports.authUsers = {

    //Root User should not be used within any tests
    rootUser: new CEAUser({
        username: 'root',
        password: 'password',
        firstname: 'super',
        lastname: 'user',
        email: '1noreply@clickfox.com'
    }),

    autoTestUser: new CEAUser({
        username: 'adminAuto',
        password: 'P@ssword1',
        firstname: 'admin',
        lastname: 'Automation',
        email: 'qatest@clickfox.com'
    }),

    adminUser: new CEAUser({
        username: 'root1',
        password: 'P@ssword1',
        firstname: 'super',
        lastname: 'user',
        email: 'root@root.com'
    }),
//TODO: Remove personal Emails from test cases
    nonAdminUser: new CEAUser({
        username: 'normalAutoUser1',
        password: 'P@ssword1',
        firstname: 'normal-auto',
        lastname: 'user1',
        email: 'sgunasekaran1@clickfox.com'
    }),
//TODO: Remove Personal Emails from test cases
    normalAutoUser2: new CEAUser({
        username: 'normalAutoUser2',
        password: 'P@ssword1',
        firstname: 'normal-auto',
        lastname: 'user2',
        email: 'sgunasekaran2@clickfox.com'
    }),
    hunderedCharacterUsernameUser: new CEAUser({
        username: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
        password: 'P@ssword1',
        firstname: 'admin100char1-username-auto-user1',
        lastname: 'user1',
        email: 'test1@clickfox.com'
    }),
    singleCharacterUsernameUser: new CEAUser({
        username: '1',
        password: 'P@ssword1',
        firstname: 'admin1char-username-auto-user1',
        lastname: 'user1',
        email: 'admin1char-username-auto-user1@clickfox.com'
    }),
    hunderedCharacterPasswordUser: new CEAUser({
        username: 'admin100char1-password-auto-user1',
        password: 'P@ssword21111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
        firstname: 'admin100char1-password-auto-user1',
        lastname: 'user1',
        email: 'test2@clickfox.com'
    }),
    emailUsernameUser: new CEAUser({
        username: 'admin-email-auto-user-1@clickfox.com',
        password: 'P@ssword1',
        firstname: 'admin-email-auto-user-1',
        lastname: 'user1',
        email: 'admin-email-auto-user1@clickfox.com'
    }),

    blankUsernameUser: new CEAUser({
        username: ' ',
        password: 'P@ssword1',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    }),

    blankPasswordUser: new CEAUser({
        username: 'root',
        password: ' ',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    }),

    invalidUsernameUser: new CEAUser({
        username: 'root1234',
        password: 'P@ssword1',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    }),

    invalidPasswordUser: new CEAUser({
        username: 'normalAutoUser1',
        password: 'P@ssword4567',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    }),

    sqlInjectionUsername: new CEAUser({
        username: '1 = 1',
        password: 'P@ssword1',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    }),

    sqlInjectionPassword: new CEAUser({
        username: 'normalAutoUser2',
        password: '1 = 1',
        firstname: 'abc',
        lastname: 'abc',
        email: 'abc@clickfox.com'
    })
};