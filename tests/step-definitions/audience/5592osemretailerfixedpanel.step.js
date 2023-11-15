import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import OsemPage from "../../pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../helper/commands";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 5592. Create Population Blast Retailer - Fixed panel"
);
allureReporter.addFeature("Population Blast Retailer");

Given(/^I am on Audience Baru on osem page$/, async function () {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.OsemAudience();
  await frameHome();
});

When(/^I click button 'Tambah'$/, async function () {
  await OsemPage.buttonBuat();
});

Then(
  /^I am on form create Audience Baru on Population Blast page, input and submit data$/,
  async function () {
    await frameForm();
    await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-082023");
    await OsemPage.inputSelectBoxSingle(0, "Retailer");
    await OsemPage.inputSelectBoxMultiple(1, ["DTE"]);
    await OsemPage.inputSelectBoxMultiple(2, ["B2B Order Value"]);
    await OsemPage.clickRadioButton("fixed-panel");
    await OsemPage.importCsvFixedPanel();
    //====================================
    await OsemPage.clickButtonCheck();
    await OsemPage.clickButtonExport();
    await OsemPage.clickButtonSimpan();
  }
);
