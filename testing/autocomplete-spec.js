
describe('Angular autocomplete text box testing', function() {


    it('select country from autocomplete',function() {
      browser.get('http://localhost:4200/autocomplete');
          browser.actions().mouseMove(element(by.className('ui-autocomplete-input')).sendKeys('india')).perform();
          browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
          browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
          {

          browser.sleep(2000);
          });
    });
});
