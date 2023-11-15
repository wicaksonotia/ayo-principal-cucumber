import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import OsemPage from "../../pageobjects/audience/osem.page";
import { frameHome, frameForm } from "../../helper/commands";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 5592. Create Population Blast Wholesaler"
);
allureReporter.addFeature("Population Blast Wholesaler");

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
    await OsemPage.inputNamaGroup("Wholesaler tia-092023");
    await OsemPage.inputSelectBoxSingle(0, "Wholesaler");
    await OsemPage.inputSelectBoxMultiple(1, ["Semua"]); //channel
    await OsemPage.inputSelectBoxMultiple(2, ["Semua"]); //objective
    await OsemPage.clickRadioButton("population-blast");
    await OsemPage.inputSelectBoxMultiple(3, ["Semua"]); //zone
    await OsemPage.inputSelectBoxMultiple(4, ["Semua"]); //regional
    await OsemPage.inputSelectBoxMultiple(5, ["Semua"]); //area
    await OsemPage.inputSelectBoxMultiple(6, ["MITRA"]); //classification
    // =========PANEL DATA - 1=========
    await OsemPage.inputSelectBoxSingle(7, "B2B - Wholesaler Transaction");
    await OsemPage.inputSelectBoxSingle(8, "Orders by SKU");
    await OsemPage.inputSelectBoxSingle(9, "Testing - Wholesaler HMS SoM Area");
    await OsemPage.inputSelectBoxMultiple(10, ["AQUA 600mL"]);
    await OsemPage.inputSelectBoxSingle(11, "YTD");
    await OsemPage.inputSelectBoxSingle(12, "<");
    await OsemPage.inputIsianTextBox(0, 100);
    // =========PANEL DATA - 2=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(13, "B2B - Wholesaler Transaction");
    await OsemPage.inputSelectBoxSingle(14, "Orders by SKU");
    await OsemPage.inputSelectBoxSingle(
      15,
      "Testing - Wholesaler HMS SoM Area"
    );
    await OsemPage.inputSelectBoxMultiple(16, ["Select All"]);
    await OsemPage.inputSelectBoxSingle(17, "LM");
    await OsemPage.inputSelectBoxSingle(18, ">=");
    await OsemPage.inputIsianTextBox(1, 95.99);
    // =========TAMBAH DATA - 3=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(19, "B2B - Wholesaler Transaction");
    await OsemPage.inputSelectBoxSingle(20, "Orders by Company");
    await OsemPage.inputSelectBoxSingle(21, "Testing - Average order weekly");
    await OsemPage.inputSelectBoxMultiple(22, ["Danone"]);
    await OsemPage.inputSelectBoxSingle(23, "LY");
    await OsemPage.inputSelectBoxSingle(24, ">");
    await OsemPage.inputIsianTextBox(2, 123.45);
    // =========TAMBAH DATA - 4=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(25, "B2B - Wholesaler Transaction");
    await OsemPage.inputSelectBoxSingle(26, "Orders by Brand");
    await OsemPage.inputSelectBoxSingle(27, "Testing - Average order weekly");
    await OsemPage.inputSelectBoxMultiple(28, ["AQUA"]);
    await OsemPage.inputSelectBoxSingle(29, "YTD");
    await OsemPage.inputSelectBoxSingle(30, "=");
    await OsemPage.inputIsianTextBox(3, 19.0);
    // =========TAMBAH DATA - 5=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(
      31,
      "Dist Hub - Wholesaler Transaction"
    );
    await OsemPage.inputSelectBoxSingle(32, "Orders by Brand");
    await OsemPage.inputSelectBoxSingle(33, "Vol Mitra to Hub - Grammage");
    await OsemPage.inputSelectBoxMultiple(34, ["Select All"]);
    await OsemPage.inputSelectBoxSingle(35, "L8W");
    await OsemPage.inputSelectBoxSingle(36, "=");
    await OsemPage.inputIsianTextBox(4, 123456);
    // =========TAMBAH DATA - 6=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(37, "Wholesaler User Profile");
    await OsemPage.inputSelectBoxSingle(38, "Active Delivery Feature?");
    await OsemPage.inputSelectBoxSingle(39, "Inactive");
    // =========TAMBAH DATA - 6=========
    await OsemPage.clickButtonTambahData();
    await OsemPage.inputSelectBoxSingle(40, "Wholesaler User Profile");
    await OsemPage.inputSelectBoxSingle(41, "Active Delivery Feature?");
    await OsemPage.inputSelectBoxSingle(42, "Active");
    //====================================
    await OsemPage.clickCheckboxRecommended();
    await OsemPage.clickButtonCheck();
    await OsemPage.clickButtonExport();
    await OsemPage.clickButtonSimpan();
  }
);

Then(
  /^I am on form create Audience Baru on Fixed Panel page, input and submit data$/,
  async function () {
    // await frameForm();
    //   await OsemPage.inputNamaGroup("Fixed Panel Retailer tia-09062023");
    //   await OsemPage.inputBusinessType(["Retailer"]);
    //   await OsemPage.inputSelectBoxMultiple(1, ["DTE Retailer"]);
    //   await OsemPage.inputSelectBoxMultiple(2, ["B2B Increase"]);
    //   await OsemPage.clickRadioButton("fixed-panel");
    //   await OsemPage.importCsvFixedPanel();
  }
);
