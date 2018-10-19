/**
 * Created by kesav.sn on 21-Jan-15.
 */

module.exports = {
    reportLink: by.linkText('Reports'), /* To locate the report link in Analyze module */
    firstReport: by.css('div.ui-grid-selection-row-header-buttons'), /* To locate the first report for deleting */
    deleteLink: by.partialLinkText('Delete'), /* To locate the delete link for deleting the report */
    okButton: by.buttonText('Ok'), /* To click the ok button in confirmation box for deleting the selected report */
    ReportText: by.partialLinkText('Report '), /* To get the text for reports in the report list */
    allReport: by.partialLinkText('ALL REPORTS'), /* To locate the All reports link */
    myReport: by.partialLinkText('MY REPORTS'), /* To locate the MY reports link */
    selectAll: by.model('selectAll') /* To locate the 'Select All' check box for deleting all reports */
};