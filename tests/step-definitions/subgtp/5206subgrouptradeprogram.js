import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import SubGTPPage from "../../pageobjects/subgtp/subgtp.page";
import FormSubGTPPage from "../../pageobjects/subgtp/form.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../pageobjects/tradeprogram/formtradeprogram.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
import { frameHome, frameForm, pause } from "../../helper/commands";
const dataTest = require("../../testdata/dte.data");

//Scenario Outline: As a user, I can create and edit Sub GTP
Given(/^I am on the Sub GTP page$/, async () => {
  // console.log("ok1");
  await pause();
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SubGroupTradeProgram();
});
When(/^I click button 'Tambah'$/, async () => {
  // console.log("ok2");
  await pause();
  await frameHome();
  await SubGTPPage.createNew();
});
Then(/^I input form and submit$/, async () => {
  // console.log("ok3");
  await pause();
  await frameForm();
  await FormSubGTPPage.name(dataTest.data5206.sgtpNamaEdit);
  await FormSubGTPPage.wbs(dataTest.subGTP.wbsSGPT);
  await FormSubGTPPage.cost(dataTest.subGTP.CCSGPT);
  await FormSubGTPPage.gl(dataTest.subGTP.glAccount);
  await FormSubGTPPage.pph(dataTest.subGTP.ratePPH);
  await FormSubGTPPage.approver1(dataTest.data5206.sgtpApprover1);
  await FormSubGTPPage.status();
  await FormSubGTPPage.submitForm();
});
// ---------------------------------

When(/^I click button 'Tambah' lagi$/, async () => {
  // console.log("ok4");
  await pause();
  await frameHome();
  await SubGTPPage.createNew();
});
Then(/^I input form and submit lagi$/, async () => {
  // console.log("ok5");
  await pause();
  await frameForm();
  await FormSubGTPPage.name(dataTest.data5206.sgtpNamaEdit2);
  await FormSubGTPPage.wbs(dataTest.subGTP.wbsSGPT);
  await FormSubGTPPage.cost(dataTest.subGTP.CCSGPT);
  await FormSubGTPPage.gl(dataTest.subGTP.glAccount);
  await FormSubGTPPage.pph(dataTest.subGTP.ratePPH);
  await FormSubGTPPage.approver1(dataTest.data5206.sgtpApprover2);
  await FormSubGTPPage.status();
  await FormSubGTPPage.submitForm();
});

// =========================================================================
/**
 * Go to Task Trade Program
 */

Given(/^I am on the Trade Program page$/, async () => {
  // console.log("ok6");
  await pause();
  // await MainmenuPage.open();
  // await LoginPage.acceptCookie();
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
});
When(/^I click button 'Tambah' TP$/, async () => {
  // console.log("ok7");
  await pause();
  await TradeProgramPage.createTradeProgram();
  await FormTradeProgramPage.page();
});
Then(/^I input form and submit TP$/, async () => {
  // console.log("ok8");
  await pause();
  await FormTradeProgramPage.createTP(
    dataTest.data5206.gtpNama,
    dataTest.data5206.sgtpNamaEdit,
    dataTest.data5206.tpNama,
    dataTest.data5206.tpDana
  );
  await FormTradeProgramPage.submit();
  await TradeProgramPage.page2();
});

// ---------------------------------

When(/^I click button 'Tambah' TP lagi$/, async () => {
  // console.log("ok9");
  await pause();
  await TradeProgramPage.createTradeProgram();
  await FormTradeProgramPage.page();
});
Then(/^I input form and submit TP lagi$/, async () => {
  // console.log("ok10");
  await pause();
  await FormTradeProgramPage.createTP(
    dataTest.data5206.gtpNama,
    dataTest.data5206.sgtpNamaEdit2,
    dataTest.data5206.tpNama2,
    dataTest.data5206.tpDana
  );
  await FormTradeProgramPage.submit();
  await TradeProgramPage.page2();
});

// =========================================================================

/**
 * Go to Task Sequencing Menu
 */
Given(/^I am on the Task Sequencing page$/, async () => {
  // console.log("ok11");
  await pause();
  await MainmenuPage.open();
  await LoginPage.acceptCookie();
  await MainmenuPage.taskSequencing();
  await TaskSequencingPage.page();
});

When(/^I create task sequencing and click button Submit$/, async () => {
  // console.log("ok12");
  await pause();
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
  // console.log("ok13");
  await pause();
  await MissionBuilderPage.createMissionBuilder();
});

Then(/^Setting Misi and save mission builder$/, async () => {
  // console.log("ok14");
  await pause();
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
    // console.log("ok15");
    await pause();
    await TaskSequencingPage.page();
  }
);

Then(/^I edit and submit task sequencing$/, async () => {
  // console.log("ok16");
  await pause();
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama);
  await FormCreatePage.submitEditTsm();
});

Then(/^I publish mission builder$/, async () => {
  // console.log("ok17");
  await pause();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
});

// ---------------------------------

When(/^I create task sequencing and click button Submit 2$/, async () => {
  // console.log("ok18");
  await pause();
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
  // console.log("ok19");
  await pause();
  await MissionBuilderPage.createMissionBuilder();
});

Then(/^Setting Misi and save mission builder 2$/, async () => {
  // console.log("ok20");
  await pause();
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
    // console.log("ok21");
    await pause();
    await TaskSequencingPage.page();
  }
);

Then(/^I edit and submit task sequencing 2$/, async () => {
  // console.log("ok22");
  await pause();
  await TaskSequencingPage.editTask(dataTest.data5206.tsmNama2);
  await FormCreatePage.submitEditTsm();
});

Then(/^I publish mission builder 2$/, async () => {
  // console.log("ok23");
  await pause();
  await MissionBuilderPage.setMissionEdit();
  await MissionBuilderPage.simpanSettingMission();
  await MissionBuilderPage.publish();
  await MissionBuilderPage.confirmPublish();
  await browser.pause(7000);
});
