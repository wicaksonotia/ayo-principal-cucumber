import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TradeProgramPage from "../../pageobjects/tradeprogram/tradeprogram";
import FormTradeProgramPage from "../../pageobjects/tradeprogram/formtradeprogram.page";
import TaskSequencingPage from "../../pageobjects/tasksequencing/tsm.page";
import FormCreatePage from "../../pageobjects/tasksequencing/formcreate.page";
import MissionBuilderPage from "../../pageobjects/tasksequencing/missionbuilder.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 5206. Trade Program");
allureReporter.addFeature("Create Trade Program and Task Sequencing");

Given(/^I am on the Trade Program page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.tradeProgram();
  await TradeProgramPage.page();
});
When(/^I click button 'Tambah'$/, async () => {
  await TradeProgramPage.createTradeProgram();
  await FormTradeProgramPage.page();
});
Then(/^I input form and submit$/, async () => {
  await FormTradeProgramPage.createTP(
    dataTest.data5206.gtpNama,
    dataTest.data5206.sgtpNamaEdit,
    dataTest.data5206.tpNama,
    dataTest.data5206.tpDana
  );
  await FormTradeProgramPage.submit();
  await TradeProgramPage.page2();
});

When(/^I click button 'Tambah' 2$/, async () => {
  await TradeProgramPage.createTradeProgram();
  await FormTradeProgramPage.page();
});
Then(/^I input form and submit 2$/, async () => {
  await FormTradeProgramPage.createTP(
    dataTest.data5206.gtpNama,
    dataTest.data5206.sgtpNamaEdit2,
    dataTest.data5206.tpNama2,
    dataTest.data5206.tpDana
  );
  await FormTradeProgramPage.submit();
  await TradeProgramPage.page2();
});
