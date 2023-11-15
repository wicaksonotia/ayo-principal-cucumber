import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import FlushCoinPage from "../../pageobjects/flushcoin/flushcoin.page";
import { frameHome, frameForm } from "../../helper/commands";

allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5205. CRUD Flush Coin");
allureReporter.addFeature("CRUD Flush Coin");

Given(/^I am on Flush Coin page$/, async function () {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropdownUndian();
  await MainmenuPage.FlushCoin();
  await frameHome();
});

When(/^I click button 'Tambah'$/, async function () {
  await FlushCoinPage.buttonBuat();
});

Then(
  /^I am on form create Flush Coin page, input and submit data$/,
  async function () {
    await frameForm();
    await FlushCoinPage.inputLotteryprogram("Program Undian Jadi Lebih Baik");
    await FlushCoinPage.inputFieldTabSetupFlushCoin(0, [
      "131221 Trade Program PBO",
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(1, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(2, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.simpan();
  }
);

Then(/^Click tab Audience, input and execute data$/, async function () {
  await frameForm();
  await FlushCoinPage.tabAudience();
  await FlushCoinPage.backToListGrid();
});

Then(/^I am on list data, and click edit$/, async function () {
  await frameHome();
  console.log("waktunya geser kekanan");
  await FlushCoinPage.searchData("Program Undian Jadi Lebih Baik");
  await FlushCoinPage.edit();
  await frameForm();
  await FlushCoinPage.tabAudience();
  await FlushCoinPage.inputFieldTabAudience(1, ["ZONENORTHSUM"]);
  await FlushCoinPage.inputFieldTabAudience(2, ["SLSSW1"]);
  await FlushCoinPage.inputFieldTabAudience(3, ["SLSPPW"]);
  await FlushCoinPage.prosesAudience();
});

/**
 * Buat lagi, tetapi audience-nya pakai fixed panel
 */

Then(/^I click button 'Tambah' again$/, async function () {
  console.log("Buat lagi, tetapi audience-nya pakai fixed panel");
  await frameHome();
  await FlushCoinPage.buttonBuat();
});

Then(
  /^I am on form create Flush Coin page, input and submit data again$/,
  async function () {
    await frameForm();
    await FlushCoinPage.inputLotteryprogram("Program Undian Jadi Lebih Baik");
    await FlushCoinPage.inputFieldTabSetupFlushCoin(0, [
      "131221 Trade Program PBO",
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(1, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.inputFieldTabSetupFlushCoin(2, [
      "for testing kelvin 2023 2",
    ]);
    await FlushCoinPage.simpan();
  }
);

Then(
  /^Click tab Audience, click fixed panel, input and execute data$/,
  async function () {
    await frameForm();
    await FlushCoinPage.tabAudience();
    await FlushCoinPage.clickFixedPanel("fixed-panel");
    await FlushCoinPage.importCsvFixedPanel();
    await FlushCoinPage.prosesAudience();
  }
);
