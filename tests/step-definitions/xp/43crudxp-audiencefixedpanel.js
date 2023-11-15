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
allureReporter.addTestId("[PRINCIPAL] 43. CRUD XP (Audience Fixed Panel)");
allureReporter.addFeature("CRUD XP (Audience Population Blast)");

//  Scenario Outline: As a user, I can create XP - Audience Fixed Panel
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
  await FormXPPage.name(dataTest.XP.namaProgramXPFP);
  await FormXPPage.date(
    dataTest.XP.startDate,
    dataTest.XP.endDate,
    dataTest.XP.endAtDate
  );
  await FormXPPage.levelFP(
    dataTest.XP.jumlahLevelFP,
    dataTest.XP.level1FP,
    dataTest.XP.batas1FP,
    dataTest.XP.level2FP,
    dataTest.XP.batas2FP,
    dataTest.XP.level3FP,
    dataTest.XP.batas3FP
  );
  await FormXPPage.EditLevel1(dataTest.XP.inputLevel1);
  await FormXPPage.EditLevel2(dataTest.XP.inputLevel2);
  await FormXPPage.EditLevel3(dataTest.XP.inputLevel3);
  await FormXPPage.appVer(dataTest.XP.minVersionFP);
  await FormXPPage.submitForm();
});

Then(/^System should be leading to tab Audience$/, async () => {
  await frameForm();
  await FormXPPage.viewTabAudience();
});

When(/^I input form tab Audience and submit$/, async () => {
  await browser.pause(5000);
  await FormXPPage.fixedPanel();
});

Then(/^System should be leading to tab Pengaturan XP$/, async () => {
  await browser.pause(5000);
  await FormXPPage.viewTabPengaturanXP();
});

When(/^I input form tab Pengaturan XP and submit$/, async () => {
  await browser.pause(5000);
  await FormXPPage.progressBarFP(
    dataTest.XP.progressBarFP1,
    dataTest.XP.progressBarFP2,
    dataTest.XP.progressBarFP3,
    dataTest.XP.progressBarFP4,
    dataTest.XP.progressBarFP5,
    dataTest.XP.progressBarFP6,
    dataTest.XP.progressBarFP7
  );
  await FormXPPage.fullBarFP(dataTest.XP.fullBarFP1, dataTest.XP.fullBarFP2);
  await FormXPPage.snkFP(
    dataTest.XP.SnK1,
    dataTest.XP.SnK2,
    dataTest.XP.SnK3,
    dataTest.XP.SnK4
  );
  await FormXPPage.cwBarFP(
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
  await browser.pause(5000);
  await FormXPPage.publishFP();
});

Then(
  /^System should be leading to XP page and success publish XP$/,
  async () => {
    await frameHome();
    await XPPage.search(dataTest.XP.namaProgramXPFP);
    await browser.pause(10000);
  }
);

When(/^I edit and delete XP$/, async () => {
  await XPPage.editXP();
  await frameForm();
  await FormXPPage.name(dataTest.XP.namaProgramXPFPedit);
  await FormXPPage.submitForm();
  await frameForm();
  await XPPage.deleteXP();
});

Then(/^System should be delete XP$/, async () => {
  await XPPage.search(dataTest.XP.namaProgramXPFPedit);
  await browser.pause(5000);
});
