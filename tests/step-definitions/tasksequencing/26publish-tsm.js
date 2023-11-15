import { Given, When, Then, And } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dteData = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 26. Task Sequencing - Publish TSM");
allureReporter.addFeature("Publish TSM");

//  Scenario Outline: As a user, I can publish TSM
Given(/^I am on the Task Sequencing page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
When(/^I search a Task Sequencing$/, async () => {
  await browser.pause(10000);
  await TaskSequencingPage.searchTaskSequencing(
    dteData.taskSequencing.searchByName28
  );
});
Then(/^System should be according data based on search keyword$/, async () => {
  await TaskSequencingPage.searchResult(dteData.taskSequencing.searchByName28);
});

When(
  /^I edit a TSM with status 'Tidak Aktif' and submit task sequencing$/,
  async () => {
    await TaskSequencingPage.editStatus(
      dteData.taskSequencing.statusTidakAktif
    );
    await FormCreatePage.page();
    await FormCreatePage.pageEdit();
    await FormCreatePage.submitEditTsm();
  }
);
Then(/^System should be leading to Mission Builder page$/, async () => {
  await MissionBuilderPage.pageEdit();
});
When(/^I click button 'Publish' mission builder$/, async () => {
  // await MissionBuilderPage.setMission()
  // await MissionBuilderPage.batalSettingMission()
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

Then(
  /^System should be able to publish TSM, and leading to Task Sequencing page with status changed to 'Aktif'$/,
  async () => {
    await TaskSequencingPage.page();
  }
);
