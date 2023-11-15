import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pageobjects/login/login.page';
import ProdukPage from '../../pageobjects/produk/produk.page';
import FormProdukPage from '../../pageobjects/produk/formproduk.page';
import TemplateTugasPage from '../../pageobjects/templatetugas/templatetugas.page';
import FormTemplateTugasPage from '../../pageobjects/templatetugas/formtemplatetugas.page';
import MainmenuPage from '../../pageobjects/mainmenu.page';
const dataTest = require('../../testdata/dte.data');

    // use allure API for allure reporter
    allureReporter.addLabel('Positive Case');
    allureReporter.addTestId('[PRINCIPAL] 56. Create Product UPC');
    allureReporter.addFeature('Create Product UPC');

//  Scenario Outline: As a user, I can create product upc
Given(/^I am on the Produk page$/, async () => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.produk()
    await ProdukPage.page()
    await ProdukPage.pageList()
});

When(/^I am click button 'Tambah Produk'$/, async () => {
    await ProdukPage.createProduct()
});

Then(/^System should be leading to form Tambah Produk$/, async () => {
    await FormProdukPage.page()
});

Given(/^I am on the from Tambah Produk$/, async () => {
    await FormProdukPage.pageCreate()
});

When(/^I input and submit form$/, async () => {
    await FormProdukPage.addProduct(dataTest.produk.namaProduk, dataTest.produk.perusahaan, dataTest.produk.namaLainProduk, dataTest.produk.kategoriProduk, dataTest.produk.deskripsiProduk, dataTest.produk.WMSDeskripsiProduk)
    await FormProdukPage.submitProduct()
});

Then(/^System should be able to submit form and leading to Produk page$/, async () => {
    await ProdukPage.page()
    await ProdukPage.pageList()
});

When(/^I search new produk$/, async () => {
    await ProdukPage.searchProduct(dataTest.produk.namaProduk)
});

Then(/^System should be according data Produk based on search keyword$/, async () => {
    await ProdukPage.searchResult(dataTest.produk.namaProduk)
    await ProdukPage.editProduct()
    await FormProdukPage.editProduct(dataTest.produk.kodeFamily)
    await FormProdukPage.submitProduct()
});

When(/^I go to Template Tugas page$/, async () => {
    // await LoginPage.open()
    // await LoginPage.setLclStorage()
    await MainmenuPage.templateTugas()
    // await LoginPage.acceptCookie()
});

Then(/^System should be leading to Template Tugas page$/, async () => {
    await TemplateTugasPage.page()
});

When(/^I check UPC Family Brand$/, async () => {
    await TemplateTugasPage.createTemplateTugas()
});

Then(/^System should be according data UPC based on search keyword (.*)$/, async (fam) => {
    await FormTemplateTugasPage.page()
    await FormTemplateTugasPage.addNewQuestion()
    await FormTemplateTugasPage.checkUPC(fam)
});