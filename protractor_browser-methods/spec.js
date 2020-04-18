//spec.js
describe('Smoke test', () => {
    it('should behave...', () => {
        browser.ignoreSynchronization = true;
        browser.get('https://www.pluralsight.com/');
        browser.manage().window().maximize();
        browser.get('https://www.udemy.com/');
        browser.get('https://www.linkedin.com/');
        browser.get('https://www.coursera.org/');
    });
});