/**
 * Created by jayaganapathi.e on 2/2/2015.
 */

module.exports = {

    viewsLink: by.linkText('Views'), /* To locate the views link in Analyze module */
    myViewsLink: by.partialLinkText('ALL VIEWS'), /* To locate the MY VIEWSS link */
    pencilIcon: by.css('i.fa-pencil'), /*To locate the pencil icon next to views name */
    inlineEditBox: by.css('input.editable-input'),
    saveButton: by.css('span.fa-check'),
    newViewsText: by.css('div.cell-temp'),
    viewsNameColumn: by.css('div.ng-scope.sortable'),
    warningIcon: by.css('span.fa-warning'),
    warnText: by.css('div.popover-inner'),
    spinIcon: by.css('span.fa-spinning')

};
