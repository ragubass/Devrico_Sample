/**
 * Created by saravanan.k on 3/2/2015.
 */
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var manageSearchingTags = require('../../pageObject/module-manage/manageSearchingTagsPO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();

describe('Manage|Filters Page', function () {
    sharedSetup.sharedSetupAll('/');

    it('Check to make sure we are logged in', function () {
        expect(browser.getCurrentUrl()).toBe(HelperPO.ceaEnterpriseHref() + '/');
        expect(POHeader.getLogoHref()).toEqual(HelperPO.ceaEnterpriseHref());
        expect(POHeader.getClassicCeaHref()).toEqual(HelperPO.ceaClassicHref());
        expect(POHeader.logoutLink.isPresent()).toBe(true);
    });

    it('Close Modal and Check if Module is Visible and Select it', function () {
        POLandingPage.clickModManage();
    });

    it('Search box Validation Test on the MyPaths', function () {
        manageSearchingTags.ValidationMyPaths();
    });
    it('Search box Validation Test on the Myview', function () {
        manageSearchingTags.ValidationMyViews();
    });
    it('Search box Validation Test on the MyFilters', function () {
        manageSearchingTags.ValidationMyFilters();
    });
    it('Search box Validation Test on the AllPaths', function () {
        manageSearchingTags.ValidationAllPaths();
    });
    it('Search box Validation Test on the My Allview', function () {
        manageSearchingTags.ValidationAllViews();
    });
    it('Search box Validation Test on the AllFilters', function () {
        manageSearchingTags.ValidationAllFilters();
    });
});

