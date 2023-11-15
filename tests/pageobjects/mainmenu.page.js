import Page from "./page";

//sub page containing specific selectors and methods for a specific page
class MainmenuPage extends Page {
  //define selectors using getter methods
  get titleDashboard() {
    return $("#dashboard-title");
  }
  get accountName() {
    return $("#account-name");
  }
  get btnAccount() {
    return $('button[class="user-button mat-button"]');
  }
  get btnSignOut() {
    return $("#cdk-overlay-0 > div > div > button:nth-child(2)");
  }

  get navigationSearch() {
    return $("#navigation-search");
  }
  get titleGroupMenu() {
    return $$('[class="group-title ng-star-inserted"]');
  }
  get pertanyaanVerifAgentMenu() {
    return $("#menu-273 > span");
  }

  get fieldForceMenu() {
    return $("#menu-300");
  }
  get produkMenu() {
    return $("#menu-324");
  } //produk manajemen barang
  get templateTugasMenu() {
    return $("#menu-330");
  }

  get GroupTradeProgramMenu() {
    return $("#menu-331");
  }
  get SubGroupTradeProgramMenu() {
    return $("#menu-332");
  }
  get groupTradeMenu() {
    return $("#menu-331");
  }
  get tradeProgramMenu() {
    return $("#menu-333");
  }
  get pengaturJadwalProgramMenu() {
    return $("#menu-334");
  }
  get approvalCoinAdjustmentMenu() {
    return $("#menu-335");
  }
  get audienceMenu() {
    return $("#menu-336");
  }
  get dteAutomationMenu() {
    return $("#menu-338");
  }
  get taskVerificationMenu() {
    return $("#menu-342");
  }
  get taskSequencingMenu() {
    return $("#menu-339");
  }
  get pengaturanAttributeMisiMenu() {
    return $("#menu-329");
  }
  get coinDisbursementMenu() {
    return $("#menu-343");
  }
  get coinRedemptionApprovalMenu() {
    return $("#menu-344");
  }
  get callToActionMenu() {
    return $("#menu-302");
  }

  get dropdownIklanDalamAplikasi() {
    return $('[class="nav-link mat-ripple ng-tns-c24-14 ng-star-inserted"]');
  }
  get buatNotifikasiMenu() {
    return $("#menu-367");
  }
  get popupNotifikasiMenu() {
    return $("#menu-368");
  }
  get spandukOnlineMenu() {
    return $("#menu-369");
  }

  get dropdownCNReward() {
    return $('[class="nav-link mat-ripple ng-tns-c24-20 ng-star-inserted"]');
  }
  get b2cVoucherMenu() {
    return $("#menu-394");
  }
  get koinPotonganBelanjaMenu() {
    return $("#menu-396");
  }

  get dropdownUndianMenu() {
    return $('[class="nav-link mat-ripple ng-tns-c24-11 ng-star-inserted"]');
  }
  get undianMenu() {
    return $("#menu-361");
  } //pengaturan undian

  get SpinTheWheelMenu() {
    return $("#menu-351");
  }

  get principalNotesForRMenu() {
    return $("#menu-304");
  }
  get dropdownImageRecognition() {
    return $('[class="nav-link mat-ripple ng-tns-c24-12 ng-star-inserted"]');
  }
  get MasterBrandGroupMenu() {
    return $("#menu-356");
  }
  get MasterBrandMenu() {
    return $("#menu-357");
  }
  get TamplatePlanogramMenu() {
    return $("#menu-359");
  }
  get CheckImagePlanogramMenu() {
    return $("#menu-360");
  }

  get EmployeeMappingMenu() {
    return $("#menu-349");
  }

  get xpMenu() {
    return $("#menu-340");
  }
  //kpi setting
  get KPISettingMenu() {
    return $("#menu-305");
  }

  get dropdownTaskVerification2() {
    return $('[class="nav-link mat-ripple ng-tns-c24-13 ng-star-inserted"]');
  }
  get taskVerificationMenu() {
    return $("#menu-352");
  }
  get verificationAssignmentMenu() {
    return $("#menu-354");
  }

  get flushCoinMenu() {
    return $("#menu-362");
  }

  get osemAudienceMenu() {
    return $("#menu-436");
  }

