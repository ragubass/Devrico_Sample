/**
 * Created by rballantyne on 11/21/14.
 *
 * Page object for navigation tests.
 */
// Override the Protractor global element function with this monkeypatched version
var element = require('../../core/foxyElement');
var FeedParser = require('feedparser');
var request = require('request');
var loc = require('../../uiMap/uimap-landingpage/landingPageLocators');


/**
 * Retrieve and parse the RSS feed at url. Return a promise of the first n items.
 *
 * @param url A string specifying the location of the feed.
 * @param nItems Integer; how many items to retrieve.
 */
exports.getItemsFromFeed = function (url, nItems) {
    // Because the feedparser package is not part of Protractor, its asynchronous operations are not automatically queued.
    // So, we need to manually insert them into the control flow ourselves in order to ensure they are executed in the proper order.
    var flow = protractor.promise.controlFlow();

    return flow.execute(function () {
        var deferred = protractor.promise.defer();

        var req = request(url, {timeout: 10000, pool: false});
        var feedparser = new FeedParser();

        req.on('response', function (res) {
            res.pipe(feedparser);
        });

        var result = [];
        var itemsRead = 0;
        feedparser.on('readable', function () {
            var post;

            while ((post = this.read()) && itemsRead < nItems) {
                result.push(post);
                itemsRead++;
            }
        });

        feedparser.on('end', function () {
            deferred.fulfill(result);
        });

        return deferred.promise;
    });
};


/**
 * Build a list of the attrs we care about from the elements on the page. Those are:
 *
 * {
 *   title,
 *   href,
 *   author,
 *   date
 * }
 *
 * @returns A promise that will resolve to the list of objects containing the attrs we care about from the page.
 */
exports.getNewsListItems = function () {
    var deferred = protractor.promise.defer();
    var result = [];

    var newsList = element.all(loc.feedList);
    newsList.each(function (listItem) {
        var item = {};

        var link = listItem.element(loc.titleLink);
        link.getText().then(function (title) {
            item.title = title;
        });
        link.getAttribute('href').then(function (href) {
            item.href = href;
        });

        listItem.element(loc.authorDate).getText().then(function (authorDateStr) {
            var authorDate = authorDateStr.split(', ');
            item.author = authorDate[0];
            item.date = authorDate[1];
        });

        result.push(item);
    }).then(function () {
        deferred.fulfill(result);
    });

    return deferred.promise;
};


/**
 * Click the "More News" link.
 */
exports.navigateToMoreNews = function () {
    element("News Container", loc.newsContainer).element("More News Link", loc.moreNewsLink).click();
};

/**
 * Click the "Go Back" link
 */
exports.newsGoBack = function () {
    element("News Go Back Link", loc.newsGoBackLink).click();
};
