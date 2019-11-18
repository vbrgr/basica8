"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("pageObjects/calculator");
describe('Angular Calculator testing', () => {
    function Calc(a, b, c, r) {
        const cal = new calculator_1.Calculator();
        cal.firstEditbox.sendKeys(a);
        cal.secondEditbox.sendKeys(b);
        protractor_1.element.all(protractor_1.by.tagName('option')).each((item) => {
            item.getAttribute('value').then((values) => {
                if (values === c) {
                    item.click();
                }
            });
        });
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        expect(protractor_1.element(protractor_1.by.css('td:nth-child(3)')).getText()).toBe(r);
    }
    beforeEach(() => {
        protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY2FsYy1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWdEO0FBQ2hELHVEQUFvRDtBQUVwRCxRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDN0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNMLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxVQUFVLENBQUUsR0FBRyxFQUFFO1FBQ2Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7UUFDOUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckM7Ozs7OztnQkFNUTtJQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtRQUN4QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFDM0MsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtRQUN0QyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9