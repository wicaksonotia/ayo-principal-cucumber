import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskVerificationPage from "../../pageobjects/taskverification2.0/taskverification.page";
import AssignmentCartPage from "../../pageobjects/taskverification2.0/assignmentcart.page";
import VerificationAssignmentPage from "../../pageobjects/taskverification2.0/verificationassignment.page";
import DetailVerificationAssignmentPage from "../../pageobjects/taskverification2.0/detailverificationassignment.page";
import VerificationApprovalPage from "../../pageobjects/taskverification2.0/verificationapproval.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 109. Export file tsm setelah misi diverifikasi (semua soal ada reward XP)"
);
allureReporter.addFeature(
  "Export file tsm setelah misi diverifikasi (semua soal ada reward XP)"
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
    dataTest.taskVerification.searchByTsmName109
  );
  await browser.pause(5000);
});
Then(
  /^System should be according data Task Verification based on search keyword$/,
  async () => {}
);

When(
  /^I generate sampling, click button assign, then go to Assignment Cart page$/,
  async () => {
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
    dataTest.taskVerification.searchByTsmName109
  );
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
    dataTest.taskVerification.searchByTsmName109
  );
  await browser.pause(5000);
  await VerificationAssignmentPage.exportFile();
});
Then(/^System should be able to download file export$/, async () => {
  await browser.pause(120000);
});

When(/^I view detail task then import xls file$/, async () => {
  await VerificationAssignmentPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(8000);
  await VerificationAssignmentPage.page();
  await VerificationAssignmentPage.viewATask();
  await browser.pause(10000);
  await DetailVerificationAssignmentPage.page();
  await DetailVerificationAssignmentPage.importData3(
    dataTest.taskVerification.approverName2
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
  await VerificationApprovalPage.pageList2();
});
When(/^I view detail Task Verification Approval$/, async () => {
  await VerificationApprovalPage.assignmentUC();
  await VerificationApprovalPage.pageList2();
  await VerificationApprovalPage.summaryData();
  await VerificationApprovalPage.rejectedReason();
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
When(/^I request file and export task sequencing$/, async () => {
  await TaskSequencingPage.open();
  await LoginPage.acceptCookie();
  await TaskSequencingPage.page2();
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskVerification.searchByTsmName109
  );
  await browser.pause(5000);
  await TaskSequencingPage.reqFile();
});
Then(/^System should be request data and export task sequencing$/, async () => {
  await TaskSequencingPage.open();
  await LoginPage.acceptCookie();
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskVerification.searchByTsmName109
  );
  await browser.pause(5000);
  await TaskSequencingPage.reqFile2();
  await TaskSequencingPage.exportTSM();
});
