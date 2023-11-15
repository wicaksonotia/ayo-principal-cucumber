import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import DteAutomationPage from "../../pageobjects/dteautomation/dteautomation.page";
import FormDTEAutomationPage from "../../pageobjects/dteautomation/form.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 22. DTE Automation E-Order (Non - TSM)");
allureReporter.addFeature("Create DTE Automation E-order non tsm");

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

When(/^I select tab Non-TSM and click button 'Buat Non TSM'$/, async () => {
  await DteAutomationPage.viewTabNonTsm();
  await DteAutomationPage.createNew();
});

Then(/^System should be leading to form create DTE Automation$/, async () => {
  await FormDTEAutomationPage.page();
});

Given(/^I am on the form create DTE Automation Non TSM page$/, async () => {
  await FormDTEAutomationPage.pageCreateNonTsm();
});

When(/^I input form with select Automation 'E-Order' and submit$/, async () => {
  await FormDTEAutomationPage.automationEOrder();
  await FormDTEAutomationPage.jenisTantanganEOrder(); //Minimum Transaction Frequency
  await FormDTEAutomationPage.tradeProgram(dataTest.dteAutomation.searchTP);
  await FormDTEAutomationPage.dateScroll();
  await FormDTEAutomationPage.selectDate();
  await FormDTEAutomationPage.fillFrekuensi(
    dataTest.dteAutomation.coinRewardperFrekEONonTsm,
    dataTest.dteAutomation.frekuensiEONonTsm
  );
  await FormDTEAutomationPage.skuProduct(dataTest.dteAutomation.barcodeSKU);
  await FormDTEAutomationPage.judulDeskripsiButton(
    dataTest.dteAutomation.judulTantanganEOCNonTSM,
    dataTest.dteAutomation.deskripsiTantanganEOCNonTSM,
    dataTest.dteAutomation.teksButton
  );
  await FormDTEAutomationPage.notifTambahanYes();
  await FormDTEAutomationPage.submitForm();
});

Then(
  /^System should be able to submit E-Order non tsm and leading to DTE Automation page$/,
  async () => {
    await DteAutomationPage.page();
    await DteAutomationPage.pageList();
    await DteAutomationPage.expectNewTaskRow1(
      dataTest.dteAutomation.typeEorder,
      dataTest.dteAutomation.coinRewardperFrekEONonTsm,
      dataTest.dteAutomation.frekuensiEONonTsm,
      dataTest.dteAutomation.statusBerjalan
    );
  }
);
