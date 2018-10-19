/**
 * Created by ckoerber on 4/27/15.
 */
//Shared Elements
var env = require('../../../config/env');
var user = require('../../../core/CEAUserList');
var sharedSetup = require('../../../core/sharedSetup');
var using = require('../../../util/using');

//Page Objects
var HelperPO = require('../../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../../pageObject/module-global/globalHeaderFooterPO');
var POHeader = new HeaderPO();
var POHelper = new HelperPO();


describe('Global - All tests for the Global Elements, Header and Footer', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(POHelper.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(POHelper.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(POHelper.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Header - Check User Name', function () {
        expect(POHeader.getUserName()).toEqual(POHeader.getLocalStorageActiveUser());
    });

    it('Header - Check Help/Contact Us Modal', function () {
        POHeader.clickHelpContactUs();
        expect(POHeader.contactUsModal.isPresent()).toBe(true);
        expect(POHeader.contactUsModalHeader.getText()).toBe('Contact Us');
        POHeader.clickContactUsModalOkBtn();
        expect(POHeader.contactUsModal.isPresent()).toBe(false);
    });

    it('Footer - Check Copyright', function () {
        expect(POHeader.footerCopyrightText.getText()).toEqual("© " + POHelper.getCurrentYear() + " ClickFox, Inc. All rights reserved.");
    });
});