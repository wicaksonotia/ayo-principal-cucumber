import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonRrp from "../../pageobjects/spanduk_online/12flying-button-rrp.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 12. Flying Button RRP");
allureReporter.addFeature("Create Flying Button RRP");

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
  await flyingButtonRrp.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await flyingButtonRrp.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await flyingButtonRrp.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I select date in Sampai$/, async () => {
  await flyingButtonRrp.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await flyingButtonRrp.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await flyingButtonRrp.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I click RRP in Tipe Konten$/, async () => {
  await flyingButtonRrp.tipeKontenRrp();
});

Then(/^System should be click RRP$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I click Flying Button in Tipe Spanduk$/, async () => {
  await flyingButtonRrp.tipeSpandukFlyingButton();
});

Then(/^System should be click Flying Button$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await flyingButtonRrp.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await flyingButtonRrp.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I click Button Simpan$/, async () => {
  await flyingButtonRrp.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await flyingButtonRrp.Page();
});

When(/^I click Button Ya$/, async () => {
  await flyingButtonRrp.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatFlyingButton();
  }
);
