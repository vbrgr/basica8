describe('Angular reactive form testing', function() {
    

    it('should validate reactive form', function() {
        browser.get('http://localhost:4200/reactive-form');
        element(by.css('#submit-btn')).click().then(function(){
            element.all(by.className('invalid-feedback')).each(function(item){
                item.element(by.tagName('p-message')).getAttribute('text').then(function(eltext){
                  //  console.log(eltext, 'error');
                });
            })
        });
        //browser.sleep(1000);
        element(by.css("select[formControlName=title]")).sendKeys('Mr');
        element(by.css("input[formControlName=firstName]")).sendKeys('govinda');
        element(by.css("input[formControlName=lastName]")).sendKeys('raju');
        element(by.css("input[formControlName=email]")).sendKeys('govinda@rpwebappsin');
        element(by.css("input[formControlName=password]")).sendKeys('123456');
        element(by.css("input[formControlName=confirmPassword]")).sendKeys('123456');
        element(by.css("input[formControlName=acceptTerms]")).click();
        element(by.css('#submit-btn')).click();
        //browser.sleep(2000);
        expect(element(by.css("select[formControlName=title]")).getAttribute('value')).toBe('Mr');
        expect(element(by.css("input[formControlName=firstName]")).getAttribute('value')).toBe('govinda');
        expect(element(by.css("input[formControlName=lastName]")).getAttribute('value')).toBe('raju');
        expect(element(by.css("input[formControlName=email]")).getAttribute('value')).toBe('govinda@rpwebappsin');
        expect(element(by.css("input[formControlName=password]")).getAttribute('value')).toBe('123456');
        expect(element(by.css("input[formControlName=confirmPassword]")).getAttribute('value')).toBe('123456');
        expect(element(by.css("input[formControlName=acceptTerms]")).getAttribute('value')).toBe('on');

    });

   
});