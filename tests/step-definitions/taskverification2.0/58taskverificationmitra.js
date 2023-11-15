import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import TaskVerificationPage from "../../pageobjects/taskverification2.0/taskverification.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import AssignmentCartPage from "../../pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../pageobjects/taskverification2.0/detailverificationassignment.page";
import VerificationApprovalPage from "../../pageobjects/taskverification2.0/verificationapproval.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 40. Task Verification 2.0");
allureReporter.addFeature("Verify Task Verification 2.0");

//  Scenario Outline: As a user, I can verify Task Verification
Given(/^I am on the Task Verification page$/, async () => {
  await TaskVerificationPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropTaskVerif2();
  await MainmenuPage.TaskVerification2();
  await TaskVerificationPage.pageList2();
});

When(/^I search a Task Verification$/, async () => {
  await TaskVerificationPage.searchTaskVerif(
    dataTest.taskVerification.searchTaskMitra
  );
});

Then(
  /^System should be according data Task Verification based on search keyword$/,
  async () => {}
);

When(
  /^I generate sampling, click button assign, then go to Assignment Cart page$/,
  async () => {
    await browser.pause(10000);
    await TaskVerificationPage.generateSampling(
      dataTest.taskVerification.samplingAmount
    );
    await TaskVerificationPage.dialogConfirm();
    await AssignmentCartPage.open();
    await LoginPage.acceptCookie();
    await browser.pause(10000);
  }
);

Then(/^System should be leading to Assignment Cart page$/, async () => {
  await AssignmentCartPage.page();
});

When(/^I add assignment then go to Verification Assignment page$/, async () => {
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchTaskMitra
  );
  await browser.pause(10000);
  await AssignmentCartPage.addAssignment(
    dataTest.taskVerification.approverName,
    dataTest.taskVerification.missionAmount,
    dataTest.taskVerification.deadline
  );
  await AssignmentCartPage.kirim();
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
});

Then(/^System should be leading to Verification Assignment page$/, async () => {
  await VerificationAssignmentPage.page();
});

When(/^I click button Export Summary Data$/, async () => {
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchTaskMitra
  );
  await browser.pause(10000);
  await VerificationAssignmentPage.exportFile();
});

Then(/^System should be able to download file export$/, async () => {
  await browser.pause(100000);
});

When(/^I view detail task then import xls file$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(8000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(8000);
  await DetailVerificationAssignmentPage.page();
  await DetailVerificationAssignmentPage.importData(
    dataTest.taskVerification.approverName
  );
});

Then(
  /^System should be able submit form and leading to Verification Approval page$/,
  async () => {
    await VerificationApprovalPage.open();
    await LoginPage.acceptCookie();
    await browser.pause(10000);
  }
);

Given(/^I am on the Verification Approval page$/, async () => {
  await VerificationApprovalPage.page();
});

When(/^I click button verify a TSM Task Verification$/, async () => {
  await VerificationApprovalPage.searchTaskVerif(
    dataTest.taskVerification.searchTaskMitra
  );
  await browser.pause(10000);
  await VerificationApprovalPage.approve();
});

Then(
  /^System should be able to approve TSM Task Verification and status will be changed to 'approved'$/,
  async () => {
    await VerificationApprovalPage.dialogConfirm();
    await browser.pause(10000);
  }
);
