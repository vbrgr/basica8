import { ReactiveFormPage } from './reactive-form.po';
import { browser, logging } from 'protractor';
describe('reactive form validate', () => {
  let page: ReactiveFormPage;

  beforeEach(() => {
    page = new ReactiveFormPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Registration');
  });
  it('Login form should be invalid', () => {
    page.getFirstNameTextbox().sendKeys('');
    page.getLastNameTextbox().sendKeys('');
    page.getEmailTextbox().sendKeys('');
    page.getPasswordTextbox().sendKeys('');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-invalid');
   });
  it('validate first name', () => {
    page.navigateTo();
    page.getFirstNameTextbox().sendKeys('govind');
    expect(page.getFirstNameTextbox().getAttribute('value')).toEqual('govind');
  });
  it('validate last name', () => {
    page.navigateTo();
    page.getLastNameTextbox().sendKeys('raju');
    expect(page.getLastNameTextbox().getAttribute('value')).toEqual('raju');
  });
  it('validate email', () => {
    page.navigateTo();
    page.getEmailTextbox().sendKeys('govinda@rpwebapps.in');
    expect(page.getEmailTextbox().getAttribute('value')).toEqual('govinda@rpwebapps.in');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
