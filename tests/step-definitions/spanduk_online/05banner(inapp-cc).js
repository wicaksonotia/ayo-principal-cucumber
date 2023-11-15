import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import inappCc from "../../pageobjects/spanduk_online/05inapp-banner-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 05. In-App Banner CC");
allureReporter.addFeature("Create In-App Banner CC");

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
  await inappCc.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await inappCc.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await inappCc.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await inappCc.Page();
});

When(/^I select date in Sampai$/, async () => {
  await inappCc.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await inappCc.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await inappCc.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await inappCc.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await inappCc.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await inappCc.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await inappCc.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await inappCc.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await inappCc.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await inappCc.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await inappCc.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await inappCc.Page();
});

When(/^I click Button Simpan$/, async () => {
  await inappCc.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await inappCc.Page();
});

When(/^I click Button Ya$/, async () => {
  await inappCc.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await inappCc.Page();
  }
);
