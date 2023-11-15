import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import inappReguler from "../../pageobjects/spanduk_online/01inapp-banner-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 01. In-App Banner Reguler");
allureReporter.addFeature("Create InApp Banner Reguler");

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
  await inappReguler.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await inappReguler.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await inappReguler.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await inappReguler.Page();
});

When(/^I select date in Sampai$/, async () => {
  await inappReguler.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await inappReguler.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await inappReguler.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await inappReguler.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await inappReguler.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await inappReguler.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await inappReguler.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await inappReguler.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await inappReguler.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await inappReguler.Page();
});

When(/^I click Button Simpan$/, async () => {
  await inappReguler.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await inappReguler.Page();
});

When(/^I click Button Ya$/, async () => {
  await inappReguler.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await inappReguler.Page();
  }
);
