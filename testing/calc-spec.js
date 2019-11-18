describe('Angular Calculator testing', function() {
    function Calc(a,b,c,r){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
       
        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){
                if(values==c){
                    item.click(); 
                }
            })
        })
        element(by.id('gobutton')).click();
        expect(element(by.css("td:nth-child(3)")).getText()).toBe(r);
    }
    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
    });
     it('should calculate MULTIPLICATION result', function() {
        Calc(4,3,'MULTIPLICATION','12');
      /*   element.all(by.repeater('result in memory')).count().then(function(text){
           // console.log(text,'count');
        })
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(eltext){
            });
        }); */
    });
    it('should calculate DIVISION result', function() {
        Calc(8,2,'DIVISION','4');
    });
    it('should calculate ADDITION result', function() {
        Calc(2,3,'ADDITION','5');                                                                                                                                                                           
    });
    it('should calculate SUBTRACTION result', function() {
        Calc(7,3,'SUBTRACTION','4');
    });
    it('should calculate MODULO result', function() {
        Calc(5,5,'MODULO','0');
    });
});