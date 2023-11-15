import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import TemplateTugasPage from "../../pageobjects/templatetugas/templatetugas.page";
import FormTemplateTugasPage from "../../pageobjects/templatetugas/formtemplatetugas.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 29. Template Tugas - Import Image");
allureReporter.addFeature("Import image Template Tugas");

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

When(/^I am fill form with import image and submit$/, async () => {
  await FormTemplateTugasPage.inputJudulTugas(
    dataTest.templateTugas.judulTugas29,
    dataTest.templateTugas.namaLainMisi29,
    dataTest.templateTugas.deskripsiTugas29
  );
  await FormTemplateTugasPage.selectKategori(
    dataTest.templateTugas.kategoriToolbox29,
    dataTest.templateTugas.tipeMisi29,
    dataTest.templateTugas.internalKategoriMisi29,
    dataTest.templateTugas.kategoriMisi29,
    dataTest.templateTugas.projectMisi29
  );
  await FormTemplateTugasPage.uploadImage();
  await FormTemplateTugasPage.addNewQuestion();
  await FormTemplateTugasPage.addAlasanMenolakPilihan();
  await FormTemplateTugasPage.alasanMenolakPilihan1();
  await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
    dataTest.templateTugas.reason29_1
  );
  await FormTemplateTugasPage.addAlasanMenolakPilihan();
  await FormTemplateTugasPage.alasanMenolakPilihan2();
  await FormTemplateTugasPage.searchAlasanMenolakPilihan2(
    dataTest.templateTugas.reason29_2
  );
  await FormTemplateTugasPage.save();
  await browser.pause(7000);
});

Then(
  /^System should be able to submit template tugas and leading to template tugas page$/,
  async () => {
    await TemplateTugasPage.page();
  }
);
