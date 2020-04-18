//spec.js
describe('Smoke test', () => {
    var originalTimeout;

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should behave...', () => {
        browser.waitForAngularEnabled(false);
        // browser.ignoreSynchronization = true;
        browser.get('https://www.pluralsight.com/');
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
        });
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(2000);
        browser.get('https://www.udemy.com/');
        browser.manage().window().setSize(1920, 1080);
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
        });
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(1000);
        browser.get('https://www.linkedin.com/');
        browser.manage().window().maximize();
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
        });
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(1000);
        browser.get('https://www.coursera.org/');
        browser.manage().window().setSize(1400, 800);
        browser.getCurrentUrl().then(function (url) {
            console.log(url);
        });
        browser.getTitle().then(function (title) {
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(1000);

    });
});