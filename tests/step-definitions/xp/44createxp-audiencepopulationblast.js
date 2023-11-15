import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import XPPage from "../../pageobjects/xp/xp.page";
import FormXPPage from "../../pageobjects/xp/form.page";
const dataTest = require("../../testdata/dte.data");
import { frameHome, frameForm } from "../../helper/commands";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 44. CRUD XP (Audience Population Blast)");
allureReporter.addFeature("CRUD XP (Audience Population Blast)");

//  Scenario Outline: As a user, I can create XP - Audience Population Blast
Given(/^I am on the XP page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.XP();
  await frameHome();
});

When(/^I click button 'Tambah'$/, async () => {
  await XPPage.createNew();
  await browser.pause(3000);
  await browser.keys("Enter");
});

Then(/^System should be leading to form create XP$/, async () => {});

When(/^I input form tab XP and submit$/, async () => {
  await frameForm();
  await FormXPPage.name(dataTest.XP.namaProgramXP);
  await FormXPPage.date(
    dataTest.XP.startDate,
    dataTest.XP.endDate,
    dataTest.XP.endAtDate
  );
  await FormXPPage.level(
    dataTest.XP.jumlahLevel,
    dataTest.XP.level1,
    dataTest.XP.batas1,
    dataTest.XP.level2,
    dataTest.XP.batas2
  );
  await FormXPPage.EditLevel1(dataTest.XP.inputLevel1);
  await FormXPPage.EditLevel2(dataTest.XP.inputLevel2);
  await FormXPPage.appVer(dataTest.XP.minVersion);
  await FormXPPage.submitForm();
});

Then(/^System should be leading to tab Audience$/, async () => {
  await frameForm();
  await FormXPPage.viewTabAudience();
});

When(/^I input form tab Audience and submit$/, async () => {
  await browser.pause(5000);
  await FormXPPage.populationBlast();
});

Then(/^System should be leading to tab Pengaturan XP$/, async () => {
  await browser.pause(5000);
  await FormXPPage.viewTabPengaturanXP();
});

When(/^I input form tab Pengaturan XP and submit$/, async () => {
  await browser.pause(5000);
  await FormXPPage.pengaturanXPPB(
    dataTest.XP.progressBarPB,
    dataTest.XP.fullBarPB,
    dataTest.XP.emptyTopPB,
    dataTest.XP.emptyBottomPB,
    dataTest.XP.fullTopPB,
    dataTest.XP.fullBottomPB
  );
});

Then(/^System should be leading to tab Preview$/, async () => {
  await browser.pause(5000);
  await FormXPPage.viewTabPreview();
});

When(/^I click button 'Publish'$/, async () => {
  await browser.pause(10000);
  await FormXPPage.publish();
});

Then(
  /^System should be leading to XP page and success publish XP$/,
  async () => {
    await frameHome();
    await XPPage.search(dataTest.XP.namaProgramXP);
    await browser.pause(5000);
  }
);
