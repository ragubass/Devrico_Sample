/**
 * Created by saravanan.k on 3/30/2015.
 */

//TODO: Remove Locators from test cases
//TODO: Add expects to test cases
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var FilterPO = require('../../pageObject/module-analyze/controlpanelforFilterPO.js');
var loc = require('../../uiMap/uimap-analyze/controlpanelforFilterLocators.js');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

describe('Analyze|Filters Page', function () {

    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(HelperPO.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(HelperPO.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(HelperPO.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Close Modal and Check if Module is Visible and Select it', function () {
        POLandingPage.clickModAnalyze();
    });

    it('ValidateControlPanelFilters', function () {
        FilterPO.ValidateControlPanelFilters()
    });
    it('ValidateFilterRibbonsTexts', function () {
        FilterPO.ValidateFilterRibbonsTexts()
    });
    it('ValidatetheRibbonsTextorder', function () {
        FilterPO.ValidatetheRibbonsTextorder()
    });
    it('Validatetheastericks', function () {
        FilterPO.Validatetheastericks()
    });
    it('Validatetheastericksnotrequired', function () {
        FilterPO.Validatetheastericksnotrequired()
    });
    /*it('ValidateSelectdatacalender', function () {
     FilterPO. ValidateSelectdatacalender()
     });
     it('Validateselectdatalayer', function () {
     FilterPO. Validateselectdatalayer()
     });
     it('ValidateDataLayername', function () {
     FilterPO. ValidateDataLayername()
     });*/
    it('ValidatetheFiltersribbonflyout', function () {
        FilterPO.ValidatetheFiltersribbonflyout()
    });
    it('ValidatetheFitlerribbontext', function () {
        FilterPO.ValidatetheFitlerribbontext()
    });
    it('ValidateAttributeFilterdropdown', function () {
        FilterPO.ValidateAttributeFilterdropdown()
    });
    it('Validatethebuttons', function () {
        FilterPO.Validatethebuttons()
    });

});
