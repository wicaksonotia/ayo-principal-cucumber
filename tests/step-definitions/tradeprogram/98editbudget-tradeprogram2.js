import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../pageobjects/tradeprogram/formtradeprogram.page";
import TaskVerificationPage from "../../pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../pageobjects/taskverification2.0/detailverificationassignment.page";
import VerificationApprovalPage from "../../pageobjects/taskverification2.0/verificationapproval.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 98. Edit Budget Trade Program sampai Verification Approval"
);
allureReporter.addFeature(
  "Edit Budget Trade Program sampai Verification Approval"
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
  // await TaskVerificationPage.searchTaskVerif(dataTest.taskSequencing.nameTSM98);
});
Then(
  /^System should be according data Task Verification based on search keyword$/,
  async () => {
    // await browser.pause(10000);
    // console.log("geser kekanan manual");
  }
);
When(
  /^I generate sampling, click button assign, then go to Assignment Cart page$/,
  async () => {
    // await browser.pause(10000);
    // await TaskVerificationPage.generateSampling(
    //   dataTest.taskVerification.samplingAmount
    // );
    // await TaskVerificationPage.dialogConfirm();
    // await AssignmentCartPage.open();
    // await LoginPage.acceptCookie();
    // await browser.pause(10000);
  }
);
Then(/^System should be leading to Assignment Cart page$/, async () => {
  // await AssignmentCartPage.page();
});
When(/^I add assignment then go to Verification Assignment page$/, async () => {
  // await AssignmentCartPage.searchTaskVerif2("TSM UNTUK TP EDIT");
  // await browser.pause(10000);
  // await AssignmentCartPage.addAssignment(
  //   dataTest.taskVerification.approverName5,
  //   dataTest.taskVerification.missionAmount,
  //   dataTest.taskVerification.deadline2
  // );
  // await AssignmentCartPage.kirim();
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
});
Then(/^System should be leading to Verification Assignment page$/, async () => {
  await VerificationAssignmentPage.page();
});
When(/^I click button Export Summary Data$/, async () => {
  await AssignmentCartPage.searchTaskVerif("TSM");
  await browser.pause(12000);
  await VerificationAssignmentPage.exportFile();
});
Then(/^System should be able to download file export$/, async () => {});
When(/^I view detail task then import xls file$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(8000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(8000);
  await DetailVerificationAssignmentPage.page();
});
Then(/^System cant click button Kirim$/, async () => {
  await DetailVerificationAssignmentPage.importData98(
    dataTest.taskVerification.approverName5
  );
});
Given(/^I am on the Trade Program page$/, async () => {
  await TradeProgramPage.open();
  await LoginPage.acceptCookie();
  await TradeProgramPage.page2();
});
When(/^I search and edit Budget Trade Program$/, async () => {
  await TradeProgramPage.searchTradeProgram(dataTest.tradeProgram.inputNamaTP);
  await TradeProgramPage.editTP();
  await FormTradeProgramPage.page();
  await FormTradeProgramPage.editDana(dataTest.tradeProgram.editDANATP3);
  await FormTradeProgramPage.submit1();
});
Then(
  /^System should be edit Budget Trade Program and leading to trade Program page$/,
  async () => {
    await TradeProgramPage.page2();
  }
);
Given(/^I am on the Task Verification Assignment page$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await VerificationAssignmentPage.page2();
});
When(/^I click button Export Summary Data2$/, async () => {
  await AssignmentCartPage.searchTaskVerif("TSM");
  await browser.pause(12000);
  await VerificationAssignmentPage.exportFile();
});
Then(/^System should be able to download file export2$/, async () => {});
When(/^I view detail task then import xls file2$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(8000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(8000);
  await DetailVerificationAssignmentPage.page();
  await DetailVerificationAssignmentPage.importData989(
    dataTest.taskVerification.approverName5
  );
  //await DetailVerificationAssignmentPage.searchNavbar();
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
  await VerificationApprovalPage.pageList2();
});
When(/^I view detail Task Verification Approval$/, async () => {
  await VerificationApprovalPage.assignmentUC();
  await VerificationApprovalPage.pageList2();
});
Then(
  /^System should be able to view detail Task Verification Approval$/,
  async () => {
    await VerificationApprovalPage.pageList2();
  }
);
When(/^I click button verify a TSM Task Verification$/, async () => {
  await VerificationApprovalPage.detailApprove();
  await VerificationApprovalPage.dialogConfirm();
});
Then(
  /^System should be able to approve TSM Task Verification and status will be changed to 'approved'$/,
  async () => {
    await VerificationApprovalPage.pageList2();
  }
);
