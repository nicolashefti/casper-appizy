/**
 * Setup the root domain for the tests
 */
var domain = casper.cli.get('domain') || 'http://www.appizy.com';

/**
 * Setup a custom user agent to filter it from your normal visitors
 */
casper.userAgent('Mozilla/5.0 (MyCasperBot; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) Safari/538.1');

casper.test.begin('Starting tests!', function (test) {
    casper.start(domain);

    casper.then(function () {
        casper.warn(casper.getCurrentUrl());
        test.assert(true);

        casper.testPageInternUrl(3);
    });

    casper.run(function () {
        test.done();
    });
});

casper.testPageInternUrl = function (depth) {
    var pageUrl = casper.getElementsAttribute('a', 'href');

    var internUrl = pageUrl
    // Filter intern
        .filter(function (url) {
            return !/^(http|#|\/\/)/.test(url) && url !== '' && url !== '/'
        })
        // Filter unique
        .filter(function (element, position, self) {
            return self.indexOf(element) == position;
        });

    casper.warn(JSON.stringify(internUrl));
};
