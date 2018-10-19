/**
 * Created by kesav.sn on 22-Jan-15.
 */


module.exports = {
    filterLink: by.linkText('Filters'), /* To locate the filter link in Analyze module */
    myFilter: by.partialLinkText('MY FILTERS'), /* To locate the MY FILTERS link */
    pencilIcon: by.css('i.fa-pencil'), /*To locate the pencil icon next to filter name */
    inlineEditBox: by.css('input.editable-input'),
    saveButton: by.css('span.fa-check'),
    newFilterText: by.css('div.cell-temp'),
    filterNameColumn: by.css('div.ng-scope.sortable'),
    warningIcon: by.css('span.fa-warning'),
    warnText: by.css('div.popover-inner'),
    spinIcon: by.css('span.fa-spinning')
};


