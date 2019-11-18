"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjects/calculator");
const protractor_1 = require("protractor");
const reactiveForm_1 = require("../pageObjects/reactiveForm");
const chai_1 = tslib_1.__importDefault(require("chai"));
const expect = chai_1.default.expect;
const cal = new calculator_1.Calculator();
const rf = new reactiveForm_1.ReactiveForm();
cucumber_1.Given('I navigate to {string} page', (site) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (site === 'calculator') {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (site === 'reactiveform') {
        yield protractor_1.browser.get('http://localhost:4200/reactive-form');
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (string1, string2) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield cal.firstEditbox.sendKeys(string1);
    yield cal.secondEditbox.sendKeys(string2);
}));
cucumber_1.Then('result should be {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield cal.go.click();
    yield cal.getResult.getText().then((text) => {
        expect(text).to.equal(string1);
    });
}));
cucumber_1.When('I click on submit', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield rf.submit.click();
}));
cucumber_1.When('fill title {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.title.sendKeys(string1);
    yield rf.title.getAttribute('value').then((tittext) => {
        expect(tittext).to.equal(string1);
    });
}));
cucumber_1.When('fill firstname {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.firstName.sendKeys(string1);
    yield rf.firstName.getAttribute('value').then((firstNametext) => {
        expect(firstNametext).to.equal(string1);
    });
}));
cucumber_1.When('fill lastname {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.lastName.sendKeys(string1);
    yield rf.lastName.getAttribute('value').then((lastNametext) => {
        expect(lastNametext).to.equal(string1);
    });
}));
cucumber_1.When('fill email {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.email.sendKeys(string1);
    yield rf.email.getAttribute('value').then((emailtext) => {
        expect(emailtext).to.equal(string1);
    });
}));
cucumber_1.When('fill password {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.password.sendKeys(string1);
    yield rf.password.getAttribute('value').then((passwordtext) => {
        expect(passwordtext).to.equal(string1);
    });
}));
cucumber_1.When('fill confirmpassword {string}', (string1) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.confirmpassword.sendKeys(string1);
    yield rf.confirmpassword.getAttribute('value').then((confirmpasswordtext) => {
        expect(confirmpasswordtext).to.equal(string1);
    });
}));
cucumber_1.When('click acceptTerms', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield rf.acceptTerms.click();
}));
cucumber_1.Then('submit form', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield rf.submit.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsOERBQTJEO0FBQzNELHdEQUF3QjtBQUN4QixNQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzdCLE1BQU0sRUFBRSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQzlCLGdCQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtJQUNsRCxvRUFBb0U7SUFDcEUsSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFO1FBQzNCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztLQUMvRDtTQUFNLElBQUksSUFBSSxLQUFLLGNBQWMsRUFBRTtRQUNsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7S0FDMUQ7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBRXpFLG9FQUFvRTtJQUNsRSxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFPLE9BQU8sRUFBRSxFQUFFO0lBQ2xELG9FQUFvRTtJQUNwRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsTUFBTSxHQUFHLENBQUMs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