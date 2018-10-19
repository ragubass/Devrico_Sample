/**
 * Created by ragu.s on 2/17/2015.
 *
 * Analyze: Filters Landing Page: Change Bulk FIlter to Upload Filter File page object model
 *
 */
//TODO: Page Objects shouldn't have any expect conditions
var uploadfilterloc = require('../../uiMap/uimap-analyze/uploadFilterFileLoc');

var UploadFilterFile = function () {
    this.filtersclick = function () {
        element(uploadfilterloc.filterslinkclick).click();
    };

    this.allfiltersdropdownclick = function () {
        var dropdown = element(uploadfilterloc.allfiltertypesdropdownclclick).click();
        dropdown.click();
    };

    this.pathfilteroptionselect = function () {
        element(uploadfilterloc.selectpathfilteroption).click();
    };

    this.pathfiltersonlyavailable = function () {
        var pathfilter = element.all(uploadfilterloc.matchedtablevalues);
        var pathfiltertext = pathfilter.getInnerHtml();
        expect(pathfiltertext).toEqual(['Filter Type', '&nbsp;', 'Data Layer', '&nbsp;', 'Created By', '&nbsp;', 'Last Updated', '&nbsp;', '', '&nbsp;', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter', 'Path Filter']);
    };

    this.allfiltertypesselect = function () {
        element(uploadfilterloc.selectallfiltertypesoption).click();
    };

    this.allfiltertypesavailable = function () {
        var pathfilter = element.all(uploadfilterloc.matchedtablevalues);
        var pathfiltertext = pathfilter.getInnerHtml();
        expect(pathfiltertext).toMatch('Path Filter');
        expect(pathfiltertext).toMatch('Event Filter');
        expect(pathfiltertext).toMatch('Attribute Filter');
        expect(pathfiltertext).toMatch('Upload Filter File');
    };

    this.attributefilteroptionselect = function () {
        element(uploadfilterloc.selectattributefilteroption).click();
    };

    this.attributefiltersonlyavailable = function () {
        var attributefilter = element.all(uploadfilterloc.matchedtablevalues);
        var attributefiltertext = attributefilter.getInnerHtml();
        expect(attributefiltertext).toEqual([ 'Filter Type', '&nbsp;', 'Data Layer', '&nbsp;', 'Created By', '&nbsp;', 'Last Updated', '&nbsp;', '', '&nbsp;', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter', 'Attribute Filter' ]);
    };

    this.eventfilteroptionselect = function () {
        element(uploadfilterloc.selecteventfilteroption).click();
    };

    this.eventfiltersonlyavailable = function () {
        var eventfilter = element.all(uploadfilterloc.matchedtablevalues);
        var eventfiltertext = eventfilter.getInnerHtml();
        expect(eventfiltertext).toEqual([ 'Filter Type', '&nbsp;', 'Data Layer', '&nbsp;', 'Created By', '&nbsp;', 'Last Updated', '&nbsp;', '', '&nbsp;', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter', 'Event Filter' ]);
    };

    this.uploadfilterfile = function () {
        var uffile = element(uploadfilterloc.selectuploadfilteroption);
        expect(uffile.getText()).toEqual('Upload Filter File');
    };

    this.uploadfilteroptionselect = function () {
        element(uploadfilterloc.selectuploadfilteroption).click();
    };

    this.uploadfiltersonlyavailable = function () {
        var pathfilter = element.all(uploadfilterloc.matchedtablevalues);
        var pathfiltertext = pathfilter.getInnerHtml();
        expect(pathfiltertext).toEqual([ 'Filter Type', '&nbsp;', 'Data Layer', '&nbsp;', 'Created By', '&nbsp;', 'Last Updated', '&nbsp;', '', '&nbsp;', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File', 'Upload Filter File' ]);
    };
};

module.exports = UploadFilterFile;