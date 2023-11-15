import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import CallToActionPage from "../../pageobjects/calltoaction/cta.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
const dataTest = require("../../testdata/dte.data");

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 62. CTA Customized");
allureReporter.addFeature("CTA Customized");

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

When(/^I click tab Customized and import CTA$/, async () => {
  await CallToActionPage.openTabCustomized();
  await CallToActionPage.importCustomized();
});

Then(/^System should be able submit file$/, async () => {
  await CallToActionPage.importCustomized();
  await browser.pause(5000);
  await CallToActionPage.deleteCTA();
});
