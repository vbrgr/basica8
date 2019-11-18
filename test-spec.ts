import {browser, element, by} from 'protractor';
import { angularHome } from './pageObjects/angularHome';
describe('Angular reactive form testing', () => {


    it('should validate reactive form', async () => {
        browser.get('http://localhost:4200/reactive-form');
        element(by.css('#submit-btn')).click().then(() => {
            element.all(by.className('invalid-feedback')).each( (item) => {
                item.element(by.tagName('p-message')).getAttribute('text').then( (eltext) => {
                  //  console.log(eltext, 'error');
                });
            });
        });
        // browser.sleep(1000);
        await element(by.css('select[formControlName=title]')).sendKeys('Mr');
        await element(by.css('input[formControlName=firstName]')).sendKeys('govinda');
        await element(by.css('input[formControlName=lastName]')).sendKeys('raju');
        await element(by.css('input[formControlName=email]')).sendKeys('govinda@rpwebappsin');
        await element(by.css('input[formControlName=password]')).sendKeys('123456');
        await element(by.css('input[formControlName=confirmPassword]')).sendKeys('123456');
        await element(by.css('input[formControlName=acceptTerms]')).click();
        await element(by.css('#submit-btn')).click();
        // browser.sleep(2000);
        await expect(element(by.css('select[formControlName=title]')).getAttribute('value')).toBe('Mr');
        await expect(element(by.css('input[formControlName=firstName]')).getAttribute('value')).toBe('govinda');
        await expect(element(by.css('input[formControlName=lastName]')).getAttribute('value')).toBe('raju');
        await expect(element(by.css('input[formControlName=email]')).getAttribute('value')).toBe('govinda@rpwebappsin');
        await expect(element(by.css('input[formControlName=password]')).getAttribute('value')).toBe('123456');
        await expect(element(by.css('input[formControlName=confirmPassword]')).getAttribute('value')).toBe('123456');
        await expect(element(by.css('input[formControlName=acceptTerms]')).getAttribute('value')).toBe('on');

    });

    /* it('angular home page', async () => {
        const ah = new angularHome();
        await browser.get('https://angularjs.org');
        await ah.angularLink.click();
        await ah.search.sendKeys('hello');
    }); */

});
