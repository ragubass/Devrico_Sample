/**
 * Created by ragu.s on 1/5/2015.
 */


module.exports = {
    datamanagementLink: by.linkText('Data Management'),
    datalayersLink: by.linkText('Data Layers'),
    datasourceLink: by.linkText('ivr3'),
    LegendBtn: by.buttonText('Legend'),
    RedcolorbesideTextCheck: by.id('date-outdated'),
    RedcolorCheck: by.css('td.date-outdated>i'),
    GreencolorbesideTextCheck: by.id('date-reported'),
    GreencolorCheck: by.css('td.date-reported > i'),
    GoldcolorbesideTextCheck: by.id('date-uncertified'),
    GoldcolorCheck: by.css('td.date-uncertified>i'),
    GraycolorbesideTextCheck: by.id('date-empty'),
    GraycolorCheck: by.css('td.date-empty>span'),
    BlackcolorbesideTextCheck: by.id('date-bold'),
    BlackcolorCheck: by.css('td.date-bold>span'),
    calenderwindowcloseBtn: by.className('fa-times')
};