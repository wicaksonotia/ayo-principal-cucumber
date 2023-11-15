import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import VerifikasiPerangkatPage from '../../pageobjects/login/verifaccount.page';
import LoginMicrosoftPage from '../../pageobjects/login/microsoft.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[PRINCIPAL] 01a');
allureReporter.addFeature('Login internal to The Principal SRC website');

Given(/^I am on the login page Ayo SRC$/, async () => {    
    await LoginPage.open()
    await LoginPage.welcome()
    // await browser.deleteAllCookies()
    // await browser.deleteSession()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

When(/^I login internal with (.*)$/, async (email) => {
    await LoginPage.loginInternal(email)
});

Then(/^System should be leading to login Microsoft page$/, async () => {
    await LoginMicrosoftPage.microsoftPage()
    await browser.pause(5000)
});

When(/^I input (.*) Microsoft and submit$/, async (pmintlEmail) => {
    await LoginMicrosoftPage.loginMicrosoft(pmintlEmail)
});

Then(/^System shold be leading to Pmiapps page$/, async () => {
    await LoginMicrosoftPage.pmiappsPage()
});

When(/^I input (.*) Pmintl$/, async (password) => {
    await LoginMicrosoftPage.signInPmiapps(password)
    // await browser.pause(15000)
});

Then(/^System sholud be leading to Verification Account$/, async () => {
    await browser.pause(8000)
    await LoginMicrosoftPage.verifIdentity()
});

When(/^I click yes then input code (.*)$/, async (code) => {
    await LoginMicrosoftPage.staySignedInPage()
    await LoginMicrosoftPage.staySinInYes()
    await VerifikasiPerangkatPage.verif(code)
});

Then(/^System should be leading to Dashboard page with (.*)$/, async (accountname) => {
    await MainmenuPage.dashboard(accountname)
    await browser.pause(5000)
    // await MainmenuPage.signOut()
    // await LoginPage.welcome()
});