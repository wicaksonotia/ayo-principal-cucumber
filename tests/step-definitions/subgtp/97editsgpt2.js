import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import SubGTPPage from "../../pageobjects/subgtp/subgtp.page";
import FormSubGTPPage from "../../pageobjects/subgtp/form.page";
import CoinRedemptionApprovalPage from "../../pageobjects/coinredemptionapproval/coinredemptionapproval.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 97. Edit Sub Group Trade Program");
allureReporter.addFeature("Edit Sub Group Trade Program");

//Scenario Outline: As a user, I can edit Sub GTP
Given(/^I am on the Sub GTP page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SubGroupTradeProgram();
  await LoginPage.closeSideMenu();
  await browser.pause(5000);
  await SubGTPPage.page();
});
When(/^I search and view Sub GPT$/, async () => {
  await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
  await SubGTPPage.editSubGTP();
  await browser.pause(10000);
  await FormSubGTPPage.pageEdit();
  await FormSubGTPPage.scApprover();
  await browser.pause(5000);
});
Then(/^System should be leading to form Sub GTP page$/, async () => {
  await FormSubGTPPage.page();
});
Given(/^I am on the Coin Redemption Approval Page$/, async () => {
  await CoinRedemptionApprovalPage.open();
  await LoginPage.acceptCookie();
  await CoinRedemptionApprovalPage.page2();
});
When(/^I search Coin Redemption Approval$/, async () => {
  await CoinRedemptionApprovalPage.searchGTP(dataTest.subGTP.cariByNamaEdit2);
  await CoinRedemptionApprovalPage.searchResultSGPT(
    dataTest.coinRedemptionApproval.SGTP
  );
});
Then(
  /^System should be display the data based on search keyword$/,
  async () => {
    await CoinRedemptionApprovalPage.page2();
  }
);
Given(/^I am on the Sub GTP page2$/, async () => {
  await SubGTPPage.open();
  await LoginPage.acceptCookie();
  await LoginPage.closeSideMenu();
  await browser.pause(5000);
  await SubGTPPage.page();
});
When(/^I search and edit Sub GPT2$/, async () => {
  await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
  await SubGTPPage.editSubGTP();
  await browser.pause(10000);
  await FormSubGTPPage.pageEdit();
  await FormSubGTPPage.scApprover();
  await FormSubGTPPage.clearApprover();
  await FormSubGTPPage.approver1(dataTest.subGTP.approverSGPT4);
  await FormSubGTPPage.submitForm();
  await browser.pause(5000);
});
Then(
  /^System should be edit Sub GTP and leading to Sub GTP page2$/,
  async () => {
    await SubGTPPage.pageList();
    await SubGTPPage.search1(dataTest.subGTP.cariByNamaEdit2);
  }
);
Given(/^I am on the Coin Redemption Approval Page2$/, async () => {
  await CoinRedemptionApprovalPage.open();
  await LoginPage.acceptCookie();
  await CoinRedemptionApprovalPage.page2();
});
When(/^I search Coin Redemption Approval2$/, async () => {
  await CoinRedemptionApprovalPage.searchGTP(dataTest.subGTP.cariByNamaEdit2);
});
Then(
  /^System should be display the data based on search keyword2$/,
  async () => {
    await CoinRedemptionApprovalPage.page2();
  }
);
