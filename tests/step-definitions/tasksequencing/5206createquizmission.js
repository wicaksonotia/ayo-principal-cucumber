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
allureReporter.addTestId("[PRINCIPAL] 5206. Create Quiz Mission");
allureReporter.addFeature("Success Create TSM Quiz Mission");

/**
 * Go to Task Sequencing Menu
 */
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
    dataTest.data5206.tsmNama,
    dataTest.data5206.tpNama,
    dataTest.data5206.tsmAudience,
    "",
    ""
  );
  await FormCreatePage.submitTsm();
});

//add misi
Then(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});

Then(/^Setting Misi and save mission builder$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.data5206.tsmMisi
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(1000, 1000);
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});

//edit
When(
  /^System should be leading to Task Sequencing page and success save new Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);

Then(/^I edit and submit task sequencing$/, async () => {
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama);
  await FormCreatePage.submitEditTsm();
});

Then(/^I publish mission builder$/, async () => {
  // await MissionBuilderPage.setMissionEdit();
  // await MissionBuilderPage.simpanSettingMission();
  await browser.pause(3000);
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

// ========================================

When(/^I create task sequencing and click button Submit 2$/, async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.data5206.tsmNama2,
    dataTest.data5206.tpNama2,
    dataTest.data5206.tsmAudience,
    "",
    ""
  );
  await FormCreatePage.submitTsm();
});

//add misi
Then(/^I add Event Misi 2$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});

Then(/^Setting Misi and save mission builder 2$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.data5206.tsmMisi
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoin(1000, 1000);
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.simpan();
});

//edit
When(
  /^System should be leading to Task Sequencing page and success save new Tsm 2$/,
  async () => {
    await TaskSequencingPage.page();
  }
);

Then(/^I edit and submit task sequencing 2$/, async () => {
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama2);
  await FormCreatePage.submitEditTsm();
});

Then(/^I publish mission builder 2$/, async () => {
  // await MissionBuilderPage.setMissionEdit();
  // await MissionBuilderPage.simpanSettingMission();
  await browser.pause(3000);
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
  await browser.pause(7000);
});