  //a method to encapsule automation code to interact with the page
  async dashboard() {
    await browser.waitUntil(
      async () => await this.titleDashboard.isDisplayed(),
      {
        timeout: 15000,
        timeoutMsg: "expected title Dashboard page not displayed after 15s",
      }
    );
    await expect(this.titleDashboard).toBeDisplayed({ timeout: 10000 });
    await expect(browser).toHaveUrlContaining("dashboard");
    await expect(this.accountName).toBeDisplayed({ timeout: 10000 });
    // await expect(this.accountName).toHaveText(accountname)
    // await expect(this.pertanyaanVerifAgentMenu).toBeDisplayed({timeout:10000})
    await browser.pause(5000);
  }

  async signOut() {
    await this.btnAccount.click();
    await this.btnSignOut.click();
  }

  async templateTugas() {
    await this.templateTugasMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.templateTugasMenu).toBeDisplayed();
    await this.templateTugasMenu.click({ setTimeout: 10000 });
  }

  async fieldForce() {
    await this.fieldForceMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.fieldForceMenu).toBeDisplayed();
    await this.fieldForceMenu.click({ setTimeout: 10000 });
  }

  async produk() {
    await this.produkMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.produkMenu).toBeDisplayed();
    await this.produkMenu.click({ setTimeout: 10000 });
  }

  async groupTrade() {
    await this.groupTradeMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.groupTradeMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.groupTradeMenu.click({ setTimeout: 10000 });
  }

  async cta() {
    await this.callToActionMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.callToActionMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.callToActionMenu.click({ setTimeout: 10000 });
  }

  async tradeProgram() {
    await this.tradeProgramMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.tradeProgramMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.tradeProgramMenu.click({ setTimeout: 10000 });
  }

  async pengaturJadwalProgram() {
    await this.pengaturJadwalProgramMenu.click();
  }

  async approvalCoinAdjustment() {
    await this.approvalCoinAdjustmentMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.approvalCoinAdjustmentMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.approvalCoinAdjustmentMenu.click();
  }

  async audience() {
    await this.audienceMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.audienceMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.audienceMenu.click({ setTimeout: 10000 });
  }

  async dteAutomation() {
    await this.dteAutomationMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.dteAutomationMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.dteAutomationMenu.click();
  }

  async taskVerification() {
    await this.taskVerificationMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.taskVerificationMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.taskVerificationMenu.click({ setTimeout: 10000 });
  }

  async taskSequencing() {
    await this.taskSequencingMenu.scrollIntoView({ setTimeout: 10000 });
    // await this.taskSequencingMenu.waitForClickable()
    await expect(this.taskSequencingMenu).toBeDisplayed({ setTimeout: 10000 });
    // await expect(this.taskSequencingMenu).toBeClickable()
    await this.taskSequencingMenu.click({ setTimeout: 10000 });
  }

  async pengaturanAttributeMisi() {
    await this.pengaturanAttributeMisiMenu.scrollIntoView({
      setTimeout: 10000,
    });
    await expect(this.pengaturanAttributeMisiMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.pengaturanAttributeMisiMenu.click();
  }

  async coinDisbursement() {
    await this.coinDisbursementMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.coinDisbursementMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.coinDisbursementMenu.click();
  }

  async buatNotifikasi() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView({ setTimeout: 6000 });
    await this.dropdownIklanDalamAplikasi.click();
    await this.buatNotifikasiMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.buatNotifikasiMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.buatNotifikasiMenu.click();
  }

  async popupNotifikasi() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView({ setTimeout: 6000 });
    await this.dropdownIklanDalamAplikasi.click();
    await this.popupNotifikasiMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.popupNotifikasiMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.popupNotifikasiMenu.click();
  }

  async spandukOnline() {
    await this.dropdownIklanDalamAplikasi.scrollIntoView({ setTimeout: 6000 });
    await this.dropdownIklanDalamAplikasi.click();
    await this.spandukOnlineMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.spandukOnlineMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.spandukOnlineMenu.click();
  }

  async DropdownCN() {
    //await this.navigationSearch.addValue('CN Reward');
    //await browser.pause(2000);
    await this.dropdownCNReward.scrollIntoView({ setTimeout: 6000 });
    //await expect(this.dropdownUndianMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.dropdownCNReward.click();
  }

  async b2cVocher() {
    await this.navigationSearch.addValue("B2C Voucher");
    await this.b2cVoucherMenu.scrollIntoView({ setTimeout: 10000 });
    //await expect(this.b2cVoucherMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.b2cVoucherMenu.click();
  }

  async KoinPotonganBelanja() {
    //await this.navigationSearch.addValue('Koin Potongan Belanja');
    await this.koinPotonganBelanjaMenu.scrollIntoView({ setTimeout: 10000 });
    //await expect(this.b2cVoucherMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.koinPotonganBelanjaMenu.click();
  }

  async DropdownUndian() {
    await this.dropdownUndianMenu.scrollIntoView({ setTimeout: 6000 });
    //await expect(this.dropdownUndianMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.dropdownUndianMenu.click();
  }

  async Undian() {
    //await expect(this.undianMenu).toBeDisplayed({ setTimeout: 3000 })
    //await this.undianMenu.scrollIntoView({setTimeout:5000});
    await this.undianMenu.click();
    await browser.pause(20000);
  }

  async SpinTheWheel() {
    await this.SpinTheWheelMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.SpinTheWheelMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.SpinTheWheelMenu.click();
  }

  async GroupTradeProgram() {
    await this.GroupTradeProgramMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.GroupTradeProgramMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.GroupTradeProgramMenu.click();
  }

  async SubGroupTradeProgram() {
    await this.SubGroupTradeProgramMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.SubGroupTradeProgramMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.SubGroupTradeProgramMenu.click();
  }

  async DropdownImageR() {
    await this.dropdownImageRecognition.scrollIntoView({ setTimeout: 6000 });
    //await expect(this.dropdownUndianMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.dropdownImageRecognition.click();
  }

  async MasterBrandGroup() {
    //await expect(this.undianMenu).toBeDisplayed({ setTimeout: 3000 })
    //await this.undianMenu.scrollIntoView({setTimeout:5000});
    //await this.MasterBrandGroupMenu.scrollIntoView()
    await this.MasterBrandGroupMenu.click();
    await browser.pause(20000);
  }

  async CheckImagePlanogram() {
    await this.CheckImagePlanogramMenu.scrollIntoView({ setTimeout: 10000 });
    await this.CheckImagePlanogramMenu.click();
    await browser.pause(20000);
  }

  async KPISetting() {
    await this.KPISettingMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.KPISettingMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.KPISettingMenu.click();
  }

  async coinRedemptionApproval() {
    await this.coinRedemptionApprovalMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.coinRedemptionApprovalMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.coinRedemptionApprovalMenu.click();
  }

  async EmployeeMapping() {
    await this.EmployeeMappingMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.EmployeeMappingMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.EmployeeMappingMenu.click();
  }

  async verificationAssignment() {
    await this.verificationAssignmentMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.verificationAssignmentMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.verificationAssignmentMenu.click();
  }

  async XP() {
    await this.xpMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.xpMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.xpMenu.click();
  }

  async principalNotesForR() {
    await this.principalNotesForRMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.principalNotesForRMenu).toBeDisplayed({
      setTimeout: 10000,
    });
    await this.principalNotesForRMenu.click();
  }

  async DropTaskVerif2() {
    await this.dropdownTaskVerification2.scrollIntoView({ setTimeout: 6000 });
    //await expect(this.dropdownUndianMenu).toBeDisplayed({ setTimeout: 10000 })
    await this.dropdownTaskVerification2.click();
  }

  async TaskVerification2() {
    //await expect(this.undianMenu).toBeDisplayed({ setTimeout: 3000 })
    //await this.undianMenu.scrollIntoView({setTimeout:5000});
    await this.taskVerificationMenu.click();
    await browser.pause(20000);
  }

  async FlushCoin() {
    await this.flushCoinMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.flushCoinMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.flushCoinMenu.click();
  }

  async OsemAudience() {
    await this.osemAudienceMenu.scrollIntoView({ setTimeout: 10000 });
    await expect(this.osemAudienceMenu).toBeDisplayed({ setTimeout: 10000 });
    await this.osemAudienceMenu.click();
  }
  //overwrite specifc options to adapt it to page object
  open() {
    return super.open("dashboard");
  }
}

export default new MainmenuPage();
