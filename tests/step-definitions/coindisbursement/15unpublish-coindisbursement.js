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
  "[PRINCIPAL] 15. Coin Disbursement - Unpublish Coin Disbursement"
);
allureReporter.addFeature("Unpublish Coin Disbursement");

Given(/^I am on the Coin Disbursement page$/, async () => {
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
Then(
  /^System should be according data coin disbursement based on search keyword$/,
  async () => {
    await CoinDisbursementPage.searchResult(
      dataTest.coinDisbursement.namaProgramPenukaranKoin1315
    );
  }
);

When(/^I click button edit a published coin disbursement$/, async () => {
  // await CoinDisbursementPage.checkStatus(dataTest.coinDisbursement.statusDraft)
  await CoinDisbursementPage.editATask(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

Then(/^System should be leading to form edit Coin Disbursement$/, async () => {
  await FormCoinDisbursementPage.pageEdit(
    dataTest.coinDisbursement.namaProgramPenukaranKoin1315
  );
});

When(/^I click button 'Unpublish' on tab Target Penerima$/, async () => {
  await FormCoinDisbursementPage.viewTabTargetPenerima();
  await FormCoinDisbursementPage.saveTP();
});

Then(
  /^System should be able to save and unpublish draft coin disbursement$/,
  async () => {
    // await CoinDisbursementPage.checkStatus(dataTest.coinDisbursement.statusUnpublish)
    await CoinDisbursementPage.page();
    await CoinDisbursementPage.pageList();
  }
);
