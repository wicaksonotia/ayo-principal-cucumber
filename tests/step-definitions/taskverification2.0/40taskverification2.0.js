import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskVerificationPage from "../../pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../pageobjects/taskverification2.0/detailverificationassignment.page";
import VerificationApprovalPage from "../../pageobjects/taskverification2.0/verificationapproval.page";
const dataTest = require("../../testdata/dte.data");
import { frameHome, frameForm } from "../../helper/commands";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 40. Task Verification 2.0");
allureReporter.addFeature("Verify Task Verification 2.0");

//  Scenario Outline: As a user, I can verify Task Verification
Given(/^I am on the Task Verification page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.DropTaskVerif2();
  await MainmenuPage.TaskVerification2();
  await frameHome();
});

When(/^I search a Task Verification$/, async () => {
  await TaskVerificationPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName7
  );
});

Then(
  /^System should be according data Task Verification based on search keyword$/,
  async () => {
    console.log("waktunya geser ke kanan");
  }
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

Then(/^System should be leading to Assignment Cart page$/, async () => {});

When(/^I add assignment then go to Verification Assignment page$/, async () => {
  await frameForm();
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName7
  );
  console.log("waktunya geser ke kanan");
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
  await frameForm();
});

When(/^I click button Export Summary Data$/, async () => {
  await AssignmentCartPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName7
  );
  console.log("waktunya geser ke kanan");
  await browser.pause(10000);
  await VerificationAssignmentPage.exportFile();
});

Then(/^System should be able to download file export$/, async () => {
  await browser.pause(90000);
});

When(/^I view detail task then import xls file$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(8000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(8000);
  await DetailVerificationAssignmentPage.page();
  await DetailVerificationAssignmentPage.importData2(
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

Given(/^I am on the Verification Approval page$/, async () => {});

When(/^I click button verify a TSM Task Verification$/, async () => {
  await frameForm();
  await VerificationApprovalPage.searchTaskVerif(
    dataTest.taskVerification.searchByTsmName7
  );
  console.log("waktunya geser ke kanan");
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
