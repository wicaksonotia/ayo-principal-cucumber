import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[PRINCIPAL] 01a');
allureReporter.addFeature('Success sign out from The Principal SRC website');

Given(/^I am on The Principal Ayo SRC website$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
});

When(/^I sign out from The Principal Ayo Src website$/, async () => {
    await MainmenuPage.signOut()
});

Then(/^System should be leading to Home page Ayo Src$/, async () => {
    await LoginPage.welcome()
});