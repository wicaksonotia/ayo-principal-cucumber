import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import CoinRedemptionApprovalPage from "../../pageobjects/coinredemptionapproval/coinredemptionapproval.page";
import CoinDisbursementPage from "../../pageobjects/coindisbursement/coindisbursement.page";
import { frameHome, frameForm } from "../../helper/commands";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 5206. Reject Request - Coin Redemption Approval"
);
allureReporter.addFeature("Reject Request - Coin Redemption Approval");

//Scenario Outline: As a user, I can approve request approval coin redemption
Given(/^I am on Coin Redemption Approval page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinRedemptionApproval();
  await frameHome();
});

When(/^I click button 'REJECT'$/, async () => {
  await frameForm();
  await CoinRedemptionApprovalPage.searchGTP("1693899485");
  console.log("geser kekanan manual");
  await browser.pause(5000);
  await CoinRedemptionApprovalPage.rejectRequest();
  await CoinRedemptionApprovalPage.dialogConfirmReject();
});

Then(/^I click menu Coin Disburment$/, async () => {
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
  await CoinDisbursementPage.openTabDataLog();
  await CoinDisbursementPage.search("1693899485");
  console.log("geser kekanan manual");
  await browser.pause(5000);
});
