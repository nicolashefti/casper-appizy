var domain = casper.cli.get('domain') || 'http://www.google.com';

casper.test.begin('Hello, Test!', 1, function (test) {

    casper.start(domain);

    casper.then(function () {
        casper.warn(casper.getCurrentUrl());
        test.assert(true);
    });

    casper.run(function(){
       test.done();
    });
});
