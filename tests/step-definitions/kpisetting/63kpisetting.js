import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import KPISettingPage from "../../pageobjects/kpisetting/kpisetting.page";
import FormKPISettingPage from "../../pageobjects/kpisetting/formkpisetting.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 63. KPI Setting");
allureReporter.addFeature("KPI Setting");

// Scenario Outline: As a user, I can create, read, update and delete field force
Given(/^I am on KPI Setting page$/, async () => {
  await KPISettingPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.KPISetting();
  await browser.pause(10000);
  await KPISettingPage.page();
});

When(/^I click button 'Buat'$/, async () => {});

Then(/^System should be leading to form Create KPI Setting$/, async () => {});

Given(/^I am on form Create KPI Setting page$/, async () => {});

When(/^I input form and submit$/, async () => {
  await FormKPISettingPage.createKPI(dataTest.kpiSetting.brand);
  await FormKPISettingPage.submitKPI();
});

Then(
  /^System should be able to submit form KPI Setting and leading to KPI Setting page$/,
  async () => {
    await browser.pause(10000);
  }
);

When(/^I edit KPI Setting$/, async () => {
  await KPISettingPage.editKPI();
  await FormKPISettingPage.editKPI();
  await FormKPISettingPage.submitKPI();
  await browser.pause(30000);
  await KPISettingPage.page();
});

Then(/^System should be update KPI Setting$/, async () => {
  await KPISettingPage.expectNewKPIEdited(dataTest.kpiSetting.statusEdit);
});
