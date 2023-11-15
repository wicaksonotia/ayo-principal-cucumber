import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import ApprovalCoinAdjPage from "../../pageobjects/approvalcoinadjustment/approvalcoinadj.page";
import FormApprovalCoinAdjPage from "../../pageobjects/approvalcoinadjustment/formapprovalcoinadj.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 09. Approval Coin Adjustment - Approve Request Approval"
);
allureReporter.addFeature("Approve request coin adjustment");

//Scenario Outline: As a user, I can approve request approval coin adjustment
Given(/^I am on Approval Coin Adjustment page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.approvalCoinAdjustment();
  await ApprovalCoinAdjPage.page();
});

When(/^I filter status with 'Pending'$/, async () => {
  await ApprovalCoinAdjPage.tabMenuTsm();
  await browser.pause(5000);
  await ApprovalCoinAdjPage.filterPendingTsm();
  await browser.pause(5000);
  await ApprovalCoinAdjPage.filterApproverName(dataTest.login.accountname);
  await browser.pause(5000);
  await ApprovalCoinAdjPage.filter();
});

When(/^I search a Task Sequencing Management$/, async () => {
  await ApprovalCoinAdjPage.search("HWKND-Mission2Toko tanpa Pin Up 2604-2");
});

Then(
  /^System should be according data task sequencing based on search keyword$/,
  async () => {
    await ApprovalCoinAdjPage.getStatusRow1(
      dataTest.approvalCoinAdjustment.statusPending
    );
  }
);

When(
  /^I click button 'Lihat' a Pending TSM approval coin adjustment$/,
  async () => {
    await ApprovalCoinAdjPage.detailTsm();
  }
);

Then(
  /^System should be leading to form detail Approval Coin adjustment$/,
  async () => {
    await FormApprovalCoinAdjPage.page();
  }
);

When(/^I click button 'Approve'$/, async () => {
  await FormApprovalCoinAdjPage.approve();
  await FormApprovalCoinAdjPage.confirmApproveReject(
    dataTest.approvalCoinAdjustment.headerPopUpConfirmApproved
  );
});

Then(
  /^System should be able to save and approve request coin adjustment$/,
  async () => {
    await FormApprovalCoinAdjPage.successApprove();
    await ApprovalCoinAdjPage.open();
    await LoginPage.acceptCookie();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.tabMenuTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filterApprovedTsm();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.filter();
    await browser.pause(5000);
    await ApprovalCoinAdjPage.search("HWKND-Mission2Toko tanpa Pin Up 2604-2");
    await ApprovalCoinAdjPage.searchResult(
      "HWKND-Mission2Toko tanpa Pin Up 2604-2"
    );
    await ApprovalCoinAdjPage.getStatusRow1(
      dataTest.approvalCoinAdjustment.statusApproved
    );
    await browser.pause(6000);
  }
);
