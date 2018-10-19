/**
 * Created by jayaganapathi.e on 2/6/2015.
 */
var controlpaneLoc = require('../../uiMap/uimap-analyze/controlpanelLocaters');

exports.controlpanelopen = function () {
    element(controlpaneLoc.Controlpanelopen).click();
    /*click a control panel open icon */
};
exports.controlpanelclose = function () {
    element(controlpaneLoc.Controlpanelclose).click();
    /*click a control panel close icon */
};

exports.clickclose = function () {
    element.all(controlpaneLoc.close).get(0).click();
    /*close the data layer*/
};