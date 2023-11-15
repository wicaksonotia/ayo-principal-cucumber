import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TemplateTugasPage from "../../pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../pageobjects/templatetugas/formtemplatetugas.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 46. Template Tugas Planogram");
allureReporter.addFeature("Template Tugas Planogram");

Given(/^I am on the Template Tugas page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.templateTugas();
  await TemplateTugasPage.page();
});

When(/^I click button 'Buat'$/, async () => {
  await TemplateTugasPage.createTemplateTugas();
});

Then(
  /^System should be leading to form create template tugas page$/,
  async () => {
    await FormTemplateTugasPage.page();
  }
);

When(/^I fill form and submit$/, async () => {
  await FormTemplateTugasPage.selectTemplateIR();
  await FormTemplateTugasPage.selectIRType();
  await FormTemplateTugasPage.inputJudulTugas(
    dataTest.templateTugas.judulPlanogram,
    dataTest.templateTugas.namaLainPlanogram,
    dataTest.templateTugas.deskripsiPlanogram
  );
  await FormTemplateTugasPage.selectKategori(
    dataTest.templateTugas.kategoriPlanogram,
    dataTest.templateTugas.tipePlanogram,
    dataTest.templateTugas.internalKategoriPlanogram,
    dataTest.templateTugas.kategoriMisiPlanogram,
    dataTest.templateTugas.projectPlanogram
  );
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.selectQstPlanogramIR1(
    dataTest.templateTugas.qstPlanogram1
  );
  await FormTemplateTugasPage.selectQstPlanogramIR2(
    dataTest.templateTugas.qstPlanogram2
  );
  await FormTemplateTugasPage.selectQstPlanogramIR3(
    dataTest.templateTugas.qstPlanogram3
  );
  await FormTemplateTugasPage.addAlasanMenolakPilihan();
  await FormTemplateTugasPage.alasanMenolakPilihan1();
  await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
    dataTest.templateTugas.reasonPlanogram2
  );
  await FormTemplateTugasPage.save();
});

Then(
  /^System should be able to submit template tugas and leading to template tugas page$/,
  async () => {
    await browser.pause(10000);
    await TemplateTugasPage.page();
  }
);
