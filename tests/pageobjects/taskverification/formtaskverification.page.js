import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormTaskVerificationPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#header-buat_tugas");
  }
  get btnSimpan() {
    return $("#btn-simpan-tugas");
  }

  //Form
  get templateIR() {
    return $("#mat-checkbox-37");
  }
  get shareableLink() {
    return $("#mat-checkbox-38");
  }
  get nonQuiz() {
    return $("#mat-option-295");
  }
  get quiz() {
    return $("#mat-option-296");
  }
  get nonTbr() {
    return $("#mat-option-297");
  }
  get tbr() {
    return $("#mat-option-298");
  }

  get judulTugas() {
    return $("#");
  }
  get namaLainMisi() {
    return $("#");
  }
  get deskripsiTugas() {
    return $("#");
  }
  get addMaterial() {
    return $("#");
  }
  get jenisMaterial() {
    return $("#");
  }
  get dropdownKategoriToolbox() {
    return $("#");
  }
  get searchKategoriToolbox() {
    return $("#");
  }
  get selectKategoriToolbox() {
    return $("#");
  }
  get dropdownTipeMisi() {
    return $("#");
  }
  get searchTipeMisi() {
    return $("#");
  }
  get selectTipeMisi() {
    return $("#");
  }
  get dropdownInternalKategoriMisi() {
    return $("#");
  }
  get searchInternalKategoriMisi() {
    return $("#");
  }
  get selectInternalKategoriMisi() {
    return $("#");
  }
  get dropdownKategoriMisi() {
    return $("#");
  }
  get searchKategoriMisi() {
    return $("#");
  }
  get selectKategoriMisi() {
    return $("#");
  }
  get dropdownProjectMisi() {
    return $("#");
  }
  get searchProjectMisi() {
    return $("#");
  }
  get selectProjectMisi() {
    return $("#");
  }
  get alasanMenolakPilihan() {
    return $("#");
  }

  get checkboxSettingBgMisi() {
    return $("#");
  }
  get btnAddImageBgMisi() {
    return $("#");
  }
  get inputAddImageBgMisi() {
    return $("#upload-file-misi");
  }

  get addQuestions() {
    return $("#");
  }

  get addImage() {
    return $("#");
  }
  get inputAddImage() {
    return $("#");
  }
  get btnAddImage() {
    return $("#");
  }
  get btnPilihAddImage() {
    return $("#");
  }

  get addVideo() {
    return $("#");
  }
  get btnUploadVideo() {
    return $("#");
  }
  get btnUploadImage() {
    return $("#");
  }
  get dropdownTipeQuestion() {
    return $("#");
  }
  get tipeQuestionJawabanSingkat() {
    return $("#");
  }
  get tipeQuestionParagraf() {
    return $("#");
  }
  get tipeQuestionPilGan() {
    return $("#");
  }
  get tipeQuestionPilGanAngka() {
    return $("#");
  }
  get tipeQuestionPilGanJwbnSingkat() {
    return $("#");
  }
  get tipeQuestionPilGanParagraf() {
    return $("#");
  }
  get tipeQuestionCheckbox() {
    return $("#");
  }
  get tipeQuestionUploadImage() {
    return $("#");
  }
  get tipeQuestionAngka() {
    return $("#");
  }
  get tipeQuestionSelectDate() {
    return $("#");
  }
  get tipeQuestionStockCheck() {
    return $("#");
  }
  get textareaQuestion() {
    return $("#");
  }
  get textareaJwbn() {
    return $("#");
  }
  get radiobtnOpsi() {
    return $("#");
  }
  get radiobtnAddOpsi() {
    return $("#");
  }
  get radiobtnJwbn() {
    return $("#");
  }
  get checkboxOpsi() {
    return $("#");
  }
  get checkboxAddOpsi() {
    return $("#");
  }
  get btnUploadBuktiFoto() {
    return $("#");
  }
  get inputAngka() {
    return $("#");
  }
  get inputDate() {
    return $("#");
  }
  get namaProduk() {
    return $("#");
  }
  get checkboxDirectToBelanja() {
    return $("#");
  }
  get btnRemoveOpsi() {
    return $("#");
  }
  get btnDeleteQuestion() {
    return $("#");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 10000,
      timeoutMsg: "expected title page page not displayed after 10s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
    await expect(browser).toHaveUrlContaining("dte/template-task/create");
    await browser.pause(5000);
  }

  async selectTemplateIR() {
    await this.templateIR.click();
  }

  async selectShareblelink() {
    await this.shareableLink.click();
  }

  async inputJudulTugas() {
    await this.judulTugas.setValue("Upload Image");
    await this.namaLainMisi.setValue("Upload Image");
    await this.deskripsiTugas.setValue("Upload Image");
  }

  async selectKategori() {
    await this.dropdownKategoriToolbox.click();
    await this.searchKategoriToolbox.setValue("Toolbox Wknd");
    await this.selectKategoriToolbox.selectByVisibleText("Toolbox Wknd");
    await this.dropdownTipeMisi.click();
    await this.searchTipeMisi.setValue("Tipe Misi Wknd");
    await this.selectTipeMisi.selectByVisibleText("Tipe Misi Wknd");
    await this.dropdownInternalKategoriMisi.click();
    await this.searchInternalKategoriMisi.setValue(
      "Mudah-Interval Kategori Wknd"
    );
    await this.selectInternalKategoriMisi.selectByVisibleText(
      "Mudah-Interval Kategori Wknd"
    );
    await this.dropdownKategoriMisi.click();
    await this.searchKategoriMisi.setValue("Retailer SRC-Wknd");
    await this.selectKategoriMisi.selectByVisibleText("Retailer SRC-Wknd");
    await this.dropdownProjectMisi.click();
    await this.searchProjectMisi.setValue("Project Misi-Wknd");
    await this.selectProjectMisi.selectByVisibleText("Project Misi-Wknd");
  }

  async uploadImageTemplateTugas() {
    await this.addImage.click();
    await browser.execute(function () {
      document.getElementById("attachmentFile").style.display = "block";
    });
    await browser.pause(10000);
    await (await this.btnAddImage).waitForDisplayed({ setTimeout: 10000 });
    const filePathAttach = path.join(
      __dirname,
      "../../files-to-upload/templatetugas/29importimage.jpg"
    );
    const remoteFilePathAddAttach = await browser.uploadFile(filePathAttach, {
      setTimeout: 60000,
    });
    await (
      await this.inputAddImage
    ).setValue(remoteFilePathAddAttach, { setTimeout: 60000 });
    await browser.pause(2000);
    await this.btnPilihAddImage.click();
  }

  async uploadVideoTemplateTugas() {
    await this.addVideo.click();
    await browser.execute(function () {
      document.getElementById("attachmentFile").style.display = "block";
    });
    await browser.pause(10000);
    await (await this.btnAddVideo).waitForDisplayed({ setTimeout: 10000 });
    const filePathAttach = path.join(
      __dirname,
      "../../files-to-upload/templatetugas/30importvideo.mp4"
    );
    const remoteFilePathAddAttach = await browser.uploadFile(filePathAttach, {
      setTimeout: 60000,
    });
    await (
      await this.inputAddVideo
    ).setValue(remoteFilePathAddAttach, { setTimeout: 60000 });
    await browser.pause(2000);
    await this.btnPilihAddVideo.click();
  }

  async addNewQuestion() {
    await this.addQuestions.click();
  }

  async scrolldown() {
    await this.dropdownKategoriToolbox.scrollIntoView();
    await this.addQuestions.scrollIntoView();
  }

  async customBgMisi() {
    await this.checkboxSettingBgMisi.click();
    await browser.execute(function () {
      document.getElementById("attachmentFile").style.display = "block";
    });
    await browser.pause(10000);
    await (
      await this.btnAddImageBgMisi
    ).waitForDisplayed({ setTimeout: 10000 });
    const filePathAttach = path.join(
      __dirname,
      "../../files-to-upload/templatetugas/2custombgmisi.jpg"
    );
    const remoteFilePathAddAttach = await browser.uploadFile(filePathAttach, {
      setTimeout: 60000,
    });
    await (
      await this.inputAddImageBgMisi
    ).setValue(remoteFilePathAddAttach, { setTimeout: 60000 });
    await browser.pause(2000);
    await this.btnPilihAddImage.click();
  }

  async save() {
    await this.btnSimpan.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormTaskVerificationPage();
