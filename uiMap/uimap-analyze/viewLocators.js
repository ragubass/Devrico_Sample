/**
 * Created by kesav.sn on 02-Feb-15.
 */

module.exports = {
    viewLink: by.linkText('Views'), /* To locate the view link in Analyze module */
    firstView: by.css('div.ui-grid-selection-row-header-buttons'), /* To locate the first view for deleting */
    deleteLink: by.partialLinkText('Delete'), /* To locate the delete link for deleting the view */
    okButton: by.buttonText('Ok'), /* To click the ok button in confirmation box for deleting the selected view */
    viewText: by.partialLinkText('View '), /* To get the text for views in the report list */
    allView: by.partialLinkText('ALL VIEWS'), /* To locate the All views link */
    myView: by.partialLinkText('MY VIEWS'), /* To locate the MY views link */
    selectAll: by.model('selectAll') /* To locate the 'Select All' check box for deleting all views */
};



