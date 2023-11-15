import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from "../../pageobjects/mainmenu.page";
import AudiencePage from '../../pageobjects/audience/audience.page';
import FormAudiencePage from '../../pageobjects/audience/formaudience.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 57. Create Audience Mitra Non Personalize');
    allureReporter.addFeature('Create Audience Mitra Non Personalize');

//  Scenario Outline: As a user, I can create and import Audience
Given(/^I am on the Audience page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.audience()
    await AudiencePage.page()
});
When(/^I am click button 'Buat'$/, async () => {
    await AudiencePage.pageList()
    await AudiencePage.createAudience()
});

Then(/^System should be leading to form create Audience$/, async () => {
    await FormAudiencePage.page()
});

Given(/^I am on the from create Audience page$/, async () => {
    await FormAudiencePage.pageCreate()
});

When(/^I input form and also import xls Audience$/, async () => {
    await FormAudiencePage.createImportMitra(dataTest.audience.namaGrupMitra)
    // await FormAudiencePage.sendImportFile()
});

Then(/^System should be able submit form Audience and leading to Audience page$/, async () => {
    await AudiencePage.page()
});

Given(/^I am on the Audience list page$/, async () => {
    await AudiencePage.pageList()
});

When(/^I search an audience$/, async () => {
    await AudiencePage.searchAudience(dataTest.audience.namaGrupMitra)
});

Then(/^System should be according data Audience based on search keyword$/, async () => {
    await AudiencePage.searchResult(dataTest.audience.namaGrupMitra)
});