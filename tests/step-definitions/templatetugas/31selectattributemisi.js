import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';
import TemplateTugasPage from '../../pageobjects/templatetugas/templatetugas.page';
import FormTemplateTugasPage from '../../pageobjects/templatetugas/formtemplatetugas.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 31. Template Tugas - Select Attribute Misi');
    allureReporter.addFeature('Create Template Tugas with select attribute misi');

Given(/^I am on the Template Tugas page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.templateTugas()
    await TemplateTugasPage.page() 
});

When(/^I click button 'Buat'$/, async () => {
    await TemplateTugasPage.createTemplateTugas()
});

Then(/^System should be leading to form create template tugas page$/, async () => {
    await FormTemplateTugasPage.page()
});

When(/^I fill form with select attribute misi and submit$/, async () => {
    await FormTemplateTugasPage.inputJudulTugas(dataTest.templateTugas.judulTugas31, dataTest.templateTugas.namaLainMisi31, dataTest.templateTugas.deskripsiTugas31)
    await FormTemplateTugasPage.selectKategori(dataTest.templateTugas.kategoriToolbox2, dataTest.templateTugas.tipeMisi2, dataTest.templateTugas.internalKategoriMisi2, dataTest.templateTugas.kategoriMisi2, dataTest.templateTugas.projectMisi2)
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(dataTest.templateTugas.reason2)
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan2()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(dataTest.templateTugas.reason2)
    await FormTemplateTugasPage.save()
    await browser.pause(10000)
});

Then(/^System should be able to submit template tugas and leading to template tugas page$/, async () => {
    await TemplateTugasPage.page()
});