import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spinthewheelPage from "../../pageobjects/spinthewheel/spinthewheel.page";
import STWPushNotif from "../../pageobjects/spinthewheel/76create-push-notif-spinthewheel.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 77. Edit Push Notif Spin the Wheel");
allureReporter.addFeature("Edit Push Notif Spin the Wheel");

//Scenario Outline: As a user, I can edit push notif spin the wheel
Given(/^I am on the Spin The Wheel page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.SpinTheWheel();
});

When(/^I click button Buat Push Notif$/, async () => {
  await spinthewheelPage.btnBuatPushNotif();
});

Then(
  /^System should be leading to form Buat Spin The Wheel Notifikasi Page$/,
  async () => {}
);

When(/^I input Judul (.*)$/, async (judul) => {
  await STWPushNotif.Judul(judul);
});

Then(/^System should be input Judul$/, async () => {});

When(/^I click button Simpan$/, async () => {
  await STWPushNotif.Simpan2();
});

Then(
  /^System should be submit data and leading to Spin The Wheel Page$/,
  async () => {}
);

When(/^I click button Buat Push Notif2$/, async () => {
  await spinthewheelPage.btnBuatPushNotif();
});

Then(
  /^System should be leading to form Buat Spin The Wheel Notifikasi Page2$/,
  async () => {}
);
