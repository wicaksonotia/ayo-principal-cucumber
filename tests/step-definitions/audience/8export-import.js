import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import AudiencePage from "../../pageobjects/audience/audience.page";
import FormAudiencePage from "../../pageobjects/audience/formaudience.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 08. export-import-Audience");
allureReporter.addFeature("Export import Audience");

//  Scenario Outline: As a user, I can create and import Audience
Given(/^I am on the Audience page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.audience();
  await AudiencePage.page();
});
When(/^I am click button 'Buat'$/, async () => {
  await AudiencePage.pageList();
  await AudiencePage.createAudience();
});

Then(/^System should be leading to form create Audience$/, async () => {
  await FormAudiencePage.page();
});

Given(/^I am on the from create Audience page$/, async () => {
  await FormAudiencePage.pageCreate();
});

When(/^I input form and also import xls Audience$/, async () => {
  await FormAudiencePage.createImport(
    dataTest.audience.namaGrup,
    dataTest.audience.minAudience,
    dataTest.audience.maxAudience
  );
  await FormAudiencePage.importAudience();
  await FormAudiencePage.importFile();
  await FormAudiencePage.sendImportFile();
});

Then(
  /^System should be able submit form Audience and leading to Audience page$/,
  async () => {
    await AudiencePage.page();
  }
);

//  Scenario Outline: As a user, I can edit and export Audience
Given(/^I am on the Audience list page$/, async () => {
  await AudiencePage.pageList();
});

When(/^I search an audience$/, async () => {
  await AudiencePage.searchAudience(dataTest.audience.namaGrup);
});
Then(
  /^System should be according data Audience based on search keyword$/,
  async () => {
    await AudiencePage.searchResult(dataTest.audience.namaGrup);
  }
);

When(/^I click button 'edit' an Audience$/, async () => {
  await AudiencePage.editAudience();
});

Then(/^System should be leading to form edit Audience page$/, async () => {
  await FormAudiencePage.page();
  await FormAudiencePage.pageEdit();
});

When(/^I am click button Export template$/, async () => {
  await FormAudiencePage.exportFile();
});

Then(/^System should be able to download file export Audience$/, async () => {
  await FormAudiencePage.page();
  await browser.pause(6000);
});
