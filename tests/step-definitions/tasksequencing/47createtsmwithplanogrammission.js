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
allureReporter.addTestId("[PRINCIPAL] 47. Create TSM with Planogram Mission");
allureReporter.addFeature("Create TSM with Planogram Mission");

//  Scenario Outline: As a user, I can create task sequencing
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
    dataTest.taskSequencing.namePlanogram,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audienceToko,
    "TPTB-",
    "HWKND-"
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

//  Scenario Outline: As a user, I can setting Misi
When(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});

When(/^setting Misi$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchPlanogram
  );
  await MissionBuilderPage.setCoin(
    dataTest.taskSequencing.coinSubmission47,
    dataTest.taskSequencing.coinVerification47
  );
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

//  Scenario Outline: As a user, I can publish TSM Planogram
When(/^I edit and submit task sequencing$/, async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
  await FormCreatePage.page();
  await FormCreatePage.pageEdit();
  await FormCreatePage.submitEditTsm();
});

Then(
  /^System should be update data and leading to Mission Builder page$/,
  async () => {
    // await MissionBuilderPage.page()
    await MissionBuilderPage.pageEdit();
  }
);

When(/^I publish mission builder$/, async () => {
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

Then(
  /^System should be leading to Task Sequencing page and success publish Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);

When(/^I view detail task$/, async () => {
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.namePlanogram);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});

Then(/^System should be show detail mission$/, async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
