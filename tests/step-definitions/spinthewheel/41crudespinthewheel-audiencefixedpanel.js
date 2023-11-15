import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import LoginPage from "../../pageobjects/login/login.page";
import SpinTheWheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import FormSpinTheWheelPage from "../../pageobjects/spinthewheel/form.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 41. CRUD Spin The Wheel (Audience Fixed Panel) dan Export"
);
allureReporter.addFeature(
  "CRUD Spin The Wheel (Audience Fixed Panel) dan Export"
);

//  Scenario Outline: As a user, I can create and export Spin The Wheel - Audience Fixed Panel
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
  await SpinTheWheelPage.page();
});

When(/^I click button 'Tambah'$/, async () => {
  await SpinTheWheelPage.createNew();
});

Then(/^System should be leading to form create Spin The Wheel$/, async () => {
  await FormSpinTheWheelPage.page();
});

When(/^I input form tab Spin The Wheel and submit$/, async () => {
  await FormSpinTheWheelPage.name(dataTest.spinTheWheel.namaProgramSTHFP);
  await FormSpinTheWheelPage.tradeProgram(dataTest.spinTheWheel.tradeProgramFP);
  await FormSpinTheWheelPage.date();
});

Then(/^System should be leading to tab Audience$/, async () => {
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
  await SpinTheWheelPage.editSTW();
  await FormSpinTheWheelPage.viewTabAudience();
});

When(/^I input form tab Audience and submit$/, async () => {
  await FormSpinTheWheelPage.fixedPanel();
});

Then(/^System should be leading to tab Pengaturan Mekanisme$/, async () => {
  await FormSpinTheWheelPage.viewTabPengaturanMekanisme();
});

When(/^I input form tab Pengaturan Mekanisme and submit$/, async () => {
  await FormSpinTheWheelPage.pengaturanSTWFP(
    dataTest.spinTheWheel.frekBelanjaFP,
    dataTest.spinTheWheel.frekRewardFP,
    dataTest.spinTheWheel.minTransaksiFP,
    dataTest.spinTheWheel.limitSpinFP,
    dataTest.spinTheWheel.jmlVarKoinFP,
    dataTest.spinTheWheel.coin1FP,
    dataTest.spinTheWheel.slice1FP,
    dataTest.spinTheWheel.prob1FP,
    dataTest.spinTheWheel.coin2FP,
    dataTest.spinTheWheel.slice2FP,
    dataTest.spinTheWheel.prob2FP
  );
});

Then(/^System should be leading to tab Preview$/, async () => {
  await FormSpinTheWheelPage.viewTabPreview();
});

When(/^I click button 'Publish'$/, async () => {
  await FormSpinTheWheelPage.publish(dataTest.spinTheWheel.previewFP);
});

Then(
  /^System should be leading to Spin The Wheel page and success publish Spin The Wheel$/,
  async () => {
    await SpinTheWheelPage.pageList();
    await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
    await SpinTheWheelPage.exportSTW();
    await browser.pause(7000);
  }
);

When(/^I delete Spin The Wheel$/, async () => {
  await SpinTheWheelPage.deleteSTW();
});

Then(/^System should be delete Spin The Wheel$/, async () => {
  await SpinTheWheelPage.search(dataTest.spinTheWheel.namaProgramSTHFP);
  await browser.pause(10000);
});
