import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 101. Edit TSM (Checklist checkbox Verification per question)"
);
allureReporter.addFeature(
  "Edit TSM (Checklist checkbox Verification per question)"
);

Given(/^I am on the Task Sequencing page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
When(/^I create task sequencing and click button Submit$/, async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTask15,
    dataTest.tradeProgram.namaTP2023,
    dataTest.audience.audienceToko2,
    "weekend",
    "naura"
  );
  await FormCreatePage.submitTsm();
});
Then(
  /^System should be submitted data and leading to Mission Builder page$/,
  async () => {
    await MissionBuilderPage.page();
    await MissionBuilderPage.pageCreate();
  }
);
When(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});
When(/^setting Misi$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName101
  );
  await MissionBuilderPage.setCoin15m1(
    dataTest.taskSequencing.coinSub1,
    dataTest.taskSequencing.coinVer1
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.simpanSettingMission();
});
When(/^I save mission builder$/, async () => {
  await MissionBuilderPage.simpan();
});
Then(
  /^System should be leading to Task Sequencing page and success save new Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);
When(/^I edit and submit task sequencing$/, async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});
Then(
  /^System should be update data and leading to Mission Builder page$/,
  async () => {
    await MissionBuilderPage.pageEdit();
  }
);
When(/^I publish mission builder$/, async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.setCoin15m2(
    dataTest.taskSequencing.coinSub1,
    dataTest.taskSequencing.coinVer1,
    dataTest.taskSequencing.XPSubmission1,
    dataTest.taskSequencing.XPVerification1,
    dataTest.taskSequencing.coinSub2,
    dataTest.taskSequencing.coinVer2,
    dataTest.taskSequencing.XPSubmission2,
    dataTest.taskSequencing.XPVerification2,
    dataTest.taskSequencing.coinSub3,
    dataTest.taskSequencing.coinVer3,
    dataTest.taskSequencing.XPSubmission3,
    dataTest.taskSequencing.XPVerification3
  );
  await MissionBuilderPage.reblastOn();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.saveAsDraft();
  await TaskSequencingPage.page2();

  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
  await FormCreatePage.page();
  await FormCreatePage.submitTsm();
  await MissionBuilderPage.pageEdit();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});
Then(
  /^System should be leading to Task Sequencing page and success publish Tsm$/,
  async () => {
    await TaskSequencingPage.page2();
  }
);
When(/^I request file and export task sequencing$/, async () => {
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskSequencing.nameTask15
  );
  await TaskSequencingPage.reqFile();
});
Then(/^System should be request data and export task sequencing$/, async () => {
  await TaskSequencingPage.open();
  await LoginPage.acceptCookie();
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskSequencing.nameTask15
  );
  await TaskSequencingPage.reqFile2();
  await TaskSequencingPage.exportTSM();
});
