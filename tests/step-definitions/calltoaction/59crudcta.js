import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import CallToActionPage from "../../pageobjects/calltoaction/cta.page";
import FormCTAPage from "../../pageobjects/calltoaction/formcta.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 59. CRUD CTA");
allureReporter.addFeature("CRUD CTA");
// Scenario Outline: As a user, I can create, read, update and delete CTA
Given(/^I am on Call To Action page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.cta();
  await browser.pause(10000);
  await CallToActionPage.page();
});

When(/^I click button 'Tambah'$/, async () => {
  await CallToActionPage.createCTA();
});

Then(/^System should be leading to form create Call To Action$/, async () => {
  await FormCTAPage.page();
});

Given(/^I am on form create Call To Action page$/, async () => {
  await FormCTAPage.pageCreate();
});

When(/^I input form and submit$/, async () => {
  await FormCTAPage.createCTA(
    dataTest.cta.nama,
    dataTest.cta.deskripsi,
    dataTest.cta.mulai,
    dataTest.cta.selesai
  );
  await FormCTAPage.selectZone(["ZONENORTHSUM"]);
  await FormCTAPage.selectTargetAudience();
  await FormCTAPage.switchStatus();
  await FormCTAPage.submitCTA();
});

Then(
  /^System should be able to submit form Call To Action and leading to Call To Action page$/,
  async () => {
    await CallToActionPage.pageList();
    await CallToActionPage.expectNewCTA(dataTest.cta.nama);
  }
);

When(/^I edit and delete CTA$/, async () => {
  await CallToActionPage.searchCTA(dataTest.cta.nama);
  await browser.pause(5000);
  await CallToActionPage.editCTA();
  await FormCTAPage.page();
  await FormCTAPage.pageEdit();
  await FormCTAPage.editCTA(dataTest.cta.namaEdit);
  await FormCTAPage.submitCTA();
  await browser.pause(5000);
  await CallToActionPage.pageList();
  await CallToActionPage.expectNewCTAEdited(dataTest.cta.namaEdit);
  await CallToActionPage.searchCTA(dataTest.cta.namaEdit);
  await browser.pause(6000);
  await CallToActionPage.deleteCTA();
});

Then(/^System should be delete CTA$/, async () => {
  await CallToActionPage.searchCTA(dataTest.cta.namaEdit);
  await browser.pause(5000);
});
