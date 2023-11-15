import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import notifikasiPage from "../../pageobjects/notification/buat-notifikasi.page";
import createNotifikasiEmployee from "../../pageobjects/notification/25push-notif-employee.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 25. Push Notifikasi Employee Only");
allureReporter.addFeature("Create Push Notifikasi Employee Only");

Given(/^I am on the Daftar Notifikasi page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.buatNotifikasi();
});

When(/^I click button Buat$/, async () => {
  await notifikasiPage.tombolBuat();
});

Then(/^System should be leading to Buat Notifikasi page$/, async () => {
  await createNotifikasiEmployee.Page();
});

Given(/^I am on the Buat Notifikasi page$/, async () => {
  await createNotifikasiEmployee.formPage();
});

When(/^I input Judul Notifikasi (.*)$/, async (judul_notifkasi) => {
  await createNotifikasiEmployee.buatNotifikasiInput(judul_notifkasi);
});

Then(/^System should be input Judul Notifikasi$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I input Konten Notifikasi (.*)$/, async (konten_notifikasi) => {
  await createNotifikasiEmployee.kontenNotifikasi(konten_notifikasi);
});

Then(/^System should be input Konten Notifikasi$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I click Customer in Grup Pengguna$/, async () => {
  await createNotifikasiEmployee.grupPengguna();
});

Then(/^System should be click Customer$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I select time in Jam Terbit$/, async () => {
  await createNotifikasiEmployee.jamTerbit();
});

Then(/^System should be select select Jam Terbit$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I input Nama Halaman(.*)$/, async (nama_halaman) => {
  await createNotifikasiEmployee.namaHalaman(nama_halaman);
});

Then(/^System should be input Nama Halaman$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I input Isi Halaman(.*)$/, async (isi_halaman) => {
  await createNotifikasiEmployee.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I select Employee only in Filter Pengguna Tipe Employee$/, async () => {
  await createNotifikasiEmployee.tipeEmployee();
});

Then(/^System should be select Employee only$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I click CC in Tipe Konten$/, async () => {
  await createNotifikasiEmployee.tipeKonten();
});

Then(/^System should be click CC$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I click Semua in Batas Umur$/, async () => {
  await createNotifikasiEmployee.batasUmur();
});

Then(/^System should be click Semua in Batas Umur$/, async () => {
  await createNotifikasiEmployee.Page();
});

When(/^I click button Simpan$/, async () => {
  await createNotifikasiEmployee.btnSimpan();
});

Then(
  /^System should be submit data and leading to Daftar Notifikasi page$/,
  async () => {
    await notifikasiPage.Page();
  }
);
