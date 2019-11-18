import { Given, When, Then } from 'cucumber';
import { Calculator } from '../pageObjects/calculator';
import { browser } from 'protractor';
import { ReactiveForm } from '../pageObjects/reactiveForm';
import chai from 'chai';
const expect = chai.expect;
const cal = new Calculator();
const rf = new ReactiveForm();
Given('I navigate to {string} page', async (site) => {
  // Write code here that turns the phrase above into concrete actions
  if (site === 'calculator') {
  await browser.get('https://juliemr.github.io/protractor-demo/');
  } else if (site === 'reactiveform') {
    await browser.get('http://localhost:4200/reactive-form');
  }
});

When('I add two numbers {string} and {string}', async (string1, string2) => {

  // Write code here that turns the phrase above into concrete actions
    await cal.firstEditbox.sendKeys(string1);
    await cal.secondEditbox.sendKeys(string2);
});
Then('result should be {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await cal.go.click();
  await cal.getResult.getText().then( (text) => {
    expect(text).to.equal(string1);
  });
});
When('I click on submit', async () => {

  await rf.submit.click();
});
When('fill title {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.title.sendKeys(string1);
  await rf.title.getAttribute('value').then( (tittext) => {
    expect(tittext).to.equal(string1);
  });
});
When('fill firstname {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.firstName.sendKeys(string1);
  await rf.firstName.getAttribute('value').then( (firstNametext) => {
    expect(firstNametext).to.equal(string1);
  });
});
When('fill lastname {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.lastName.sendKeys(string1);
  await rf.lastName.getAttribute('value').then( (lastNametext) => {
    expect(lastNametext).to.equal(string1);
  });
});
When('fill email {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.email.sendKeys(string1);
  await rf.email.getAttribute('value').then( (emailtext) => {
    expect(emailtext).to.equal(string1);
  });
});
When('fill password {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.password.sendKeys(string1);
  await rf.password.getAttribute('value').then( (passwordtext) => {
    expect(passwordtext).to.equal(string1);
  });
});
When('fill confirmpassword {string}', async (string1) => {
  // Write code here that turns the phrase above into concrete actions
  await rf.confirmpassword.sendKeys(string1);
  await rf.confirmpassword.getAttribute('value').then( (confirmpasswordtext) => {
    expect(confirmpasswordtext).to.equal(string1);
  });
});
When('click acceptTerms', async () => {
  // Write code here that turns the phrase above into concrete actions
  await rf.acceptTerms.click();
});
Then('submit form', async () => {
  await rf.submit.click();
});

