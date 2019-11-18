import { browser, by, element, ElementFinder } from 'protractor';

export class ReactiveFormPage {
  title: ElementFinder;
  firstName: ElementFinder;
  lastName: ElementFinder;
  email: ElementFinder;
  password: ElementFinder;
  confirmpassword: ElementFinder;
  acceptTerms: ElementFinder;
  submit: ElementFinder;
  constructor() {
      this.title =  element(by.css('select[formControlName=title]'));
      this.firstName = element(by.css('input[formControlName=firstName]'));
      this.lastName =  element(by.css('input[formControlName=lastName]'));
      this.email =  element(by.css('input[formControlName=email]'));
      this.password =  element(by.css('input[formControlName=password]'));
      this.confirmpassword =  element(by.css('input[formControlName=confirmPassword]'));
      this.acceptTerms =  element(by.css('input[formControlName=acceptTerms]'));
      this.submit = element(by.id('submit-btn'));
  }
  navigateTo() {
    return browser.get(browser.baseUrl.concat('/reactive-form')) as Promise<any>;
  }
  getForm() {
    return element(by.css('#registrationForm'));
  }
  getPageTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }
  getFirstNameTextbox() {
    return element(by.css('input[formControlName=firstName]'));
   }
   getLastNameTextbox() {
    return element(by.css('input[formControlName=lastName]'));
   }
   getEmailTextbox() {
    return element(by.css('input[formControlName=email]'));
   }
   getPasswordTextbox() {
    return element(by.css('input[formControlName=password]'));
   }
}
