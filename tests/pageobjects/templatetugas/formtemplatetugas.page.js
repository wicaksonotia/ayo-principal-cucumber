import Page from "../page";
const path = require("path");

//sub page containing specific selectors and methods for a specific page
class FormTemplateTugasPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("div #headerTemplateTugas");
  }
  get btnSimpan() {
    return $("#btn-simpan-tugas");
  }
  get fieldUploadFile() {
    return $('input[type="file"]');
  }
  //Form
  get templateIR() {
    return $("#template-ir");
  }
  get shareableLink() {
    return $("#shareable-link");
  }
  get dropdownQuiz() {
    return $("#selectQuiz");
  }
  get option() {
    return $$("#options");
  }
  get optionIR23() {
    return $$('[class="mat-option ng-star-inserted"]');
  }
  get optionIR() {
    return $$('[class="mat-option-ripple mat-ripple"]');
  }
  get selectUPC() {
    return $$("#tipeundefined");
  }
  get responseType() {
    return $("#selectResponseType");
  }
  get IRType() {
    return $("#selectIRType");
  }
  get optionsResponseType() {
    return $("#mat-option-297");
  } //nonTbr, tbr

  get judulTugas() {
    return $("#judul-tugas");
  }
  get namaLainMisi() {
    return $("#nama-lain-misi");
  }
  get deskripsiTugas() {
    return $('[spellcheck="true"]');
  }
  get addMaterial() {
    return $("#tambah-material-input");
  }
  get jenisMaterial() {
    return $("#jenis-material");
  }
  get dropdownKategoriToolbox() {
    return $('[formcontrolname="kategori_toolbox"]');
  }
  get searchKategoriToolbox() {
    return $("#select-search-kategori-toolbox div #search-kategori-toolbox");
  }
  get selectKategoriToolbox() {
    return $('mat-option[role="option"] > span');
  }
  get dropdownTipeMisi() {
    return $("#tipe-misi");
  }
  get searchTipeMisi() {
    return $("#select-search-tipe-misi div #search-tipe-misi");
  }
  get selectTipeMisi() {
    return $('mat-option[role="option"] > span');
  }
  get dropdownInternalKategoriMisi() {
    return $("#tingkat-internal-misi");
  }
  get searchInternalKategoriMisi() {
    return $("#select-search-internal-misi div #search-internal-misi");
  }
  get selectInternalKategoriMisi() {
    return $('mat-option[role="option"] > span');
  }
  get dropdownKategoriMisi() {
    return $("#kategori-misi");
  }
  get searchKategoriMisi() {
    return $("#select-search-kategori-misi div #search-kategori-misi");
  }
  get selectKategoriMisi() {
    return $('mat-option[role="option"] > span');
  }
  get dropdownProjectMisi() {
    return $("#project-misi");
  }
  get searchProjectMisi() {
    return $("#select-search-project-misi div #search-project-misi");
  }
  get selectProjectMisi() {
    return $('mat-option[role="option"] > span');
  }
  get dropdownAlasanMenolakPilihan() {
    return $$("#reason");
  }
  get btnAddAlasanMenolakPilihan() {
    return $("#add-option");
  }
  get searchReasonMenolakPilihan() {
    return $("#select-search-reason > div > input");
  }
  get selectReasonMenolakPilihan() {
    return $$('mat-option[role="option"] > span');
  }

  get checkboxSettingBgMisi() {
    return $("#background-misi > label > div");
  }
  get btnAddImageBgMisi() {
    return $("#bg-misi");
  } // #icon-upload-image
  get inputAddImageBgMisi() {
    return $("#upload-file-misi");
  }
  get selectColorFontBgMisi() {
    return $("#color-font");
  }
  get previewBgMisi() {
    return $("div.previewBanner");
  }

  get addQuestions() {
    return $("#add-question");
  }

  get cbKodeQR() {
    return $$('[class="mat-checkbox-inner-container"]');
  }
  get upcCodeMax() {
    return $$('[formcontrolname="upcCodeMax"]');
  }
  get upcCoin() {
    return $$('[formcontrolname="upcCoin"]');
  }
  get cariKeluargaMerek() {
    return $$('[placeholder="Cari Family Brand"]');
  }
  get selectKeluargaMerek() {
    return $('mat-option[role="option"] > span');
  }
  get addImage() {
    return $("#add-image");
  }
  get btnUploadImage() {
    return $("#btnUploadImage");
  }
  get inputAddImage() {
    return $("#inputUploadImage");
  }
  get previewImageDialog() {
    return $('[role="dialog"] div div.previewBanner');
  }
  get previewImportImage() {
    return $("div div img.template-task-image");
  }
  get addVideo() {
    return $("#add-video");
  }
  get btnUploadVideo() {
    return $("#btnUploadVideo");
  }
  get inputUploadVideo() {
    return $("#inputUploadVideo");
  }
  get previewVideoDialog() {
    return $("div > video");
  }
  get previewImportVideo() {
    return $("div video.template-task-video");
  }
  get btnPilihUpload() {
    return $("#btnPilihUpload");
  }
  get btnBatalUpload() {
    return $("#btnBatalUpload");
  }

  get gambarIR() {
    return $('[alt="Gambar IR"]');
  }
  get gambarIR2() {
    return $$('[alt="Gambar IR"]');
  }
  get dropdownChoice() {
    return $("#btn-choice-answer-13");
  }
  get dropdownTipeQuestion() {
    return $$("#tipeQuestion");
  }
  get encryption0() {
    return $("#encryption-0-input");
  }
  get encryption1() {
    return $("#encryption-1-input");
  }
  get tipeQuestionJawabanSingkat() {
    return $("#tipeJawabanSingkat");
  }
  get tipeQuestionParagraf() {
    return $("#tipeQuestionParagraf");
  }
  get tipeQuestionPilGan() {
    return $("#tipeQuestionPilGan");
  }
  get btnAddNextQst() {
    return $("#btnAddNext");
  }
  get btnAddNextQst2() {
    return $$("#btnAddNext");
  }
  get addMoreOptionPilgan() {
    return $("#more-option");
  }
  get nextQuestion() {
    return $$('[formcontrolname="next_question"]');
  }
  get selectNextQuestion() {
    return $$('[class="mat-option-text"]');
  }
  get option7() {
    return $$('[formcontrolname="option"]');
  }
  get tipeQuestionPilGanAngka() {
    return $("#tipeQuestionPilGanAngka");
  }
  get tipeQuestionPilGanJwbnSingkat() {
    return $("#tipeQuestionPilGanJwbnSingkat");
  }
  get tipeQuestionPilGanParagraf() {
    return $("#tipeQuestionPilGanParagraf");
  }
  get tipeQuestionCheckbox() {
    return $("#tipeQuestionCheckbox");
  }
  get tipeQuestionUploadImage() {
    return $("#tipeQuestionUploadImage");
  }
  get tipeQuestionAngka() {
    return $("#tipeQuestionAngka");
  }
  get tipeQuestionSelectDate() {
    return $("#tipeQuestionSelectDate");
  }
  get tipeQuestionStockCheck() {
    return $("#tipeQuestionStockCheck");
  }
  get tipeQuestionStockCheckIR() {
    return $$("#tipeundefined");
  }
  get tipeQuestionPlanogramIR() {
    return $$("#tipeundefined");
  }
  get tipeQuestionUPC() {
    return $$("#tipeundefined");
  }

  get selectTemplate() {
    return $$("#selectIR");
  }
  get selectTemplatePlanogramIR() {
    return $$('[formcontrolname="planogram_id"]');
  }
  get tableStockCheckIR() {
    return $('[class="table"]');
  }

  get textareaQuestion() {
    return $$('[class="fr-wrapper"]');
  }
  get textareaQuestion1() {
    return $$('[spellcheck="true"]');
  }
  get textareaQuestion2() {
    return $$('[spellcheck="true"]');
  }
  get textareaQuestion3() {
    return $("#question-3");
  }
  get textareaQuestion4() {
    return $("#question-4");
  }
  get textareaQuestion5() {
    return $("#question-5");
  }
  get textareaQuestion6() {
    return $("#question-6");
  }
  get textareaQuestion7() {
    return $("#question-7");
  }
  get textareaQuestion8() {
    return $("#question-8");
  }
  get textareaQuestion9() {
    return $("#question-9");
  }
  get textareaQuestion10() {
    return $("#question-10");
  }
  // get textareaQuestion11 () { return $('#question-11') }
  get textareaQuestion12() {
    return $("#question-12");
  }
  get textareaQuestion13() {
    return $("#question-13");
  }
  get textareaQuestion14() {
    return $("#question-14");
  }

  get radiobtnOpsi() {
    return $("#btnOpsi");
  } // atau checkboxOpsi
  get textareaJwbn() {
    return $("#opsi-1-1");
  }
  get btnRemoveOpsi() {
    return $$("#btnRemoveOpsi");
  }
  get radiobtnAddOpsi() {
    return $$("#btnAddOpsi");
  } // atau checkboxAddOpsi

  get jawabanSingkat() {
    return $("#jawabanSingkat");
  }
  get jawabanPanjang() {
    return $("#jawabanPanjang");
  }
  get radiobtnJwbn() {
    return $("#");
  }

  get btnDelete() {
    return $$("#btnDeleteQuestion");
  }
  get btnUploadBuktiFoto() {
    return $("#btnUploadBuktiFoto");
  }
  get inputAngka() {
    return $("#inputAngka");
  }
  get inputDate() {
    return $("#inputDate");
  }
  get searchNamaProduk() {
    return $("#namaProduk");
  } //Stock Check
  get selectNamaProduk() {
    return $('mat-option[role="option"] > span');
  } //Stock Check
  get checkboxDirectToBelanja() {
    return $("#checkboxDirectToBelanja");
  }

  get btnDeleteQuestion() {
    return $$("#btnDeleteQuestion");
  }

  //paragraph
  get inputMinCharacter() {
    return $$('[formcontrolname="min_char"]');
  }
  get inputMaxCharacter() {
    return $$('[formcontrolname="max_char"]');
  }
  get scNumber() {
    return $('[class="mb-8"]');
  }
  get checkboxIncludeNumber() {
    return $$('[formcontrolname="include_number"]');
  }
  get checkboxIncludeSpecialCharacter() {
    return $$('[formcontrolname="include_special_char"]');
  }
  get inputSpecialCharacter() {
    return $('[placeholder="Character"]');
  }
  get dropdownLinkToProfile() {
    return $$("#selectLinkProfile");
  }
  get optionLinkToProfie() {
    return $$("#options");
  }

  //a method to encapsule automation code to interact with the page
  async page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 25000,
      timeoutMsg: "expected title page not displayed after 25s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 6000 });
  }

  async pageCreate() {
    await expect(this.titlePage).toHaveText("Buat Tugas");
    await expect(browser).toHaveUrlContaining("dte/template-task/create");
    await browser.pause(5000);
  }

  async pageEdit() {
    await expect(this.titlePage).toHaveText("Ubah Template Tugas");
    await expect(browser).toHaveUrlContaining("dte/template-task/edit");
    //verify checkbox Template IR already checked
    await browser.pause(3000);
    await this.dropdownTipeQuestion[1].scrollIntoView();
    await browser.pause(2000);
    await this.checkboxSettingBgMisi.scrollIntoView();
    await browser.pause(5000);
  }

  async pageDetail() {
    await expect(browser).toHaveUrlContaining("dte/template-task/detail");
    await browser.pause(5000);
  }

  async selectTemplateIR() {
    // await this.templateIR.scrollIntoView()
    await this.templateIR.click();
  }

  async selectResponseType() {
    await this.responseType.click();
    await this.option[1].waitForDisplayed();
    await this.option[1].click();
  }

  async selectShareblelink() {
    await this.shareableLink.click();
  }

  async selectIRType() {
    await this.IRType.click();
    await this.option[0].click();
  }

  async inputJudulTugas(judulTugas, namaLainMisi, deskripsiTugas) {
    await this.judulTugas.setValue(judulTugas);
    await this.namaLainMisi.setValue(namaLainMisi);
    await this.deskripsiTugas.scrollIntoView();
    await this.deskripsiTugas.setValue(deskripsiTugas);
  }

  async selectKategori(
    kategoriToolbox,
    tipeMisi,
    internalKategoriMisi,
    kategoriMisi,
    projectMisi
  ) {
    await this.addMaterial.scrollIntoView();
    await browser.pause(10000);
    await this.dropdownKategoriToolbox.click();
    await expect(this.searchKategoriToolbox).toBeDisplayed();
    await this.searchKategoriToolbox.setValue(kategoriToolbox);
    await browser.pause(2000);
    await this.selectKategoriToolbox.click();

    await this.dropdownTipeMisi.click();
    await expect(this.searchTipeMisi).toBeDisplayed();
    await this.searchTipeMisi.setValue(tipeMisi);
    await browser.pause(2000);
    await this.selectTipeMisi.click();

    await this.dropdownInternalKategoriMisi.click();
    await expect(this.searchInternalKategoriMisi).toBeDisplayed();
    await this.searchInternalKategoriMisi.setValue(internalKategoriMisi);
    await browser.pause(2000);
    await this.selectInternalKategoriMisi.click();

    await this.dropdownKategoriMisi.click();
    await expect(this.searchKategoriMisi).toBeDisplayed();
    await this.searchKategoriMisi.setValue(kategoriMisi);
    await browser.pause(2000);
    await this.selectKategoriMisi.click();

    await this.dropdownProjectMisi.click();
    await expect(this.searchProjectMisi).toBeDisplayed();
    await this.searchProjectMisi.setValue(projectMisi);
    await browser.pause(2000);
    await this.selectProjectMisi.click();
  }

  async selectKategori5(
    kategoriToolbox,
    tipeMisi,
    internalKategoriMisi,
    kategoriMisi,
    projectMisi
  ) {
    await this.addMaterial.scrollIntoView();
    await browser.pause(10000);
    await this.dropdownKategoriToolbox.click();
    await expect(this.searchKategoriToolbox).toBeDisplayed();
    await this.searchKategoriToolbox.setValue(kategoriToolbox);
    await browser.pause(2000);
    await this.selectKategoriToolbox.click();

    await this.dropdownTipeMisi.click();
    await expect(this.searchTipeMisi).toBeDisplayed();
    await this.searchTipeMisi.setValue(tipeMisi);
    await browser.pause(2000);
    await this.selectTipeMisi.click();

    await this.dropdownInternalKategoriMisi.click();
    await expect(this.searchInternalKategoriMisi).toBeDisplayed();
    await this.searchInternalKategoriMisi.setValue(internalKategoriMisi);
    await browser.pause(2000);
    await this.selectInternalKategoriMisi.click();

    await this.dropdownKategoriMisi.click();
    await expect(this.searchKategoriMisi).toBeDisplayed();
    await this.searchKategoriMisi.setValue(kategoriMisi);
    await browser.pause(2000);
    await this.selectKategoriMisi.click();

    await this.dropdownProjectMisi.click();
    await expect(this.searchProjectMisi).toBeDisplayed();
    await this.searchProjectMisi.setValue(projectMisi);
    await browser.pause(2000);
    await this.selectProjectMisi.click();
  }

  async uploadImage() {
    await this.addImage.scrollIntoView();
    await this.addImage.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/29importimage.jpg"
    );
    await browser.execute(function () {
      document.querySelector("#upload-image > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddImage.waitForDisplayed();
    await this.inputAddImage.setValue(remoteFilePath);
    await this.btnPilihUpload.click();
  }

  async uploadVideo() {
    await this.addVideo.scrollIntoView();
    await this.addVideo.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/30importvideo.mp4"
    );
    await browser.execute(function () {
      document.querySelector("#upload-video > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputUploadVideo.waitForDisplayed();
    await this.inputUploadVideo.setValue(remoteFilePath);
    await this.btnPilihUpload.click();
  }

  async addNewQuestion() {
    await this.addQuestions.click();
    await browser.pause(2000);
  }

  async selectQstJwbnSingkat() {
    //Scenario 32
    //await this.dropdownTipeQuestion[1].scrollIntoView()
    await this.dropdownTipeQuestion[0].click();
    await this.tipeQuestionJawabanSingkat.waitForExist();
    await this.tipeQuestionJawabanSingkat.click();
    await this.jawabanSingkat.scrollIntoView();
  }

  async selectQstJwbnSingkat55() {
    //Scenario 55
    //await this.dropdownTipeQuestion[1].scrollIntoView()
    await this.dropdownTipeQuestion[1].click();
    await this.tipeQuestionJawabanSingkat.waitForExist();
    await this.tipeQuestionJawabanSingkat.click();
    await this.jawabanSingkat.scrollIntoView();
  }

  async selectQstParagraf() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[1].click();
    await this.tipeQuestionParagraf.waitForExist();
    await this.tipeQuestionParagraf.click();
    await this.jawabanPanjang.scrollIntoView();
  }
  async selectQstParagraf() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[1].click();
    await this.tipeQuestionParagraf.waitForExist();
    await this.tipeQuestionParagraf.click();
    await this.jawabanPanjang.scrollIntoView();
  }
  async selectQstParagraf55() {
    //Scenario 55
    await browser.pause(2000);
    await this.dropdownTipeQuestion[2].click();
    await this.tipeQuestionParagraf.waitForExist();
    await this.tipeQuestionParagraf.click();
    await this.jawabanPanjang.scrollIntoView();
  }

  async selectQstPilGan() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[2].click();
    await this.tipeQuestionPilGan.waitForExist();
    await this.tipeQuestionPilGan.click();
    await this.radiobtnAddOpsi[0].scrollIntoView();
  }

  async selectQstPilGan55() {
    //Scenario 55
    await browser.pause(2000);
    await this.dropdownTipeQuestion[0].click();
    await this.tipeQuestionPilGan.waitForExist();
    await this.tipeQuestionPilGan.click();
    await this.radiobtnAddOpsi[0].scrollIntoView();
  }

  async setNextQuestion() {
    //Scenario 32
    await this.textareaQuestion1[1].scrollIntoView();

    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[0].click();
    await browser.pause(1500);
    await this.selectNextQuestion[0].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[1].click();
    await browser.pause(1500);
    await this.selectNextQuestion[1].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[2].click();
    await browser.pause(1500);
    await this.selectNextQuestion[2].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[3].click();
    await browser.pause(1500);
    await this.selectNextQuestion[3].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[4].click();
    await browser.pause(1500);
    await this.selectNextQuestion[4].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[5].click();
    await browser.pause(1500);
    await this.selectNextQuestion[5].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[6].click();
    await browser.pause(1500);
    await this.selectNextQuestion[6].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[7].click();
    await browser.pause(1500);
    await this.selectNextQuestion[7].click();
    await browser.pause(1500);

    await this.option7[6].scrollIntoView();

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[8].click();
    await browser.pause(1500);
    await this.selectNextQuestion[8].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[9].click();
    await browser.pause(1500);
    await this.selectNextQuestion[9].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[10].click();
    await browser.pause(1500);
    await this.selectNextQuestion[10].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[11].click();
    await browser.pause(1500);
    await this.selectNextQuestion[11].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[12].click();
    await browser.pause(1500);
    await this.selectNextQuestion[12].click();
    await browser.pause(1500);

    await this.addMoreOptionPilgan.click();
    await browser.pause(3000);
    await this.btnAddNextQst.click();
    await this.nextQuestion[13].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);
  }

  async setEndQuestion() {
    //Scenario 32
    await this.textareaQuestion1[2].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[14].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[3].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[15].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[4].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[16].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);
    await this.btnAddNextQst.click();
    await this.nextQuestion[17].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[5].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[18].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);
    await this.btnAddNextQst.click();
    await this.nextQuestion[19].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[6].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[20].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);
    await this.btnAddNextQst.click();
    await this.nextQuestion[21].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[7].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[22].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[8].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[23].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[9].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[24].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[10].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[25].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.btnDeleteQuestion[9].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[26].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[11].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[27].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[12].scrollIntoView();
    await this.btnAddNextQst.click();
    await this.nextQuestion[28].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);

    await this.textareaQuestion1[13].scrollIntoView();
    await browser.pause(1500);
    await this.btnAddNextQst.click();
    await this.nextQuestion[29].click();
    await browser.pause(1500);
    await this.selectNextQuestion[13].click();
    await browser.pause(1500);
  }

  async selectQstPilGanAngka() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[3].click();
    await this.tipeQuestionPilGanAngka.waitForExist();
    await this.tipeQuestionPilGanAngka.click();
    await this.radiobtnAddOpsi[1].scrollIntoView();
  }

  async selectQstPilGanAngka55() {
    //Scenario 55
    await browser.pause(2000);
    await this.dropdownTipeQuestion[3].click();
    await this.tipeQuestionPilGanAngka.waitForExist();
    await this.tipeQuestionPilGanAngka.click();
    await this.radiobtnAddOpsi[1].scrollIntoView();
  }

  async selectQstPilGanJwbnSingkat() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[4].click();
    await this.tipeQuestionPilGanJwbnSingkat.waitForExist();
    await this.tipeQuestionPilGanJwbnSingkat.click();
    await this.radiobtnAddOpsi[2].scrollIntoView();
  }

  async selectQstPilGanParagraf() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[5].click();
    await this.tipeQuestionPilGanParagraf.waitForExist();
    await this.tipeQuestionPilGanParagraf.click();
    await this.radiobtnAddOpsi[3].scrollIntoView();
  }

  async selectQstCheckbox() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[6].click();
    await this.tipeQuestionCheckbox.waitForExist();
    await this.tipeQuestionCheckbox.click();
    await this.radiobtnAddOpsi[4].scrollIntoView();
  }

  async selectQstUploadImage() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[7].click();
    await this.tipeQuestionUploadImage.waitForExist();
    await this.tipeQuestionUploadImage.click();
    await this.btnUploadBuktiFoto.scrollIntoView();
  }

  async selectQstAngka() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[8].click();
    await this.tipeQuestionAngka.waitForExist();
    await this.tipeQuestionAngka.click();
    await this.inputAngka.scrollIntoView();
  }

  async selectQstSelectDate() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[9].click();
    await this.tipeQuestionSelectDate.waitForExist();
    await this.tipeQuestionSelectDate.click();
    await this.inputDate.scrollIntoView();
  }

  async selectQstStockCheck() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[10].click();
    await this.tipeQuestionStockCheck.waitForExist();
    await this.tipeQuestionStockCheck.click();
  }

  async setStockCheck(namaProduk) {
    //Scenario 32
    await this.searchNamaProduk.setValue(namaProduk);
    await browser.pause(3000);
    await this.selectNamaProduk.click();
    await browser.pause(2000);
    await this.checkboxDirectToBelanja.scrollIntoView();
  }

  async selectQstStockCheckIR() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[10].click();
    await this.tipeQuestionStockCheckIR[0].waitForExist();
    await this.tipeQuestionStockCheckIR[0].click();
    await this.textareaQuestion12.scrollIntoView();
    await browser.pause(5000);
    await this.selectTemplate[0].waitForExist();
    await this.selectTemplate[0].click();
    await this.option[28].click();
    await browser.pause(1500);
    await this.tableStockCheckIR.scrollIntoView();
  }

  async selectQstStockCheckIR55() {
    //Scenario 55
    await browser.pause(2000);
    await this.dropdownTipeQuestion[13].click();
    await this.tipeQuestionStockCheckIR[4].waitForExist();
    await this.tipeQuestionStockCheckIR[4].click();
    await this.textareaQuestion1[13].scrollIntoView();
    await browser.pause(5000);
    await this.selectTemplate[1].waitForExist();
    await this.selectTemplate[1].click();
    await this.option[28].click();
    await browser.pause(1500);
    await this.tableStockCheckIR.scrollIntoView();
  }

  async selectQstPlanogramIR() {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[11].click();
    await this.tipeQuestionPlanogramIR[1].waitForExist();
    await this.tipeQuestionPlanogramIR[1].click();
    await this.textareaQuestion13.scrollIntoView();
    await browser.pause(2000);
    await this.selectTemplatePlanogramIR[1].waitForExist();
    await this.selectTemplatePlanogramIR[1].click();
    await this.option[295].click();
    await browser.pause(1500);
    await this.gambarIR.scrollIntoView();
  }

  async selectQstPlanogramIR55() {
    //Scenario 55
    await browser.pause(3000);
    //await this.dropdownChoice.click()
    await this.dropdownTipeQuestion[11].click();
    await this.tipeQuestionPlanogramIR[5].waitForExist();
    await this.tipeQuestionPlanogramIR[5].click();
    await this.textareaQuestion1[11].scrollIntoView();
    await browser.pause(2000);
    await this.selectTemplatePlanogramIR[0].waitForExist();
    await this.selectTemplatePlanogramIR[0].click();
    await this.option[295].click();
    await browser.pause(1500);
    await this.gambarIR.scrollIntoView();
  }

  async selectQstPUPC(code1, coin1, fam1) {
    //Scenario 32
    await browser.pause(2000);
    await this.dropdownTipeQuestion[12].click();
    await this.tipeQuestionUPC[2].waitForExist();
    await this.tipeQuestionUPC[2].click();
    await this.textareaQuestion14.scrollIntoView();
    await this.upcCodeMax[0].setValue(code1);
    await this.upcCoin[0].setValue(coin1);
    await this.cariKeluargaMerek[0].setValue(fam1);
    await browser.pause(1500);
    await this.selectKeluargaMerek.click();
    await browser.pause(1500);
  }

  async selectQstPUPC55(code1, coin1, fam1) {
    //Scenario 55
    await browser.pause(2000);
    await this.dropdownTipeQuestion[12].click();
    await this.selectUPC[0].waitForExist();
    await browser.pause(2000);
    await this.selectUPC[0].click();
    await browser.pause(2000);
    await this.upcCodeMax[0].scrollIntoView();
    await this.upcCodeMax[0].setValue(code1);
    await this.upcCoin[0].setValue(coin1);
    await this.cariKeluargaMerek[0].setValue(fam1);
    await browser.pause(2000);
    await this.selectKeluargaMerek.click();
    await browser.pause(2000);
  }

  async checkUPC(fam) {
    await this.dropdownProjectMisi.scrollIntoView();
    await browser.pause(3000);
    await this.dropdownTipeQuestion[0].click();
    await this.tipeQuestionUPC[0].waitForExist();
    await this.tipeQuestionUPC[0].click();
    await this.textareaQuestion1[1].scrollIntoView();
    await this.cariKeluargaMerek[0].setValue(fam);
    await browser.pause(1500);
    await this.selectKeluargaMerek.click();
    await browser.pause(1500);
  }

  async selectQstPlanogramIR1(pertanyaan1) {
    await this.dropdownTipeQuestion[0].click();
    await this.tipeQuestionPlanogramIR[5].waitForExist();
    await browser.pause(1500);
    await this.tipeQuestionPlanogramIR[5].click();
    await browser.pause(1500);
    await this.textareaQuestion1[1].scrollIntoView();
    await this.textareaQuestion1[1].setValue(pertanyaan1);
    await this.selectTemplate[0].click();
    await this.option[295].click();
    await browser.pause(1500);
  }

  async selectQstPlanogramIR2(pertanyaan2) {
    //await this.gambarIR.scrollIntoView()
    await this.btnDelete[0].scrollIntoView();
    //await this.dropdownTipeQuestion[1].scrollIntoView()
    await this.dropdownTipeQuestion[1].click();
    await this.tipeQuestionPlanogramIR[5].waitForExist();
    await browser.pause(1500);
    await this.tipeQuestionPlanogramIR[5].click();
    await browser.pause(1500);
    await this.textareaQuestion2[2].scrollIntoView();
    await this.textareaQuestion2[2].setValue(pertanyaan2);
    await this.selectTemplate[1].click();
    await this.option[295].click();
    await browser.pause(5000);
  }

  async selectQstPlanogramIR3(pertanyaan3) {
    // await this.gambarIR2[1].scrollIntoView()
    // await this.dropdownTipeQuestion[2].scrollIntoView()
    await this.btnDelete[1].scrollIntoView();
    await this.dropdownTipeQuestion[2].click();
    await this.tipeQuestionPlanogramIR[5].waitForExist();
    await browser.pause(1500);
    await this.tipeQuestionPlanogramIR[5].click();
    await browser.pause(2000);
    await this.textareaQuestion2[3].scrollIntoView();
    await this.textareaQuestion2[3].setValue(pertanyaan3);
    await this.selectTemplate[2].click();
    await this.option[295].click();
    await browser.pause(5000);
  }

  async selectQstUPC1(pertanyaan1, code1, coin1, fam1) {
    await this.dropdownTipeQuestion[0].click();
    await this.selectUPC[0].waitForExist();
    await browser.pause(1500);
    await this.selectUPC[0].click();
    await browser.pause(1500);
    await this.dropdownTipeQuestion[0].scrollIntoView();
    await this.cbKodeQR[3].click();
    await browser.pause(2000);
    await this.textareaQuestion1[0].scrollIntoView();
    await this.textareaQuestion1[0].setValue(pertanyaan1);
    await browser.pause(2000);
    await this.upcCodeMax[0].scrollIntoView();
    await this.upcCodeMax[0].setValue(code1);
    await this.upcCoin[0].setValue(coin1);
    await this.cariKeluargaMerek[0].setValue(fam1);
    await browser.pause(1500);
    await this.selectKeluargaMerek.click();
    await browser.pause(2000);
    //await this.dropdownTipeQuestion[1].scrollIntoView()
    //await this.btnDeleteQuestion[0].scrollIntoView()
  }

  async selectQstUPC2(pertanyaan2, code2, coin2, fam2) {
    await this.dropdownTipeQuestion[1].click();
    await this.selectUPC[0].waitForExist();
    await browser.pause(1500);
    await this.selectUPC[0].click();
    await browser.pause(2000);
    await this.textareaQuestion2[2].scrollIntoView();
    await this.textareaQuestion2[2].setValue(pertanyaan2);
    await browser.pause(2000);
    await this.upcCodeMax[1].setValue(code2);
    await this.upcCoin[1].setValue(coin2);
    await this.cariKeluargaMerek[1].setValue(fam2);
    await browser.pause(2000);
    await this.selectKeluargaMerek.click();
    await this.btnAddAlasanMenolakPilihan.scrollIntoView();
  }

  async addAlasanMenolakPilihan() {
    //await this.dropdownAlasanMenolakPilihan.scrollIntoView()
    await this.btnAddAlasanMenolakPilihan.scrollIntoView();
    await browser.pause(3000);
    await this.btnAddAlasanMenolakPilihan.click();
    // await browser.pause(2000);
  }

  async alasanMenolakPilihan1() {
    await browser.pause(2000);
    await this.dropdownAlasanMenolakPilihan[1].click();
  }

  async alasanMenolakPilihan2() {
    await browser.pause(2000);
    await this.dropdownAlasanMenolakPilihan[2].click();
  }

  async searchAlasanMenolakPilihan1(reason) {
    await browser.pause(4000);
    await this.searchReasonMenolakPilihan.waitForExist();
    await expect(this.searchReasonMenolakPilihan).toBeDisplayed();
    await expect(this.searchReasonMenolakPilihan).toBeDisplayed();
    await this.searchReasonMenolakPilihan.setValue(reason);
    await browser.pause(2000);
    await this.selectReasonMenolakPilihan[1].click();
  }

  async searchAlasanMenolakPilihan2(reason) {
    await browser.pause(4000);
    await this.searchReasonMenolakPilihan.waitForExist();
    await expect(this.searchReasonMenolakPilihan).toBeDisplayed();
    await expect(this.searchReasonMenolakPilihan).toBeDisplayed();
    await this.searchReasonMenolakPilihan.setValue(reason);
    await browser.pause(2000);
    await this.selectReasonMenolakPilihan[0].click();
  }

  async scrolldown() {
    await this.dropdownKategoriToolbox.scrollIntoView();
    await this.addQuestions.scrollIntoView();
  }

  async customBgMisi() {
    await this.btnSimpan.scrollIntoView();
    await this.checkboxSettingBgMisi.click();
    const remoteFilePath = path.join(
      __dirname,
      "../../files-to-upload/2misibackground.jpeg"
    );
    await browser.execute(function () {
      document.querySelector("#bg-misi > label").style =
        "visibility:visible; overflow:visible;";
    });
    await this.inputAddImageBgMisi.waitForDisplayed();
    await this.inputAddImageBgMisi.setValue(remoteFilePath);
    await this.previewBgMisi.scrollIntoView();
  }

  //skenario 5
  async selectQstParagraf1() {
    await browser.pause(2000);
    await this.dropdownTipeQuestion[0].scrollIntoView();
    await this.dropdownTipeQuestion[0].click();
    await this.tipeQuestionParagraf.waitForExist();
    await this.tipeQuestionParagraf.click();
    await this.jawabanPanjang.scrollIntoView();
  }

  //skenario 5
  async setNextQuestion1(inputQuestion) {
    await this.textareaQuestion1[1].scrollIntoView();
    await browser.pause(3000);
    await this.textareaQuestion1[1].setValue(inputQuestion);
    await browser.pause(2000);
  }

  async minCharacter(inputMin) {
    //await this.inputMinCharacter[0].scrollIntoView();
    await this.inputMinCharacter[0].setValue(inputMin);
    await browser.pause(2000);
  }

  async maxCharacter(inputMax) {
    await this.inputMaxCharacter[0].setValue(inputMax);
    await browser.pause(2000);
  }

  async includeNumber() {
    await this.scNumber.scrollIntoView();
    //await this.checkboxIncludeNumber.toBeClickable();
    await this.checkboxIncludeNumber[0].click();
    await browser.pause(2000);
  }

  async includeSpecialCharacter(inputCharacter) {
    await this.checkboxIncludeSpecialCharacter[0].click();
    await browser.pause(1000);
    await this.inputSpecialCharacter.setValue(inputCharacter);
  }

  async linkToProfile() {
    await this.dropdownLinkToProfile[0].click();
    await browser.pause(2000);
    await this.optionLinkToProfie[1].click();
    await browser.pause(2000);
  }

  async save() {
    await this.btnSimpan.scrollIntoView();
    await this.btnSimpan.click();
  }

  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("");
  }
}

export default new FormTemplateTugasPage();
