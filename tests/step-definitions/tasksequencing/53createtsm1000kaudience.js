import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import LoginPage from "../../pageobjects/login/login.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 53. Create TSM 1jt Audience");
allureReporter.addFeature("Create TSM 1jt Audience");

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
    dataTest.taskSequencing.nameWithPinUp53,
    dataTest.tradeProgram.namaTP4,
    dataTest.audience.audience53,
    "TPTB-",
    "audience"
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

//  Scenario Outline: As a user, I can setting Misi with Pin Up Mission
Then(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});

Then(/^setting Misi and save mission builder$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName42
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(
    dataTest.taskSequencing.coinSubmission53,
    dataTest.taskSequencing.coinVerification53
  );
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
  await browser.pause(300000);
  console.log("berhasil create data 1jt audience");
});
