/**
 * Created by saravanan.k on 3/10/2015.
 */

var loc = require('../../uiMap/uimap-analyze/AddPathButtonLocators');

//Click analyze menu  and Controlpanel link
exports.analyze = function analyze() {
    element(loc.analyzeloc).click();
    browser.sleep(6000);
    element(loc.controlpanelloc).click();
    browser.sleep(6000);


};
//Click Datalayer Path Button
exports.pathbutton = function pathbutton() {
    element(loc.pathbuttonloc).click();
    browser.sleep(6000);

};

//Click View Path Button
exports.viewbutton = function viewbutton() {
    element(loc.viewbuttonloc).click();
    browser.sleep(6000);

};

//Click Filter Path Button
exports.filterribbon = function filterribbon() {
    element(loc.filterribbonloc).click();
    browser.sleep(6000);

};

//Click Path Ribbon
exports.pathribbon = function pathribbon() {

    element(loc.pathribbionloc).click();

};

//select first Pathname in path's ribbon
exports.pathnamecheckbox1 = function pathnamecheckboxl() {
    var pathnamecheckboxall = element.all(loc.pathnamecheckboxloc);
    pathnamecheckboxall.get(0).click();
    browser.sleep(6000);
};
//select second  Pathname in path's ribbon
exports.pathnamecheckbox2 = function pathnamecheckboxl() {
    var pathnamecheckboxall = element.all(loc.pathnamecheckboxloc);
    pathnamecheckboxall.get(1).click();
    browser.sleep(6000);
};

//Get the path name in populated in the Control Panel path's ribbon
exports.pathribbontext = function pathribbontext() {
    var pathbuttonlink = element(loc.pathribbionloc);
    var pathnamesall = element.all(loc.pathnamesloc);
    var pathname1 = pathnamesall.get(0).getText();
    var pathribbiontext = pathbuttonlink.getText();
    //pathname1.then(console.log);
    //pathbuttonlink.then(console.log);
    expect(pathribbiontext).toContain(pathname1);
};

//Get the pathheader name  in path's ribbon
exports.pathheader = function pathheader() {
    var pathheadernameexpected = 'Select Path';
    var pathheadernameactual = element(loc.pathheaderloc).getText();
    browser.sleep(6000);
    pathheadername.then(console.log);
    expect(pathheadernameexpected).toContain(pathheadernameactual);

};
//+Add Path(s) button Validation Test Data Layers
exports.Validatdatalayerpathbutton = function Validatdatalayerpathbutton() {

    exports.analyze();
    exports.pathbutton();
    exports.pathheader();
};
//+Add Path(s) button Validation Test Views
exports.Validatviewpathbutton = function Validatviewpathbutton() {

    exports.analyze();
    exports.viewbutton();
    exports.pathbutton();
    exports.pathheader();
};
//+Add Path(s) button Validation Test Filter
exports.Validatfilterpathbutton = function Validatfilterpathbutton() {

    exports.analyze();
    exports.filterribbon();
    exports.pathbutton();
    exports.pathheader();
};
//Validate the user is able to select one paths to add to the view.
exports.Validatepathsribbenonetext = function Validatepathsribbenonetext() {

    exports.analyze();
    exports.pathribbon();
    exports.pathnamecheckbox1();
    exports.pathribbontext();

};
//Validate the user is able to select more then one paths to add to the view.
exports.Validatepathsribbenmorethenonetext = function Validatepathsribbenmorethenonetext() {

    /*exports.analyze();
     exports.pathribbon();
     exports.pathnamecheckbox1();*/
    exports.pathnamecheckbox2();
    exports.pathribbontext();

};