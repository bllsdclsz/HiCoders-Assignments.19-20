//spec.js
describe('Smoke test', () => {
    it('should behave...', () => {
        browser.ignoreSynchronization = true;
        browser.get('https://www.google.com');
        browser.manage().window().maximize();
        browser.get('https://www.bbc.com');
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        })
        browser.getTitle().then(function(title){
            console.log(title);
        })
    });
});