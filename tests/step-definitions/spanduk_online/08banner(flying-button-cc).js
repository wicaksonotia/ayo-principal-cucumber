import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonCc from "../../pageobjects/spanduk_online/08flying-button-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 08. Flying Button CC");
allureReporter.addFeature("Create Flying Button CC");

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
  await flyingButtonCc.Page();
});

Given(/^I am on the Buat Spanduk Online page$/, async () => {
  await flyingButtonCc.formPage();
});

When(/^I input Nama Spanduk (.*)$/, async (nama_spanduk) => {
  await flyingButtonCc.namaSpanduk(nama_spanduk);
});

Then(/^System should be input Nama Spanduk$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I select date in Sampai$/, async () => {
  await flyingButtonCc.dateSampai();
});

Then(/^System should be select date$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I insert Banner in TEMPLATE F$/, async () => {
  await flyingButtonCc.insertGambarBanner();
});

Then(/^System should be insert Banner$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await flyingButtonCc.grupPenggunaCustomer();
});

Then(/^System should be click Customer$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await flyingButtonCc.tipeKontenCC();
});

Then(/^System should be click CC$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I click Flying Button in Tipe Spanduk$/, async () => {
  await flyingButtonCc.tipeSpandukFlyingButton();
});

Then(/^System should be click Flying Button$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I input Nama Halaman (.*)$/, async (nama_halaman) => {
  await flyingButtonCc.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await flyingButtonCc.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I click Button Simpan$/, async () => {
  await flyingButtonCc.buttonSimpan();
});

Then(/^System show popup Confirmation$/, async () => {
  await flyingButtonCc.Page();
});

When(/^I click Button Ya$/, async () => {
  await flyingButtonCc.buttonYa();
});

Then(
  /^System should be submit data and landing to Spanduk Online Page$/,
  async () => {
    await spandukOnlinePage.Page();
    await spandukOnlinePage.lihatFlyingButton();
  }
);
