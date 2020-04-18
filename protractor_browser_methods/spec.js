//spec.js
describe('Smoke test', () => {
    it('should behave...', () => {
        browser.ignoreSynchronization = true;
        browser.get('https://www.pluralsight.com/');
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        });
        browser.getTitle().then(function(title){
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(7000);
        browser.get('https://www.udemy.com/');
        browser.manage().window().setSize(1920, 1080);
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        });
        browser.getTitle().then(function(title){
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(7000);
        browser.get('https://www.linkedin.com/');
        browser.manage().window().maximize();
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        });
        browser.getTitle().then(function(title){
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(7000);
        browser.get('https://www.coursera.org/');
        browser.manage().window().setSize(1400, 800);
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        });
        browser.getTitle().then(function(title){
            console.log(title);
        });
        browser.refresh();
        browser.navigate().back();
        browser.navigate().forward();
        browser.sleep(7000);
    });
});
/**
 * -browser.sleep(time);
 * -browser.get(URL);
 * -browser.refresh();
 * -browser.navigate().back();
 * -browser.navigate().forward();
 * -browser.manage().window().maximize();
 * -browser.manage().window().setSize(w,h);
 * -browser.getCurrentUrl();
 * -browser.getTitle();
 */