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
  "[PRINCIPAL] 5206. Approve Request - Coin Redemption Approval"
);
allureReporter.addFeature("Approve Request - Coin Redemption Approval");

//Scenario Outline: As a user, I can approve request approval coin redemption
Given(/^I am on Coin Redemption Approval page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  // await MainmenuPage.open();
  // await MainmenuPage.dashboard();
  // await LoginPage.acceptCookie();
  // await MainmenuPage.coinRedemptionApproval();
  // await frameHome();
});

When(/^I click button 'SETUJUI'$/, async () => {
  // await frameForm();
  // await CoinRedemptionApprovalPage.searchGTP("1695025896");
  // console.log("geser kekanan manual");
  // await browser.pause(5000);
  // //APPROVE
  // await CoinRedemptionApprovalPage.approveRequest();
  // await CoinRedemptionApprovalPage.dialogConfirmApprove();
});

Then(/^I click menu Coin Disburment$/, async () => {
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
  await CoinDisbursementPage.openTabDataLog();
  await CoinDisbursementPage.search("1695025896");
  console.log("geser kekanan manual");
  await browser.pause(5000);
});

Then(/^I logout and login with other account$/, async () => {
  await MainmenuPage.signOut();
  await LoginPage.welcome();
  await LoginPage.loginExternal(
    "reda.meiningtiyas@weekendinc.com",
    "Reda123456"
  );
  await browser.pause(5000);
  await MainmenuPage.dashboard();
  await MainmenuPage.coinRedemptionApproval();
  await frameHome();
});

Then(/^I click button 'SETUJUI' with other account$/, async () => {
  await frameForm();
  await CoinRedemptionApprovalPage.searchGTP("1695025896");
  console.log("geser kekanan manual");
  await browser.pause(5000);
  // //APPROVE
  await CoinRedemptionApprovalPage.rejectRequest();
  await CoinRedemptionApprovalPage.dialogConfirmApprove();
});

Then(/^I click menu Coin Disburment with other account$/, async () => {
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.coinDisbursement();
  await CoinDisbursementPage.page();
  await CoinDisbursementPage.openTabDataLog();
  await CoinDisbursementPage.search("1695025896");
  console.log("geser kekanan manual");
  await browser.pause(5000);
});
