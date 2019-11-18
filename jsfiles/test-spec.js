"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const protractor_1 = require("protractor");
const angularHome_1 = require("./pageObjects/angularHome");
describe('Angular reactive form testing', () => {
    it('should validate reactive form', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get('http://localhost:4200/reactive-form');
        protractor_1.element(protractor_1.by.css('#submit-btn')).click().then(() => {
            protractor_1.element.all(protractor_1.by.className('invalid-feedback')).each((item) => {
                item.element(protractor_1.by.tagName('p-message')).getAttribute('text').then((eltext) => {
                    //  console.log(eltext, 'error');
                });
            });
        });
        // browser.sleep(1000);
        yield protractor_1.element(protractor_1.by.css('select[formControlName=title]')).sendKeys('Mr');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=firstName]')).sendKeys('govinda');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=lastName]')).sendKeys('raju');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=email]')).sendKeys('govinda@rpwebappsin');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=password]')).sendKeys('123456');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=confirmPassword]')).sendKeys('123456');
        yield protractor_1.element(protractor_1.by.css('input[formControlName=acceptTerms]')).click();
        yield protractor_1.element(protractor_1.by.css('#submit-btn')).click();
        // browser.sleep(2000);
        yield expect(protractor_1.element(protractor_1.by.css('select[formControlName=title]')).getAttribute('value')).toBe('Mr');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=firstName]')).getAttribute('value')).toBe('govinda');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=lastName]')).getAttribute('value')).toBe('raju');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=email]')).getAttribute('value')).toBe('govinda@rpwebappsin');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=password]')).getAttribute('value')).toBe('123456');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=confirmPassword]')).getAttribute('value')).toBe('123456');
        yield expect(protractor_1.element(protractor_1.by.css('input[formControlName=acceptTerms]')).getAttribute('value')).toBe('on');
    }));
    it('angular home page', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ah = new angularHome_1.angularHome();
        yield protractor_1.browser.get('https://angularjs.org');
        yield ah.angularLink.click();
        yield ah.search.sendKeys('hello');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFnRDtBQUNoRCwyREFBd0Q7QUFDeEQsUUFBUSxDQUFDLCtCQUErQixFQUFFLEdBQUcsRUFBRTtJQUczQyxFQUFFLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO1FBQzNDLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDbkQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM3QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUMxRSxpQ0FBaUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILHVCQUF1QjtRQUN2QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLFFBQVEs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