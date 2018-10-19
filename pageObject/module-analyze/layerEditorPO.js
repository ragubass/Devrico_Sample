/**
 * Created by ragu.s on 10/6/2015.
 */
var layerEditorLoc = require('../../uiMap/uimap-analyze/layerEditorLocators.js');
var LayerEditor = function () {
    var that = this;
    this.layerEditorBtn = element(layerEditorLoc.layerEditorBtn);

    /**
     * To click the continue button in calendar modal
     */
    this.layerEditorButton = function () {
        that.layerEditorBtn.isEnabled().then(function (isEnabled) {
            if (isEnabled) {
                that.layerEditorBtn.click();
            }
        });
    };
};

module.exports = LayerEditor;