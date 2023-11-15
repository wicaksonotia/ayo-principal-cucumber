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
allureReporter.addTestId("[PRINCIPAL] 113. Create TSM Lebih dari 1 retailler");
allureReporter.addFeature("Create TSM Lebih dari 1 retailler");

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
    dataTest.taskSequencing.nameTask113,
    dataTest.tradeProgram.namaTP2023,
    dataTest.audience.audienceToko3
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
  await MissionBuilderPage.verificationPerQuestion();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName13
  );
  await MissionBuilderPage.setCoin113(
    dataTest.taskSequencing.coinSub1s,
    dataTest.taskSequencing.coinVer1s,
    dataTest.taskSequencing.XPSubmission1s,
    dataTest.taskSequencing.XPVerification1s,
    dataTest.taskSequencing.coinSub2s,
    dataTest.taskSequencing.coinVer2s,
    dataTest.taskSequencing.XPSubmission2s,
    dataTest.taskSequencing.XPVerification2s,
    dataTest.taskSequencing.coinSub3s,
    dataTest.taskSequencing.coinVer3s,
    dataTest.taskSequencing.XPSubmission3s,
    dataTest.taskSequencing.XPVerification3s,
    dataTest.taskSequencing.coinSub4s,
    dataTest.taskSequencing.coinVer4s,
    dataTest.taskSequencing.XPSubmission4s,
    dataTest.taskSequencing.XPVerification4s,
    dataTest.taskSequencing.coinSub5s,
    dataTest.taskSequencing.coinVer5s,
    dataTest.taskSequencing.XPSubmission5s,
    dataTest.taskSequencing.XPVerification5s,
    dataTest.taskSequencing.coinSub6s,
    dataTest.taskSequencing.coinVer6s,
    dataTest.taskSequencing.XPSubmission6s,
    dataTest.taskSequencing.XPVerification6s,
    dataTest.taskSequencing.coinSub7s,
    dataTest.taskSequencing.coinVer7s,
    dataTest.taskSequencing.XPSubmission7s,
    dataTest.taskSequencing.XPVerification7s,
    dataTest.taskSequencing.coinSub8s,
    dataTest.taskSequencing.coinVer8s,
    dataTest.taskSequencing.XPSubmission8s,
    dataTest.taskSequencing.XPVerification8s,
    dataTest.taskSequencing.coinSub9s,
    dataTest.taskSequencing.coinVer9s,
    dataTest.taskSequencing.XPSubmission9s,
    dataTest.taskSequencing.XPVerification9s,
    dataTest.taskSequencing.coinSub10s,
    dataTest.taskSequencing.coinVer10s,
    dataTest.taskSequencing.XPSubmission10s,
    dataTest.taskSequencing.XPVerification10s,
    dataTest.taskSequencing.coinSub11s,
    dataTest.taskSequencing.coinVer11s,
    dataTest.taskSequencing.XPSubmission11s,
    dataTest.taskSequencing.XPVerification11s,
    dataTest.taskSequencing.coinSub12s,
    dataTest.taskSequencing.coinVer12s,
    dataTest.taskSequencing.XPSubmission12s,
    dataTest.taskSequencing.XPVerification12s,
    dataTest.taskSequencing.coinSub13s,
    dataTest.taskSequencing.coinVer13s,
    dataTest.taskSequencing.XPSubmission13s,
    dataTest.taskSequencing.XPVerification13s,
    dataTest.taskSequencing.coinSub14s,
    dataTest.taskSequencing.coinVer14s,
    dataTest.taskSequencing.XPSubmission14s,
    dataTest.taskSequencing.XPVerification14s
  );
  await MissionBuilderPage.reblastOn();
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
