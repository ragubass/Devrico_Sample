/**
 * Created by rballantyne on 11/11/14.
 */

module.exports = {
    ceaLogo: by.css('.cf-logo>img'),
    ceaText: by.xpath('//div[@class="cf-tagline hidden-xs"]'),
    loginTitle: by.css('section.cf-login > h2'),
    usernameText: by.xpath('//label[@for="username"]'),
    passwordText: by.xpath('//label[@for="password"]'),
    rememberUsernameText: by.xpath('//div[@class="checkbox"]/label'),
    usernameField: by.id('username'),
    passwordField: by.id('password'),
    rememberUsernameControl: by.model('rememberUserName'),
    loginFailureMessage: by.css('.media > .media-body > p.ng-binding'),
    loginButton: by.buttonText('Log In'),
    forgotUsernameLink: by.css('.cf-forgot-links > a[href="forgot_username"]'),
    forgotPasswordLink: by.xpath('//a[@href="forgot_password"]'),

    alertList: by.repeater('alert in alerts'),
    alertTextContainer: by.css('p'),
    copyrightText: by.css('.text-muted.ng-binding') //TODO:Remove. Should be in global


};