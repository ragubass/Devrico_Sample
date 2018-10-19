/**
 * Created by kesav.sn on 03-Feb-15.
 */

module.exports = {
    pathLink: by.linkText('Paths'), /* To locate the paths link in Manage module */
    filterLink: by.linkText('Filters'), /* To locate the filter link in Manage module */
    viewLink: by.linkText('Views'), /* To locate the view link in Manage module */
    dataLink: by.linkText('Data Layers'), /*To locate the data layers link in Manage module */
    noButton: by.css('[ng-click="no()"]'), /* To locate the NO button in the welcome navigate window */
    dropDown: by.css('div.ui-grid-column-menu-button') /* To locate the drop down icon */
};



