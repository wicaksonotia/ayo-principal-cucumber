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
  "[PRINCIPAL] 35. CRUD Employee Mapping (Transfer Bank)"
);
allureReporter.addFeature("CRUD Employee Mapping (Transfer Bank)");

// Scenario Outline: As a user, I can create, read, update and delete employee - transfer bank
Given(/^I am on the Employee Mapping page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.EmployeeMapping();
  await frameHome();
});

When(/^I click button 'Tambah'$/, async () => {
  await EmployeeMappingPage.createNew();
});

Then(
  /^System should be leading to form create Employee Mapping$/,
  async () => {}
);

Given(/^I am on the form create Employee Mapping page$/, async () => {});

When(
  /^I input form with metode pembayaran 'Transfer Bank' and submit$/,
  async () => {
    await frameForm();
    await FormEmployeeMappingPage.name(
      dataTest.employeeMapping.searchByNamaEmployee2
    );
    await FormEmployeeMappingPage.metodeTB("Transfer Bank");
    await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
    await FormEmployeeMappingPage.submitForm();
  }
);

Then(
  /^System should be able to submit Employee Mapping and leading to Employee Mapping page$/,
  async () => {}
);

When(/^I search a employee$/, async () => {
  await frameForm();
  await EmployeeMappingPage.search(dataTest.employeeMapping.email);
});

Then(
  /^System should be display employee data based on search keyword$/,
  async () => {
    await EmployeeMappingPage.expectNewEmployeeRow1(
      dataTest.employeeMapping.employee,
      dataTest.employeeMapping.email,
      dataTest.employeeMapping.area,
      dataTest.employeeMapping.metodeTB
    );
  }
);

When(/^I edit and delete employee$/, async () => {
  await EmployeeMappingPage.open();
  await LoginPage.acceptCookie();
  await frameHome();
  await EmployeeMappingPage.search(dataTest.employeeMapping.email);
  await EmployeeMappingPage.searchResult(dataTest.employeeMapping.email);
  await EmployeeMappingPage.editTask();
  await frameForm();
  await FormEmployeeMappingPage.clearName();
  await FormEmployeeMappingPage.name(
    dataTest.employeeMapping.searchByNamaEmployeeEdit
  );
  await FormEmployeeMappingPage.zone(["ZONENORTHSUM"]);
  await FormEmployeeMappingPage.submitForm();
  await frameForm();
  await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit);
  await EmployeeMappingPage.searchResult(dataTest.employeeMapping.emailEdit);
  await EmployeeMappingPage.deleteTask();
});

Then(/^System should be delete employee$/, async () => {
  await EmployeeMappingPage.search(dataTest.employeeMapping.emailEdit);
  await browser.pause(5000);
});
