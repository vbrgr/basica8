import {browser, element, by} from 'protractor';
import { Calculator } from 'pageObjects/calculator';

describe('Angular Calculator testing', () => {
    function Calc(a, b, c, r) {
      const cal = new Calculator();
      cal.firstEditbox.sendKeys(a);
      cal.secondEditbox.sendKeys(b);

      element.all(by.tagName('option')).each((item) => {
            item.getAttribute('value').then((values) => {
                if (values === c) {
                    item.click();
                }
            });
        });
      element(by.id('gobutton')).click();
      expect(element(by.css('td:nth-child(3)')).getText()).toBe(r);
    }
    beforeEach( () => {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });
    it('should calculate MULTIPLICATION result', () => {
        Calc(4, 3, 'MULTIPLICATION', '12');
      /*   element.all(by.repeater('result in memory')).count().then(function(text){
           // console.log(text,'count');
        })
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(eltext){
            });
        }); */
    });
    it('should calculate DIVISION result', () => {
        Calc(8, 2, 'DIVISION', '4');
    });
    it('should calculate ADDITION result', () => {
        Calc(2, 3, 'ADDITION', '5');
    });
    it('should calculate SUBTRACTION result', () => {
        Calc(7, 3, 'SUBTRACTION', '4');
    });
    it('should calculate MODULO result', () => {
        Calc(5, 5, 'MODULO', '0');
    });
});
