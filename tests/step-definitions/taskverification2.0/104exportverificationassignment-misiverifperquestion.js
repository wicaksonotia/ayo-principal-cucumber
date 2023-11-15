import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskVerificationPage from "../../pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../pageobjects/taskverification2.0/verificationassignment.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 104. Export file verification assignment misi verifikasi per question"
);
allureReporter.addFeature(
  "Export file verification assignment misi verifikasi per question"
);

Given(/^I am on the Task Verification page$/, async () => {
  await LoginPage.open();
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
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
});

Then(
  /^System should be according data Task Verification based on search keyword$/,
  async () => {
    await browser.pause(5000);
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

Then(/^System should be leading to Assignment Cart page$/, async () => {
  await AssignmentCartPage.page();
});

When(/^I add assignment then go to Verification Assignment page$/, async () => {
  await AssignmentCartPage.searchTaskVerif2(
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
  await browser.pause(5000);
  await AssignmentCartPage.addAssignment(
    dataTest.taskVerification.approverName2,
    dataTest.taskVerification.missionAmount,
    dataTest.taskVerification.deadline2
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
    dataTest.taskVerification.searchByTsmName104
  );
  console.log("geser kekanan manual");
  await browser.pause(12000);
  await VerificationAssignmentPage.exportFile();
});

Then(/^System should be able to download file export$/, async () => {
  await browser.pause(10000);
});
