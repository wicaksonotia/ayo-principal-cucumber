import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import DteAutomationPage from "../../pageobjects/dteautomation/dteautomation.page";
import FormDTEAutomationPage from "../../pageobjects/dteautomation/form.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 21. DTE Automation Digital Coupon (TSM)");
allureReporter.addFeature("Create DTE Automation digital coupon tsm");

Given(/^I am on the DTE Automation page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.dteAutomation();
  await DteAutomationPage.page();
  await DteAutomationPage.pageList();
});

When(/^I select tab TSM and click button 'Buat TSM'$/, async () => {
  await DteAutomationPage.viewTabTsm();
  await DteAutomationPage.createNew();
});

Then(/^System should be leading to form create DTE Automation$/, async () => {
  await FormDTEAutomationPage.page();
});

Given(/^I am on the form create DTE Automation TSM page$/, async () => {
  await FormDTEAutomationPage.pageCreateTsm();
});

When(
  /^I input form with select Automation 'Digital Coupon' and submit$/,
  async () => {
    await FormDTEAutomationPage.automationDigitalCoupon();
    await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP);
    await FormDTEAutomationPage.selectDate();
    await FormDTEAutomationPage.kupon(dataTest.dteAutomation.totalKupon);
    await FormDTEAutomationPage.fillFrekuensi(
      dataTest.dteAutomation.coinRewardperFrekTSM,
      dataTest.dteAutomation.frekuensiTSM
    );
    await FormDTEAutomationPage.judulDeskripsiButton(
      dataTest.dteAutomation.judulTantanganDCTSM,
      dataTest.dteAutomation.deskripsiTantanganDCTSM,
      dataTest.dteAutomation.teksButton
    );
    await FormDTEAutomationPage.notifTambahanYes();
    await FormDTEAutomationPage.submitForm();
  }
);

Then(
  /^System should be able to submit digital coupon tsm and leading to DTE Automation page$/,
  async () => {
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
    await DteAutomationPage.viewTabTsm();
    await DteAutomationPage.expectNewTaskRow1(
      dataTest.dteAutomation.typeDC,
      dataTest.dteAutomation.coinRewardperFrekTSM,
      dataTest.dteAutomation.frekuensiTSM,
      dataTest.dteAutomation.statusBerjalan
    );
  }
);
