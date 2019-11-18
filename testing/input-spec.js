describe('Input Element', () => {
    browser.get('http://localhost:4200/input');
    beforeAll(function() {
    element(by.name('price')).sendKeys(2);
    });
    it('check username', ()=>{
        var username = element.all(by.name('username'));
        expect(username).toBeDefined();
        expect(username).toBeTruthy();
    })

    it('check price', ()=>{
        var price = element(by.name('price')).getAttribute("value");
        expect(price).toBeDefined();
        expect(price).toBeTruthy();
        expect(price).toEqual(2);
    })
    it('check Website', ()=>{
        var website = element(by.name('website'));
        expect(website).toBeDefined();
        expect(website).toBeTruthy();
    })
    it('check multiple price', ()=>{
        var mprice = element(by.className('multiple-price'));
        expect(mprice).toBeDefined();
        expect(mprice).toBeTruthy();
    })
    it('check search keyword', ()=>{
        var skey = element(by.name('search-keyword'));
        expect(skey).toBeDefined();
        expect(skey).toBeTruthy();
    })
    it('check keyword', ()=>{
        var keyword = element(by.name('keyword'));
        expect(keyword).toBeDefined();
        expect(keyword).toBeTruthy();
    })
});