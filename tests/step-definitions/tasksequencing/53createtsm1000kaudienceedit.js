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
allureReporter.addTestId("[PRINCIPAL] 53. Edit TSM 1jt Audience Edit");
allureReporter.addFeature("Edit TSM 1jt Audience");

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

//  Scenario Outline: As a user, I can publish TSM with Pin Up Mission
When(/^I edit and submit task sequencing$/, async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp53);
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

Then(/^I publish mission builder$/, async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

Then(
  /^System should be leading to Task Sequencing page and success publish Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);

Then(/^I view detail task$/, async () => {
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameWithPinUp53);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});

Then(/^System should be show detail mission$/, async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
