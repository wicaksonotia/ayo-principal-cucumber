import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../pageobjects/coindisbursement/formcoindisbursement.page";
import SubGTPPage from "../../pageobjects/subgtp/subgtp.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 14. Coin Disbursement - Setup program penukaran coin"
);
allureReporter.addFeature("Set up program Coin Disbursement");

Given(/^I am in Coin Disbursement page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SubGroupTradeProgram();
  await SubGTPPage.pageList();
  await SubGTPPage.search(dataTest.subGroupTradeProgram.searchByName);
  await SubGTPPage.searchResult(dataTest.subGroupTradeProgram.searchByName);
  await browser.pause(5000);
  // await SubGTPPage.viewDetailATask(dataTest.subGroupTradeProgram.searchByName)
  await CoinDisbursementPage.open();
  await LoginPage.acceptCookie();
  // await CoinDisbursementPage.page()
  await CoinDisbursementPage.pageList();
});

When(/^I click button 'Buat'$/, async () => {
  await CoinDisbursementPage.createNew();
});

Then(
  /^System should be leading to form create Coin Disbursement$/,
  async () => {
    await FormCoinDisbursementPage.page();
  }
);

Given(/^I am in the Coin Disbursement page$/, async () => {
  await FormCoinDisbursementPage.pageCreate();
  await browser.pause(60000);
});

When(/^I input form$/, async () => {
  await FormCoinDisbursementPage.createNew(
    dataTest.coinDisbursement.namaProgramPenukaranKoin14,
    dataTest.coinDisbursement.coinValution14
  );
  await FormCoinDisbursementPage.selectOpsiPenukaranTB();
});

When(/^I click button submit$/, async () => {
  await FormCoinDisbursementPage.submitForm();
  await FormCoinDisbursementPage.saveTP();
});

Then(/^System should be able submit program coin disbursement$/, async () => {
  await CoinDisbursementPage.page();
});

Given(/^I am on the Coin Disbursement page$/, async () => {
  await CoinDisbursementPage.pageList();
});

When(/^I search a coin disbursement$/, async () => {
  await CoinDisbursementPage.search(
    dataTest.coinDisbursement.namaProgramPenukaranKoin14
  );
});

Then(
  /^System should be according data coin disbursement based on search keyword$/,
  async () => {
    await CoinDisbursementPage.searchResult(
      dataTest.coinDisbursement.namaProgramPenukaranKoin14
    );
  }
);
