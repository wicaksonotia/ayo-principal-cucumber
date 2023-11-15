import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import b2cVoucherPage from "../../pageobjects/voucher/b2c-voucher.page";
import voucherTipePerokokCCdanIQOS from "../../pageobjects/voucher/32tipe-perokok-cc-dan-iqos.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId(
  "[PRINCIPAL] 32. Voucher Perokok CC dan Pengguna IQOS"
);
allureReporter.addFeature("Create Voucher Tipe Pengguna CC dan IQOS");

Given(/^I am on the B2C Voucher page$/, async () => {
  await LoginPage.open();
  await LoginPage.setLclStorage();
  await MainmenuPage.open();
  await MainmenuPage.dashboard();
  await LoginPage.acceptCookie();
  await MainmenuPage.b2cVocher();
});

When(/^I click button Tambah$/, async () => {
  await b2cVoucherPage.tombolTambah();
});

Then(/^System should be leading to Create B2C Voucher page$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page();
});

Given(/^I am on the Tambah B2C Voucher page$/, async () => {
  // await voucherTipePerokokCCdanIQOS.formPage();
});

When(/^I input Nama voucher (.*)$/, async (nama_voucher) => {
  await voucherTipePerokokCCdanIQOS.namaVoucher(nama_voucher);
});

Then(/^System should be input Nama Voucher$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page()
});

When(/^I input Nama Lain Voucher(.*)$/, async (nama_lain_voucher) => {
  await voucherTipePerokokCCdanIQOS.namaLainVoucher(nama_lain_voucher);
});

Then(/^System should be input Nama Lain Voucher$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page()
});

When(/^I input Nilai Voucher (.*)$/, async (nilai_voucher) => {
  await voucherTipePerokokCCdanIQOS.nilaiVoucher(nilai_voucher);
});

Then(/^System should be input Nilai Voucher$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page()
});

When(/^I input Jumlah Voucher per Customer (.*)$/, async (jumlah_voucher) => {
  await voucherTipePerokokCCdanIQOS.jumlahVoucher(jumlah_voucher);
});

Then(/^System should be input Jumlah Voucher per Customer$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page()
});

When(/^I select date in Tanggal Awal Program$/, async () => {
  await voucherTipePerokokCCdanIQOS.tanggalAwalProgram();
});

Then(/^System should be select date Tangal Awal Program$/, async () => {
  // await voucherTipePerokokCCdanIQOS.Page()
});

When(/^I select date in Tanggal Akhir Program$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.tanggalAkhirProgram();
});

Then(/^System should be select date Tanggal Akhir Program$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.Page();
});

When(/^I select date in Tanggal Awal Pemakaian Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.tanggalAwalPemakaianVoucher();
});

Then(
  /^System should be select date Tanggal Awal Pemakaian Voucher$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.Page();
  }
);

When(/^I select date in Tanggal Kadaluarsa Voucher$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.tanggalKadaluarsaVoucher();
});

Then(/^System should be select date Tanggal Kadaluarsa Voucher$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.Page();
});

When(/^I select Pesan Antar in Pengguna Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.pesanAntar();
});

Then(/^System should be select Pesan Antar$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.Page();
});

When(/^I select Langsung ke Toko in Pengguna Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.langsungkeToko();
});

Then(/^System should be select Langsung ke Toko$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.Page();
});

When(/^I click button Simpan in Detail Voucher form Page$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSimpan1();
});

Then(
  /^System should be submit data and leading to Panel Retailer Form Page$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formPage2();
  }
);

When(/^I click button Simpan in Panel Retailer Form Page$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSimpan2();
});

Then(/^System should be leading to Panel Customer Form Page$/, async () => {
  // await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I select Perokok CC in Tipe Customer$/, async () => {
  await voucherTipePerokokCCdanIQOS.tipeCustomerCC();
});

Then(/^System should be select Perokok CC in Tipe Customer$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I select Pengguna IQOS in Tipe Customer$/, async () => {
  await voucherTipePerokokCCdanIQOS.tipeCustomerIQOS();
});

Then(/^System should be select Pengguna IQOS in Tipe Customer$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await voucherTipePerokokCCdanIQOS.batasUmurDari(input_dari);
});

Then(/^System should be input Dari$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await voucherTipePerokokCCdanIQOS.batasUmurSampai(input_sampai);
});

Then(/^System should be input Sampai$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I select Semua in Jenis Kelamin$/, async () => {
  await voucherTipePerokokCCdanIQOS.jenisKelamin();
});

Then(/^System should be select Semua in Jenis Kelamin$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage3();
});

When(/^I click button Simpan in Panel Customer$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSimpan3();
});

Then(
  /^System should be submit data and leading to Penukaran Voucher Form Page$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formPage4();
  }
);

When(/^I select Reimbursment in Penukaran Voucher Form Page$/, async () => {
  await voucherTipePerokokCCdanIQOS.cbReimbursment();
});

Then(/^System should be select Reimbursment$/, async () => {
  // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher();
});

When(/^I select date in Tanggal Awal Penukaran Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.tanggalAwalPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Awal Penukaran Voucher$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher();
  }
);

When(/^I select date in Tanggal Berakhir Penukaran Voucher$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.tanggalBerakhirPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Berakhir Penukaran Voucher$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher();
  }
);

When(/^I select Voucher B2B in Opsi Penukaran Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.opsiPenukaranVoucher();
});

Then(/^System should be select Voucher B2B$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formpagepenukaranVoucher();
});

When(/^I click button Simpan in Penukaran Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSimpan4();
});

Then(
  /^System should be submit data and leading to Design Voucher Form Page$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formPage5();
  }
);

When(/^I insert Voucher in TEMPLATE F$/, async () => {
  await voucherTipePerokokCCdanIQOS.gambarVoucher();
});

Then(/^System show Voucher$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage5();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await voucherTipePerokokCCdanIQOS.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage5();
});

When(/^I click button Simpan in Design Voucher$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSimpan5();
});

Then(
  /^System should be submit data and leading to Preview Voucher Page1$/,
  async () => {
    // await voucherTipePerokokCCdanIQOS.formPage6();
  }
);

When(/^I click button SAVE SETTING$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolSaveSetting();
});

Then(/^System should be SAVE SETTING$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage6();
});

When(/^I click button PROCESS TO APPROVAL$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolProcesstoApproval();
});

Then(/^System should be PROCESS TO APPROVAL$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage6();
});

When(/^I click button APPROVE$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolApprove();
});

Then(/^System should be APPROVE$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage6();
});

When(/^I click button Ya Lanjutkan$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolyaLanjutkan();
});

Then(/^System should be Ya Lanjutkan$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage6();
});

When(/^I click button Publish1$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolPublish1();
});

Then(/^System should be Publish$/, async () => {
  //   await voucherTipePerokokCCdanIQOS.formPage6();
});

When(/^I click button Publish2$/, async () => {
  await voucherTipePerokokCCdanIQOS.tombolPublish2();
});

Then(
  /^System should be Publish and leading to Preview Voucher Page$/,
  async () => {
    await b2cVoucherPage.open();
    // await b2cVoucherPage.Page();
  }
);
