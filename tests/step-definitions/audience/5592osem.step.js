import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import OsemPage from "../../pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../helper/commands";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5592. CRUD Audience on OSEM");
allureReporter.addFeature("CRUD Audience on OSEM");

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
    await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-09062023");
    await OsemPage.inputBusinessType("Retailer");
    await OsemPage.inputAllField(0, ["Semua"]);
    await OsemPage.inputAllField(1, ["Semua"]);
    await OsemPage.clickRadioButton("population-blast");
    await OsemPage.inputAllField(2, ["Semua"]);
    await OsemPage.inputAllField(3, ["Semua"]);
    await OsemPage.inputAllField(4, ["Semua"]);
    await OsemPage.inputAllField(5, ["Semua"]);
    await OsemPage.inputPanelDataRetailer(0, "Retailer User Profile");
    await OsemPage.inputPanelDataSrcClassification(1, "SRC Classification");
    // await OsemPage.inputAllField(6, ["Select All"]);
  }
);

Then(
  /^I am on form create Audience Baru on Fixed Panel page, input and submit data$/,
  async function () {
    // await frameForm();
    // await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-09062023");
    // await OsemPage.inputBusinessType(["Retailer"]);
    // await OsemPage.inputAllField(0, ["DTE Retailer"]);
    // await OsemPage.inputAllField(1, ["B2B Increase"]);
    // await OsemPage.clickRadioButton("fixed-panel");
    // await OsemPage.importCsvFixedPanel();
  }
);
