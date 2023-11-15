import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import VerifikasiPerangkatPage from '../../pageobjects/login/verifaccount.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 01b');
    allureReporter.addFeature('Login external to The Principal SRC website');

Given(/^I am on the login page Ayo SRC$/, async () => {    
    await LoginPage.open()
    await LoginPage.welcome()
    await LoginPage.acceptCookie()
    await browser.pause(5000)
});

When(/^I login internal with (.*) and (.*)$/, async (email,password) => {
    await LoginPage.loginExternal(email,password)
    await browser.pause(5000)
});

// Then(/^System will leading to Verification Account page for (.*)$/, async (email) => {
//     await VerifikasiPerangkatPage.verifAccountPage(email)
// });

// When(/^I input verification code (.*) and submit$/, async (code) => {
//     await VerifikasiPerangkatPage.verif(code)
//     await browser.pause(20000)
// });

Then(/^System should be leading to Dashboard page and show Account Name (.*)$/, async (accountname) => {
    await MainmenuPage.dashboard(accountname)
    await browser.pause(5000)
});