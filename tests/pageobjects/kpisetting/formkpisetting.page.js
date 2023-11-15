import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormKPISettingPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerCreateKpiSetting");
  }
  get titlePageEdit() {
    return $("#headerEditKpiSetting");
  }

  get selectValue() {
    return $$('[class="mat-select-value"]');
  }
  get option() {
    return $$('[role="option"]');
  }
  get status() {
    return $('[class="mat-slide-toggle-bar"]');
  }
  get btnAddKPI() {
    return $('[class="mat-raised-button ng-star-inserted"]');
  }
  get brand() {
    return $('[aria-label="Brand"]');
  }
  get searchBrand() {
    return $('[placeholder="Cari Brand..."]');
  }
  get redButton() {
    return $$('[class="mat-raised-button mat-primary ng-star-inserted"]');
  }
  get popUptitle() {
    return $("#headerPopupConfirmImport");
  }
  get popUpDesc() {
    return $('[class="mat-dialog-content ng-star-inserted"]');
  }
  get btnConfirmDelete() {
    return $("#btn-confirm-import");
  }
  get btnSimpan() {
    return $('[class="confirmation-button mat-raised-button"]');
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isExisting(), {
      timeout: 20000,
      timeoutMsg: "expected title page not existing after 20s",
    });
    await expect(this.btnSimpan).toBeDisplayed();
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Create KPI Setting");
    await expect(browser).toHaveUrlContaining("kpisetting/kpi-setting-create");
  }

  async pageEdit() {
    await expect(this.titlePageEdit).toHaveText("Edit KPI Setting");
    // await expect(browser).toHaveUrlContaining('kpisetting/kpi-setting-create/edit/')
  }

  async createKPI(brand) {
    await browser.pause(15000);
    await this.selectValue[0].click(); //start KPS
    await this.option[27].click(); //option start kps, contoh  17-24/04/2023
    await browser.pause(2000);
    await this.selectValue[1].click(); //end KPS
    //await this.option[50].scrollIntoView()
    await this.option[28].click(); //option end kps, contoh 20-21/05/2023
    await this.status.click();
    await this.selectValue[3].click(); //zone
    await this.option[5].click();
    await browser.keys("Escape");

    await this.btnSimpan.scrollIntoView();
    await this.selectValue[9].click(); //Kategori KPI 1 - Kategori
    await this.option[0].click();
    await browser.pause(2000);
    await this.selectValue[10].click(); //Kategori KPI 1 - Brand
    await this.searchBrand.setValue(brand);
    await browser.pause(2000);
    await this.option[0].waitForDisplayed();
    await this.option[0].click();
    await browser.pause(2000);
    await this.selectValue[11].click(); //Kategori KPI 1 - Parameter
    await this.option[0].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[12].click(); //Kategori KPI 2 - Kategori
    await this.option[1].click();
    await browser.pause(2000);
    await this.selectValue[13].click(); //Kategori KPI 2 - Nama TP
    await this.option[0].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[14].click(); //Kategori KPI 3 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[15].click(); //Kategori KPI 3 - Parameter
    await this.option[0].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[16].click(); //Kategori KPI 4 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[17].click(); //Kategori KPI 4 - Parameter
    await this.option[1].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[18].click(); //Kategori KPI 5 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[19].click(); //Kategori KPI 5 - Parameter
    await this.option[2].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[20].click(); //Kategori KPI 6 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[21].click(); //Kategori KPI 6 - Parameter
    await this.option[3].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[22].click(); //Kategori KPI 7 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[23].click(); //Kategori KPI 7 - Parameter
    await this.option[4].click();
    await browser.pause(2000);

    await this.btnAddKPI.click();
    await this.btnSimpan.scrollIntoView();
    await this.selectValue[24].click(); //Kategori KPI 8 - Kategori
    await this.option[2].click();
    await browser.pause(2000);
    await this.selectValue[25].click(); //Kategori KPI 8 - Parameter
    await this.option[5].click();
    await browser.pause(2000);
    await this.selectValue[26].click(); //Kategori KPI 8 - Brand
    await this.option[0].click();
    await browser.pause(2000);

    await this.redButton[18].click(); //move KPI 7 to 8
  }

  async editKPI() {
    await browser.pause(30000);
    await this.status.click();
    await this.selectValue[3].click(); //zone
    await this.redButton[1].scrollIntoView();
    await this.redButton[4].click(); //delete KPI 2
    await browser.pause(2000);
    await expect(this.btnConfirmDelete).toBeExisting();
    await this.popUptitle.getText();
    await this.popUpDesc.getText();
    await this.btnConfirmDelete.click();
  }

  async submitKPI() {
    await this.btnSimpan.scrollIntoView();
    await expect(this.btnSimpan).toBeClickable();
    await this.btnSimpan.click();
  }

  open() {
    return super.open("");
  }
}

export default new FormKPISettingPage();
