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
  "[PRINCIPAL] 27. Task Sequencing - Request Approval Coin Adjustment"
);
allureReporter.addFeature("Request approval coin adjustment TSM");

//  Scenario Outline: As a user, I can search task sequencing
Given(/^I am on the Task Sequencing page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});

When(/^I search a task sequencing for import$/, async () => {
  await TaskSequencingPage.searchTaskSequencing(
    dataTest.taskSequencing.nameWithoutPinUp5
  );
});

Then(
  /^System should be according data task sequencing based on search keyword$/,
  async () => {
    await TaskSequencingPage.searchResult(
      dataTest.taskSequencing.nameWithoutPinUp5
    );
  }
);

// Scenario Outline: As a user, I can edit Tsm
When(/^I click button edit a TSM$/, async () => {
  await TaskSequencingPage.editTask(dataTest.taskSequencing.nameWithPinUp4);
});

Then(/^System should be leading to form Task Sequencing page$/, async () => {
  await FormCreatePage.page();
});

// Scenario Outline: As a user, I can export and import coin TSM
Given(/^I am on the form edit Task Sequencing page$/, async () => {
  await FormCreatePage.pageEdit();
});

When(/^I import coin and confirm$/, async () => {
  await FormCreatePage.importFile();
  await FormCreatePage.uploadImportFile();
  await FormCreatePage.closePopUpImport();
  await FormCreatePage.importFile();
  await browser.pause(2000);
  await FormCreatePage.userPenerimaCoinAdj(
    dataTest.taskSequencing.reasonImportCoin,
    dataTest.login.accountname
  );
  await FormCreatePage.sendImportFile();
  await FormCreatePage.confirmImport();
});

Then(/^System should be able to import coin TSM$/, async () => {
  // await browser.pause(60000)
  await FormCreatePage.successImportFile();
});

//Scenario Outline: As a user, I can view and publish setting mission builder
Given(/^I am on the Mission Builder page$/, async () => {
  await FormCreatePage.submitEditTsm();
  await MissionBuilderPage.pageEdit();
});

When(/^I view setting mission builder and publish TSM$/, async () => {
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

Then(/^System should be leading to Task Sequencing page$/, async () => {
  await TaskSequencingPage.page();
});
