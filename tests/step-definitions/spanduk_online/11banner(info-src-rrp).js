import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import infoSrcRrp from "../../pageobjects/spanduk_online/11info-src-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 11. Info SRC RRP");
allureReporter.addFeature("Create Info SRC RRP");

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
  await infoSrcRrp.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await infoSrcRrp.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await infoSrcRrp.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I select date in Sampai$/, async () => {
  await infoSrcRrp.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await infoSrcRrp.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await infoSrcRrp.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I click RRP in Tipe Konten$/, async () => {
  await infoSrcRrp.tipeKontenRrp();
});

Then(/^System should be click RRP$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I click Info SRC in Tipe Spanduk$/, async () => {
  await infoSrcRrp.tipeSpandukInfoSRC();
});

Then(/^System should be click Info SRC$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await infoSrcRrp.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await infoSrcRrp.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I click Button Simpan$/, async () => {
  await infoSrcRrp.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await infoSrcRrp.Page();
});

When(/^I click Button Ya$/, async () => {
  await infoSrcRrp.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatInfoSRC();
  }
);
