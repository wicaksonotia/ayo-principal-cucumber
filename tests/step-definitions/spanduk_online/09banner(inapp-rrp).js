import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import inappRrp from "../../pageobjects/spanduk_online/09inapp-banner-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 09. In-App Banner RRP");
allureReporter.addFeature("Create In-App Banner RRP");

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
  await inappRrp.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await inappRrp.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await inappRrp.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await inappRrp.Page();
});

When(/^I select date in Sampai$/, async () => {
  await inappRrp.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await inappRrp.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await inappRrp.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await inappRrp.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await inappRrp.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await inappRrp.Page();
});

When(/^I click RRP in Tipe Konten$/, async () => {
  await inappRrp.tipeKontenRrp();
});

Then(/^System should be click RRP$/, async () => {
  await inappRrp.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await inappRrp.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await inappRrp.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await inappRrp.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await inappRrp.Page();
});

When(/^I click Button Simpan$/, async () => {
  await inappRrp.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await inappRrp.Page();
});

When(/^I click Button Ya$/, async () => {
  await inappRrp.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await inappRrp.Page();
  }
);
