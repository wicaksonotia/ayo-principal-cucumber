import { Given, When, Then } from "@cucumber/cucumber";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import EmployeeMappingPage from "../../pageobjects/employeemapping/employeemapping.page";
import FormEmployeeMappingPage from "../../pageobjects/employeemapping/form.page";
const dataTest = require("../../testdata/dte.data");
import { frameHome, frameForm } from "../../helper/commands";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 94. CRUD Employee Mapping (Koin Potongan Belanja)"
);
allureReporter.addFeature("CRUD Employee Mapping (Koin Potongan Belanja)");

// Scenario Outline: As a user, I can create, read, update and delete employee - koin potongan belanja
Given(/^I am on the Employee Mapping page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.EmployeeMapping();
  await EmployeeMappingPage.pageList();
});

When(/^I click button 'Tambah'$/, async () => {
  await EmployeeMappingPage.createNew();
});

Then(/^System should be leading to form create Employee Mapping$/, async () => {
  await FormEmployeeMappingPage.page();
});

Given(/^I am on the form create Employee Mapping page$/, async () => {
  await FormEmployeeMappingPage.pageCreate();
});

When(
  /^I input form with metode pembayaran 'coin potongan belanja' and submit$/,
  async () => {
    await FormEmployeeMappingPage.name(
      dataTest.employeeMapping.searchByNamaEmployee3
    );
    await browser.pause(2000);
    await FormEmployeeMappingPage.metodeKoinPotonganBelanja();
    await browser.pause(2000);
    await FormEmployeeMappingPage.submitForm();
    await browser.pause(5000);
  }
);

Then(
  /^System should be able to submit Employee Mapping and leading to Employee Mapping page$/,
  async () => {
    await EmployeeMappingPage.pageList();
  }
);

When(/^I search a employee$/, async () => {
  await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
});

Then(
  /^System should be display employee data based on search keyword$/,
  async () => {
    await EmployeeMappingPage.expectNewEmployeeRowSatu(
      dataTest.employeeMapping.employee2,
      dataTest.employeeMapping.email2,
      dataTest.employeeMapping.area2,
      dataTest.employeeMapping.metodeKoinPotonganBelanja
    );
  }
);

When(/^I edit and delete employee$/, async () => {
  await EmployeeMappingPage.editTask();
  await browser.pause(10000);
  await FormEmployeeMappingPage.pageEdit();
  await browser.pause(10000);
  await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
  await browser.pause(10000);
  await FormEmployeeMappingPage.region(["SLSSW1"]);
  await FormEmployeeMappingPage.submitForm();
  await EmployeeMappingPage.pageList();
  await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
  await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email2);
  await EmployeeMappingPage.editTask();
  await FormEmployeeMappingPage.pageEdit();
  await EmployeeMappingPage.open();
  await LoginPage.acceptCookie();
  await browser.pause(10000);
  await EmployeeMappingPage.page();
  await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
  await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email2);
  await EmployeeMappingPage.deleteTask();
});

Then(/^System should be delete employee$/, async () => {
  await EmployeeMappingPage.search(dataTest.employeeMapping.email2);
  await browser.pause(5000);
});
