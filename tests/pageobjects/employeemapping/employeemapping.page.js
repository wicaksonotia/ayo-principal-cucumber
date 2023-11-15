import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class EmployeeMappingPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#contentTitle");
  }
  get btnCreate() {
    return $("#btnCreate");
  }
  get searchInput() {
    return $("#search");
  }

  //Table
  get datatableBody() {
    return $("div.MuiDataGrid-renderingZone");
  }
  get dataRow() {
    return $$("div.MuiDataGrid-row");
  }

  get cellNamaEmployee() {
    return $$("#columnTitle");
  }
  get employee() {
    return $$("#cellName");
  }
  get email() {
    return $$("#cellEmail");
  }
  get area() {
    return $$("#cellArea");
  }
  get metode() {
    return $$("#cellMetode");
  }

  get btnEdit() {
    return $$("#btnEdit");
  }
  get btnDelete() {
    return $$("#btnDelete");
  }
  get notifMessage() {
    return $$("#notifMessage");
  }
  get popUptitle() {
    return $("#dialogTitle");
  }
  get popUpDesc() {
    return $("#dialogCaption");
  }
  get btnConfirmDelete() {
    return $("#btnConfirm");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.pause(10000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageList() {
    await browser.pause(3000);
    await browser.switchToParentFrame();
    await browser.pause(3000);
    await browser.switchToFrame(0);
    await browser.pause(3000);
    async () => await expect(this.searchInput).isDisplayed({ timeout: 6000 }),
      {
        timeoutMsg: "expected search input not displayed after 600s",
      };
    await expect(this.btnCreate).toBeExisting();
    await expect(this.titlePage).toHaveText("Employee Mapping");
    await expect(browser).toHaveUrlContaining("dte/employee-mapping");
    // await expect(this.datatableBody).toBeExisting()
    // await expect(this.dataRow).toBeExisting()
  }

  async createNew() {
    await this.btnCreate.click();
  }

  async search(email) {
    await expect(this.searchInput).toBeDisplayed();
    await this.searchInput.setValue(email);
    // await browser.pause(3000)
  }

  async searchResult(email) {
    await browser.waitUntil(async () => await this.email[0].isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected search result not displayed after 20s",
    });
    await browser.pause(3000);
    await expect(this.email[0]).toBeExisting();
    await expect(this.email[0]).toHaveText(email);
  }

  async viewDetailATask(employee) {
    await this.cellNamaEmployee.scrollIntoView();
    const titleTask = await this.employee;
    titleTask.forEach((element) => {
      const tasks = element.getText();
      tasks.then(function (result) {
        if (String(result) == employee) {
          element.click();
        }
      });
    });
  }

  async editTask() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
  }

  async deleteTask() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnDelete[0]).toBeExisting();
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.btnConfirmDelete.click();
  }

  async expectNewEmployeeRow1(employee, email, area, metode) {
    await expect(this.employee[0]).toHaveText(employee);
    await expect(this.email[0]).toHaveText(email);
    await this.employee[0].click();
    await browser.pause(5000);
  }

  async editTask() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnEdit[0]).toBeExisting();
    await this.btnEdit[0].click();
  }

  async deleteTask() {
    // await browser.execute(() => document.body.style.zoom='70%')
    await browser.pause(3000);
    await expect(this.btnDelete[0]).toBeExisting();
    await this.btnDelete[0].click();
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.btnConfirmDelete.click();
  }

  async expectNewEmployeeRow1(employee, email, area, metode) {
    await expect(this.employee[0]).toHaveText(employee);
    await expect(this.email[0]).toHaveText(email);
    await this.employee[0].click();
    await browser.pause(5000);
  }
  async expectNewEmployeeRow1(employee, email, area, metode) {
    await expect(this.employee[0]).toHaveText(employee);
    await expect(this.email[0]).toHaveText(email);
    await expect(this.area[0]).toHaveText(area);
    await expect(this.metode[0]).toHaveText(metode);
    await this.employee[0].click();
    await browser.pause(5000);
  }

  async expectNewEmployeeRowSatu(employee, email, area, metode) {
    await expect(this.employee[0]).toHaveText(employee);
    await expect(this.email[0]).toHaveText(email);
    await expect(this.area[0]).toHaveText(area);
    await expect(this.metode[0]).toHaveText(metode);
    //await this.employee[0].click()
    //await browser.pause(5000)
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dte/employee-mapping");
  }
}

export default new EmployeeMappingPage();
