/**
 * Created by saravanan.k on 3/2/2015.
 */

var loc = require('../../uiMap/uimap-manage/manageSearchingTagsLocators');

//Click Manage menu  and Data Management link
exports.manage = function manage() {
    //element(loc.manageloc).click();
    element(loc.datamanageloc).click();
};

//Click the paths menu
exports.pathlink = function pathlink() {
    element(loc.pathlinkloc).click();
};

//Click the Views menu
exports.viewlink = function viewlink() {
    element(loc.viewlinkloc).click();
};

//Click the Filters menu
exports.filterlink = function filterlink() {
    element(loc.filterlinkloc).click();
};

//Click the  All paths,views and Filters Links
exports.allpathlink = function allpathlink() {
    element(loc.allpathlinkloc).click();
};

//Enter the Search Tags name in Search box
exports.searchtag = function searchtag() {
    var tagname = 'Tag 3';
    element(loc.searchpathloc).sendKeys(tagname);
    var getall = element.all(loc.gettextsloc);
    var allcount = getall.count();
    allcount.then(console.log);
    var firsttexts = getall.get(1).getText();
    firsttexts.then(console.log);
    expect(firsttexts).toContain(tagname);
};

//Search box Validation Test on the My Paths
exports.ValidationMyPaths = function ValidationMyPaths() {
    exports.manage();
    exports.pathlink();
    exports.searchtag();
};

// Search box Validation Test on the My Views
exports.ValidationMyViews = function ValidationMyViews() {
    exports.viewlink();
    exports.searchtag();
};

//Search box Validation Test on the My Filters
exports.ValidationMyFilters = function ValidationMyFilters() {
    exports.filterlink();
    exports.searchtag();
};

//Search box Validation Test on the All Paths
exports.ValidationAllPaths = function ValidationAllPaths() {
    exports.pathlink();
    exports.allpathlink();
    exports.searchtag();
};

//Search box Validation Test on the All Views
exports.ValidationAllViews = function ValidationAllViews() {
    exports.viewlink();
    exports.allpathlink();
    exports.searchtag();
};

//Search box Validation Test on the All Filters
exports.ValidationAllFilters = function ValidationAllFilters() {
    exports.filterlink();
    exports.allpathlink();
    exports.searchtag();
};