import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import infoSrcCc from "../../pageobjects/spanduk_online/07info-src-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 07. Info SRC CC");
allureReporter.addFeature("Create Info SRC CC");

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
  await infoSrcCc.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await infoSrcCc.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await infoSrcCc.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await infoSrcCc.Page();
});

When(/^I select date in Sampai$/, async () => {
  await infoSrcCc.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await infoSrcCc.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await infoSrcCc.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await infoSrcCc.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await infoSrcCc.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await infoSrcCc.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await infoSrcCc.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await infoSrcCc.Page();
});

When(/^I click Info SRC in Tipe Spanduk$/, async () => {
  await infoSrcCc.tipeSpandukInfoSRC();
});

Then(/^System should be click Info SRC$/, async () => {
  await infoSrcCc.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await infoSrcCc.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await infoSrcCc.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await infoSrcCc.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await infoSrcCc.Page();
});

When(/^I click Button Simpan$/, async () => {
  await infoSrcCc.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await infoSrcCc.Page();
});

When(/^I click Button Ya$/, async () => {
  await infoSrcCc.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatInfoSRC();
  }
);
