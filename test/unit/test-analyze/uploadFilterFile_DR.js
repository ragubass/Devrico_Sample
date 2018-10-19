/**
 * Created by ragu.s on 2/17/2015.
 *
 * Analyze: Filters Landing Page: Change Bulk FIlter to Upload Filter File
 */
//TODO: Major rework needed. No expect conditions
var sharedSetup = require('../../core/sharedSetup');
var HelperPO = require('../../pageObject/module-shared/poHelper');
var HeaderPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var LandingPagePO = require('../../pageObject/module-landingpage/landingPagePO');
var UploadFilterPO = require('../../pageObject/module-analyze/uploadFilterFilePO');
var POHeader = new HeaderPO();
var POLandingPage = new LandingPagePO();
var POUploadFilter = new UploadFilterPO();

describe('Analyze|The Filters screen', function () {
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

    it('To click the filters link', function () {
        POUploadFilter.filtersclick();
    });

    it('To click the all filters drop down', function () {
        POUploadFilter.allfiltersdropdownclick();
    });

    it('To select path filter option', function () {
        POUploadFilter.pathfilteroptionselect();
    });

    it('filters shown below are Path Filters only', function () {
        POUploadFilter.pathfiltersonlyavailable();
    });

    it('To select All Filter Types', function () {
        POUploadFilter.allfiltertypesselect();
    });

    it('filters shown below are All Filter Types only', function () {
        POUploadFilter.allfiltertypesavailable();
    });

    it('To select Attribute filter', function () {
        POUploadFilter.attributefilteroptionselect();
    });

    it('filters shown below are attribute filter only', function () {
        POUploadFilter.attributefiltersonlyavailable();
    });

    it('To select All Filter Types', function () {
        POUploadFilter.allfiltertypesselect();
    });

    it('filters shown below are All Filter Types only', function () {
        POUploadFilter.allfiltertypesavailable();
    });

    it('To select Event Filter', function () {
        POUploadFilter.eventfilteroptionselect();
    });

    it('filters shown below are Event Filter only', function () {
        POUploadFilter.eventfiltersonlyavailable();
    });

    it('To select All Filter Types', function () {
        POUploadFilter.allfiltertypesselect();
    });

    it('filters shown below are All Filter Types only', function () {
        POUploadFilter.allfiltertypesavailable();
    });

    it('confirm bulk filter option changed to upload fileter file', function () {
        POUploadFilter.uploadfilterfile();
    });

    it('To select upload filter file ', function () {
        POUploadFilter.uploadfilteroptionselect();
    });

    it('filters shown below are upload filter file only', function () {
        POUploadFilter.uploadfiltersonlyavailable();
    });

    it('To select All Filter Types', function () {
        POUploadFilter.allfiltertypesselect();
    });

    it('filters shown below are All Filter Types only', function () {
        POUploadFilter.allfiltertypesavailable();
    });

});