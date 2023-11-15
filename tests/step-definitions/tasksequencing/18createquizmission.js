import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TemplateTugasPage from "../../pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../pageobjects/templatetugas/formtemplatetugas.page";
import GroupTradeProgramPage from "../../pageobjects/grouptradeprogram/grouptradeprogram.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import AudiencePage from "../../pageobjects/audience/audience.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 18. Create Quiz Mission");
allureReporter.addFeature("Success Create TSM Quiz Mission");

Given(/^I am on the Template Tugas page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.templateTugas();
  await TemplateTugasPage.page();
});
When(/^I search a template tugas$/, async () => {
  await TemplateTugasPage.searchTemplateTugas(
    dataTest.templateTugas.searchByName18
  );
});
Then(
  /^System should be according data Template Tugas based on search keyword$/,
  async () => {
    await TemplateTugasPage.searchResult(dataTest.templateTugas.searchByName18);
  }
);

When(/^I view detail template tugas$/, async () => {
  await TemplateTugasPage.editTemplate();
});

Then(
  /^System should be show detail template tugas page with type quiz$/,
  async () => {
    // await browser.pause(5000)
    await FormTemplateTugasPage.page();
    await FormTemplateTugasPage.pageEdit();
  }
);
//  Scenario Outline: As a user, I can search a group trade program
Given(/^I am on the Group Trade Program page$/, async () => {
  await MainmenuPage.groupTrade();
  await GroupTradeProgramPage.page();
  await GroupTradeProgramPage.pageList();
});
When(/^I search a group trade program$/, async () => {
  await GroupTradeProgramPage.searchGroupTradeProgram(
    dataTest.groupTradeProgram.searchByName2
  );
});
Then(
  /^System should be according data Group Trade Program based on search keyword$/,
  async () => {
    await GroupTradeProgramPage.searchResult(
      dataTest.groupTradeProgram.searchByName2
    );
  }
);

//  Scenario Outline: As a user, I can create trade program
Given(/^I am on the Trade Program page$/, async () => {
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
  await TradeProgramPage.pageList();
});
When(/^I search a Trade Program name$/, async () => {
  await TradeProgramPage.searchTradeProgram(dataTest.tradeProgram.namaTP18);
});
Then(
  /^System should be according data Trade Program based on search keyword$/,
  async () => {
    await TradeProgramPage.searchResult(dataTest.tradeProgram.namaTP18);
  }
);

//  Scenario Outline: As a user, I can search a audience
Given(/^I am on the Audience page$/, async () => {
  await MainmenuPage.audience();
  await AudiencePage.page();
  await AudiencePage.pageList();
});
When(/^I search a audience$/, async () => {
  await AudiencePage.searchAudience(dataTest.audience.audienceToko);
});
Then(
  /^System should be according data Audience based on search keyword$/,
  async () => {
    await AudiencePage.searchResult(dataTest.audience.audienceToko);
  }
);

//  Scenario Outline: As a user, I can create task sequencing
Given(/^I am on the Task Sequencing page$/, async () => {
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
When(/^I create task sequencing and click button Submit$/, async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTask18,
    dataTest.tradeProgram.namaTP18,
    dataTest.audience.audienceToko,
    "TPQuiz",
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

//  Scenario Outline: As a user, I can setting Misi without Pin Up Mission
When(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});
When(/^setting Misi without Pin Up Mission$/, async () => {
  await MissionBuilderPage.setMission();
  await MissionBuilderPage.settingMissionWithoutPinUp(
    dataTest.templateTugas.searchByName18
  );
  await MissionBuilderPage.setVerifikasiManual();
  await MissionBuilderPage.setCoinSubmission(
    dataTest.taskSequencing.coinSubmission18
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

//  Scenario Outline: As a user, I can publish mission IR
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
    await TaskSequencingPage.page();
  }
);
