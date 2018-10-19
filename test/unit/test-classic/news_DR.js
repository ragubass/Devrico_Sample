/**
 * Created by rballantyne on 11/21/14.
 *
 * Tests for the navigation page, AKA the page that users land on upon logging in.
 */
// Override the Protractor global element function with this monkeypatched version
var element = require('../../core/foxyElement');
var po = require('../../pageObject/module-landingpage/newsPO');
var loc = require('../../uiMap/uimap-landingpage/landingPageLocators');
var menuPO = require('../../pageObject/module-global/globalHeaderFooterPO');
var moment = require('moment');
var env = require('../../config/env.js');
var sharedSetup = require('../../core/sharedSetup');


const numFeedItems = 5;
const numAllFeedItems = 30;

describe('Navigation Page', function () {
    sharedSetup.sharedSetupAll('/');

//    it('Before all tests: should login', function() {
//        browser.get('/');
//        browser.waitForAngular();
//        menuPO.login(browser.params.adminUser, false);
//    });

    describe('The "News" widget', function () {
        it('should contain the top ' + numFeedItems + ' items from the feed', function () {
            verifyNewsFeedWidget(numFeedItems)
        });

        it('should navigate to the "All News" page', function () {
            po.navigateToMoreNews();
            expect(element("Long News Container", loc.longNewsContainer).isPresent()).toBe(true);
        });
    });

    describe('The news page', function () {
        it('should contain the top ' + numAllFeedItems + ' items from the feed', function () {
            verifyNewsFeedWidget(numAllFeedItems);
        });

        it('should navigate back to the navigation page', function () {
            po.newsGoBack();
            expect(element("News Container", loc.newsContainer).isPresent()).toBe(true);
        });
    });

});

/**
 * This function applies equally to the news widget on the login page and the news page, because the markup is identical between them.
 * The only difference is the number of items we expect to be present.
 *
 * @param nItems
 */
function verifyNewsFeedWidget(nItems) {
    const feedURL = 'http://www.clickfox.com/blog/feed/';

    po.getNewsListItems().then(function (items) {
        po.getItemsFromFeed(feedURL, nItems).then(function (posts) {
            for (var i = 0; i < posts.length; ++i) {
                var post = posts[i];
                var item = items[i];

                expect(post.title).toEqual(item.title);
                expect(post.link).toEqual(item.href);
                expect(post.author).toEqual(item.author);
                expect(moment(post.date).format('DD MMM YYYY')).toEqual(item.date);
            }
        });
    });
}
