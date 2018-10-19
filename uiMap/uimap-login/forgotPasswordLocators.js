/**
 * Created by sunil kumar on 03/10/15.
 */

module.exports = {

    forgotPasswordField: by.css('#email'),
    forgotPasswordSubmitButton: by.css('.btn.btn-primary'),
    forgotPasswordServiceMessage: by.css('.media > .media-body > .ng-binding'),
    forgotPasswordTitle: by.xpath('//section[@class="cf-login ng-scope"]/h2'),
    forgotPasswordEmailFieldText: by.xpath('//label[@for="email"]'),
    forgotPasswordBackButton: by.xpath('//div[@class="cf-forgot-links"]/a')
};