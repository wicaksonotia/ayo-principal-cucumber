import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';
import TemplateTugasPage from '../../pageobjects/templatetugas/templatetugas.page';
import FormTemplateTugasPage from '../../pageobjects/templatetugas/formtemplatetugas.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 32. Template Tugas - Select Pertanyaan');
    allureReporter.addFeature('Create Template Tugas with select questions');

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

When(/^I fill form with select questions and submit$/, async () => {
    await FormTemplateTugasPage.inputJudulTugas(dataTest.templateTugas.judulTugas32, dataTest.templateTugas.namaLainMisi32, dataTest.templateTugas.deskripsiTugas32)
    await FormTemplateTugasPage.selectKategori(dataTest.templateTugas.kategoriToolbox29, dataTest.templateTugas.tipeMisi29, dataTest.templateTugas.internalKategoriMisi29, dataTest.templateTugas.kategoriMisi29, dataTest.templateTugas.projectMisi29)
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstJwbnSingkat()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstParagraf()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGan()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanAngka()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanJwbnSingkat()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstPilGanParagraf()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstCheckbox()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstUploadImage()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstAngka()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstSelectDate()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.selectQstStockCheck()
    await FormTemplateTugasPage.setStockCheck(dataTest.templateTugas.stockCheckNamaProduk32)
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan1()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(dataTest.templateTugas.reason32_1)
    await FormTemplateTugasPage.addAlasanMenolakPilihan()
    await FormTemplateTugasPage.alasanMenolakPilihan2()
    await FormTemplateTugasPage.searchAlasanMenolakPilihan2(dataTest.templateTugas.reason32_2)
    await FormTemplateTugasPage.save()
});

Then(/^System should be able to submit template tugas and leading to template tugas page$/, async () => {
    await browser.pause(10000)
    await TemplateTugasPage.page()
});