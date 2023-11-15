import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import OsemPage from "../../pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../helper/commands";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5592. Create Population Blast Retailer");
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
    await OsemPage.inputSelectBoxMultiple(1, ["Semua"]); //channel
    await OsemPage.inputSelectBoxMultiple(2, ["Semua"]); //objective
    await OsemPage.clickRadioButton("population-blast");
    await OsemPage.inputSelectBoxMultiple(3, ["Semua"]); //zone
    await OsemPage.inputSelectBoxMultiple(4, ["Semua"]); //regional
    await OsemPage.inputSelectBoxMultiple(5, ["Semua"]); //area
    await OsemPage.inputSelectBoxMultiple(6, ["Semua"]); //classification
    // =========PANEL DATA - 1=========
    await OsemPage.inputSelectBoxSingle(7, "Retailer User Profile"); //panel data-retailer user profile
    await OsemPage.inputSelectBoxSingle(8, "SRC Classification"); //panel data-src classification
    await OsemPage.inputSelectBoxMultiple(9, ["Select All"]); //panel data-status src
    // =========PANEL DATA - 2=========
    // await OsemPage.clickButtonTambahData();
    // await OsemPage.inputSelectBoxSingle(10, "Payment Method - Retailer Data");
    // await OsemPage.inputSelectBoxSingle(11, "Comply KYC Payment Method At?");
    // await OsemPage.inputSelectBoxMultiple(12, ["OVO"]);
    // await OsemPage.inputSelectBoxSingle(13, "LW");
    // await OsemPage.inputSelectBoxSingle(14, "Active");
    // =========PANEL DATA - 3=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(
      10,
      "B2B Detailed - Retailer Transaction"
    );
    await OsemPage.inputSelectBoxSingle(11, "Orders by Brand");
    await OsemPage.inputSelectBoxSingle(12, "Volume - Largest Package");
    await OsemPage.inputSelectBoxMultiple(13, ["FRUIT TEA", "SOSRO"]);
    await OsemPage.inputSelectBoxSingle(14, "LW");
    await OsemPage.inputSelectBoxSingle(15, ">=");
    await OsemPage.inputIsianTextBox(0, 99.99);
    // =========PANEL DATA - 4=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(
      16,
      "B2B Detailed - Retailer Transaction"
    );
    await OsemPage.inputSelectBoxSingle(17, "Orders by Company");
    await OsemPage.inputSelectBoxSingle(18, "Volume - Largest Package");
    await OsemPage.inputSelectBoxMultiple(19, ["NESTLE"]);
    await OsemPage.inputSelectBoxSingle(20, "YTD");
    await OsemPage.inputSelectBoxSingle(21, "=");
    await OsemPage.inputIsianTextBox(1, 100);
    // =========PANEL DATA - 5=========
    // await OsemPage.clickButtonTambahData();
    // await OsemPage.inputSelectBoxSingle(27, "DTE - Retailer");
    // await OsemPage.inputSelectBoxSingle(
    //   28,
    //   "Testing - Average submission per week"
    // );
    // await OsemPage.inputSelectBoxSingle(29, "LY");
    // await OsemPage.inputSelectBoxSingle(30, "<");
    // await OsemPage.inputIsianTextBox(2, 12.345);
    // =========TAMBAH DATA - 5=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(
      22,
      "B2B General - Retailer Transaction"
    );
    await OsemPage.inputSelectBoxSingle(23, "Order Value - All SKU");
    await OsemPage.inputSelectBoxSingle(24, "L4W");
    await OsemPage.inputSelectBoxSingle(25, "<=");
    await OsemPage.inputIsianTextBox(2, 18.0);
    //====================================
    // await OsemPage.clickButtonCheck();
    // await OsemPage.clickButtonExport();
    // await OsemPage.clickButtonSimpan();
  }
);
