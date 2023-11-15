import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TemplateTugasPage from "../../pageobjects/templatetugas/templatetugas.page";
import GroupTradeProgramPage from "../../pageobjects/grouptradeprogram/grouptradeprogram.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import AudiencePage from "../../pageobjects/audience/audience.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 19. Create Task Based Response Push to FF"
);
allureReporter.addFeature("Success Create Task Based Response Push to FF");

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
    dataTest.templateTugas.searchByName17
  );
});
Then(
  /^System should be according data Template Tugas based on search keyword$/,
  async () => {
    await TemplateTugasPage.searchResult(dataTest.templateTugas.searchByName17);
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

//  Scenario Outline: As a user, I can search a trade program
Given(/^I am on the Trade Program page$/, async () => {
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
  await TradeProgramPage.pageList();
});
When(/^I search a trade program$/, async () => {
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

//  Scenario Outline: As a user, I can create Mission Task Based Response
Given(/^I am on the Task Sequencing page$/, async () => {
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});
When(/^I create task sequencing and click button Submit$/, async () => {
  await TaskSequencingPage.createTaskSequencing();
  await FormCreatePage.formAddPage();
  await FormCreatePage.createTSM(
    dataTest.taskSequencing.nameTask19,
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

//  Scenario Outline: As a user, I can setting Misi with select Push to FF
When(/^I add Event Misi$/, async () => {
  await MissionBuilderPage.createMissionBuilder();
});
When(
  /^setting Misi without Pin Up Mission and select Push to FF$/,
  async () => {
    await MissionBuilderPage.setMission();
    await MissionBuilderPage.settingMissionWithoutPinUp(
      dataTest.templateTugas.searchByName17
    );
    await MissionBuilderPage.setPushToFF();
    await MissionBuilderPage.simpanSettingMission();
  }
);
When(/^I save mission builder$/, async () => {
  await MissionBuilderPage.simpan();
});
Then(
  /^System should be leading to Task Sequencing page and success save new Tsm$/,
  async () => {
    await TaskSequencingPage.page();
  }
);

//  Scenario Outline: As a user, I can publish mission
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

When(/^I view detail task$/, async () => {
  await TaskSequencingPage.detailTask(dataTest.taskSequencing.nameTask19);
  await FormCreatePage.page();
  await FormCreatePage.formDetailPage();
  await FormCreatePage.cekDetail();
});
Then(/^System should be show detail mission$/, async () => {
  await MissionBuilderPage.page();
  await MissionBuilderPage.pageDetail();
});
