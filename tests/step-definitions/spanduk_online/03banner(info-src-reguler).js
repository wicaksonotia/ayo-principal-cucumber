import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import infoSrcReguler from "../../pageobjects/spanduk_online/03info-src-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 03. Info SRC Reguler");
allureReporter.addFeature("Create Info SRC Reguler");

Given(/^I am on the Spanduk Online page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.spandukOnline();
});

When(/^I click button Buat$/, async () => {
  await spandukOnlinePage.tombolBuat();
});

Then(/^System should be leading to Buat Spanduk Online page$/, async () => {
  await infoSrcReguler.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await infoSrcReguler.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await infoSrcReguler.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I select date in Sampai$/, async () => {
  await infoSrcReguler.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await infoSrcReguler.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await infoSrcReguler.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I click Info SRC in Tipe Spanduk$/, async () => {
  await infoSrcReguler.tipeSpandukInfoSRC();
});

Then(/^System should be click Info SRC$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await infoSrcReguler.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await infoSrcReguler.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I click Button Simpan$/, async () => {
  await infoSrcReguler.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await infoSrcReguler.Page();
});

When(/^I click Button Ya$/, async () => {
  await infoSrcReguler.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatInfoSRC();
  }
);
