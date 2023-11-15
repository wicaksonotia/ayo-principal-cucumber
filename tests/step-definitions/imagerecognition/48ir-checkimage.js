import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import LoginPage from "../../pageobjects/login/login.page";
import CheckImagePage from "../../pageobjects/imagerecognition/checkimage.page";
import FormCheckImagePage from "../../pageobjects/imagerecognition/checkimageform.page";
const dataTest = require("../../testdata/dte.data");

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 48. IR - Check Image");
allureReporter.addFeature("IR - Check Image");

// Scenario Outline: As a user, I can create, edit and delete template planogram
Given(/^I am on the Check Image page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
  await MainmenuPage.DropdownImageR();
  await MainmenuPage.CheckImagePlanogram();
  await CheckImagePage.page();
});

When(/^I click button 'Tambah'$/, async () => {
  await CheckImagePage.createNew();
});

Then(/^System should be leading to form create Check Image$/, async () => {
  await FormCheckImagePage.page();
});

Given(/^I am on the form create Check Image page$/, async () => {
  await FormCheckImagePage.pageCreate();
});

When(/^I input form and submit$/, async () => {
  await FormCheckImagePage.template(dataTest.IR.templateNameCheckImage);
  await FormCheckImagePage.group(dataTest.IR.groupNameCheckImage);
  await FormCheckImagePage.addImage();
  await FormCheckImagePage.submitForm();
  await browser.pause(5000);
});

Then(
  /^System should be able to submit Check Image and leading to Check Image page$/,
  async () => {
    await CheckImagePage.pageList();
    await CheckImagePage.expectNewCheckImageRow1(
      dataTest.IR.templateNameCheckImage,
      dataTest.IR.statusReq
    );
    await browser.pause(5000);
  }
);

When(/^status is changed from requesting to done$/, async () => {
  await CheckImagePage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
  await CheckImagePage.page();
  await CheckImagePage.expectNewCheckImageRow1(
    dataTest.IR.templateNameCheckImage,
    dataTest.IR.statusDone
  );
  await CheckImagePage.clickCheckImageRow1();
});

Then(/^System should be show image check result$/, async () => {
  await FormCheckImagePage.pageDetail();
});
