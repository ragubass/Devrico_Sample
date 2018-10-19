/**
 * Created by kesav.sn on 08-Jan-15.
 */

module.exports = {
    filterLink: by.linkText('Filters'), /* To locate the filter link in Analyze module */
    firstFilter: by.css('[ng-click="selectButtonClick(row, $event)"]'), /* To locate the first filter for deleting */
    deleteLink: by.partialLinkText('Delete'), /* To locate the delete link for deleting the filter */
    okButton: by.buttonText('Ok'), /* To click the ok button in confirmation box for deleting the selected filter */
    filterText: by.partialLinkText('Filter '), /* To get the text for filters in the filter list */
    allFilter: by.partialLinkText('ALL FILTERS'), /* To locate the All filters link */
    myFilter: by.partialLinkText('MY FILTERS'), /* To locate the MY FILTERS link */
    selectAll: by.model('selectAll') /* To locate the 'Select All' check box for deleting all filters */
};