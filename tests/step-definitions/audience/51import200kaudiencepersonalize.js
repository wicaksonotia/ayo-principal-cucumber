import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import AudiencePage from "../../pageobjects/audience/audience.page";
import FormAudiencePage from "../../pageobjects/audience/formaudience.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 51. Import 200k Audience Personalize");
allureReporter.addFeature("Import 200k Audience Personalize");

//  Scenario Outline: As a user, I can create and import Audience
Given(/^I am on the tab Personalize Audience page$/, async () => {
  await LoginPage.open();
  //await browser.pause(3000)
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.audience();
  await AudiencePage.page();
});

When(/^I am click button 'Buat'$/, async () => {
  await AudiencePage.pageList();
  await AudiencePage.goToPersonalize();
  await AudiencePage.createAudience();
});

Then(/^System should be leading to form create Audience$/, async () => {
  // await FormAudiencePage.page()
});

Given(/^I am on the from create Audience page$/, async () => {
  await FormAudiencePage.pageCreatePersonalize();
});

When(/^I input form and also import csv Audience$/, async () => {
  await FormAudiencePage.createImportPersonalize200(
    dataTest.audience.namaGrupPerso200
  );
});

Then(
  /^System should be able submit form Audience and leading to Audience page$/,
  async () => {
    await AudiencePage.page();
  }
);

Given(/^I am on the Audience list page$/, async () => {
  await AudiencePage.goToPersonalize();
  await AudiencePage.pageList();
});

When(/^I search an audience$/, async () => {
  await AudiencePage.searchAudience(dataTest.audience.namaGrupPerso200);
});

Then(
  /^System should be according data Audience based on search keyword$/,
  async () => {
    await AudiencePage.searchResult(dataTest.audience.namaGrupPerso200);
  }
);
