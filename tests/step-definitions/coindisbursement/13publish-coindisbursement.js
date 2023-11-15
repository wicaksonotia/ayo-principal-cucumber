import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import CoinDisbursementPage from "../../pageobjects/coindisbursement/coindisbursement.page";
import FormCoinDisbursementPage from "../../pageobjects/coindisbursement/formcoindisbursement.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 13. Coin Disbursement - Publish Coin Disbursement"
);
allureReporter.addFeature("Publish Coin Disbursement");

Given(/^I am in Coin Disbursement page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
});

When(/^I search a coin disbursement$/, async () => {
  await CoinDisbursementPage.search(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

Then(/^I click button edit a unpublished coin disbursement$/, async () => {
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

Then(/^I click button 'Simpan' on tab Target Penerima$/, async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

Given(/^I am in the Coin Disbursement page$/, async () => {
  await CoinDisbursementPage.pageList();
});

When(/^I search name a coin disbursement$/, async () => {
  await CoinDisbursementPage.search(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

Then(/^I click button edit a draft coin disbursement$/, async () => {
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

Then(/^I click button 'Simpan' Target Penerima$/, async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

Then(
  /^System should be able to save and publish draft coin disbursement$/,
  async () => {
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.pageList();
  }
);
