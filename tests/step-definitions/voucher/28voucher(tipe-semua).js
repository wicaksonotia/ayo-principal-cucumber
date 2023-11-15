import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import b2cVoucherPage from "../../pageobjects/voucher/b2c-voucher.page";
import voucherTipeSemua from "../../pageobjects/voucher/28tipe-semua.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 28. Voucher All User");
allureReporter.addFeature("Create Voucher Tipe Semua");

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
  // await voucherTipeSemua.Page();
});

Given(/^I am on the Tambah B2C Voucher page$/, async () => {
  // await voucherTipeSemua.formPage();
});

When(/^I input Nama voucher (.*)$/, async (nama_voucher) => {
  await voucherTipeSemua.namaVoucher(nama_voucher);
});

Then(/^System should be input Nama Voucher$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I input Nama Lain Voucher(.*)$/, async (nama_lain_voucher) => {
  await voucherTipeSemua.namaLainVoucher(nama_lain_voucher);
});

Then(/^System should be input Nama Lain Voucher$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I input Nilai Voucher (.*)$/, async (nilai_voucher) => {
  await voucherTipeSemua.nilaiVoucher(nilai_voucher);
});

Then(/^System should be input Nilai Voucher$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I input Jumlah Voucher per Customer (.*)$/, async (jumlah_voucher) => {
  await voucherTipeSemua.jumlahVoucher(jumlah_voucher);
});

Then(/^System should be input Jumlah Voucher per Customer$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I select date in Tanggal Awal Program$/, async () => {
  await voucherTipeSemua.tanggalAwalProgram();
});

Then(/^System should be select date Tangal Awal Program$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I select date in Tanggal Akhir Program$/, async () => {
  //   await voucherTipeSemua.tanggalAkhirProgram();
});

Then(/^System should be select date Tanggal Akhir Program$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I select date in Tanggal Awal Pemakaian Voucher$/, async () => {
  await voucherTipeSemua.tanggalAwalPemakaianVoucher();
});

Then(
  /^System should be select date Tanggal Awal Pemakaian Voucher$/,
  async () => {
    // await voucherTipeSemua.Page();
  }
);

When(/^I select date in Tanggal Kadaluarsa Voucher$/, async () => {
  //   await voucherTipeSemua.tanggalKadaluarsaVoucher();
});

Then(/^System should be select date Tanggal Kadaluarsa Voucher$/, async () => {
  //   await voucherTipeSemua.Page();
});

When(/^I select Pesan Antar in Pengguna Voucher$/, async () => {
  await voucherTipeSemua.pesanAntar();
});

Then(/^System should be select Pesan Antar$/, async () => {
  // await voucherTipeSemua.Page();
});

When(/^I select Langsung ke Toko in Pengguna Voucher$/, async () => {
  await voucherTipeSemua.langsungkeToko();
});

Then(/^System should be select Langsung ke Toko$/, async () => {
  // await voucherTipeSemua.Page();
});

When(/^I click button Simpan in Detail Voucher form Page$/, async () => {
  await voucherTipeSemua.tombolSimpan1();
});

Then(
  /^System should be submit data and leading to Panel Retailer Form Page$/,
  async () => {
    // await voucherTipeSemua.formPage2();
  }
);

When(/^I click button Simpan in Panel Retailer Form Page$/, async () => {
  await voucherTipeSemua.tombolSimpan2();
});

Then(/^System should be leading to Panel Customer Form Page$/, async () => {
  // await voucherTipeSemua.formPage3();
});

When(/^I select Semua in Tipe Customer$/, async () => {
  await voucherTipeSemua.tipeCustomer();
});

Then(/^System should be select Semua in Tipe Customer$/, async () => {
  // await voucherTipeSemua.formPage3();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await voucherTipeSemua.batasUmurDari(input_dari);
});

Then(/^System should be input Dari$/, async () => {
  // await voucherTipeSemua.formPage3();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await voucherTipeSemua.batasUmurSampai(input_sampai);
});

Then(/^System should be input Sampai$/, async () => {
  // await voucherTipeSemua.formPage3();
});

When(/^I select Semua in Jenis Kelamin$/, async () => {
  await voucherTipeSemua.jenisKelamin();
});

Then(/^System should be select Semua in Jenis Kelamin$/, async () => {
  // await voucherTipeSemua.formPage3();
});

When(/^I click button Simpan in Panel Customer$/, async () => {
  await voucherTipeSemua.tombolSimpan3();
});

Then(
  /^System should be submit data and leading to Penukaran Voucher Form Page$/,
  async () => {
    // await voucherTipeSemua.formPage4();
  }
);

When(/^I select Reimbursment in Penukaran Voucher Form Page$/, async () => {
  await voucherTipeSemua.cbReimbursment();
});

Then(/^System should be select Reimbursment$/, async () => {
  //await voucherTipeSemua.Page()
  // await voucherTipeSemua.formpagepenukaranVoucher();
});

When(/^I select date in Tanggal Awal Penukaran Voucher$/, async () => {
  await voucherTipeSemua.tanggalAwalPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Awal Penukaran Voucher$/,
  async () => {
    // await voucherTipeSemua.formpagepenukaranVoucher();
  }
);

When(/^I select date in Tanggal Berakhir Penukaran Voucher$/, async () => {
  //   await voucherTipeSemua.tanggalBerakhirPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Berakhir Penukaran Voucher$/,
  async () => {
    // await voucherTipeSemua.formpagepenukaranVoucher();
  }
);

When(/^I select Voucher B2B in Opsi Penukaran Voucher$/, async () => {
  await voucherTipeSemua.opsiPenukaranVoucher();
});

Then(/^System should be select Voucher B2B$/, async () => {
  //   await voucherTipeSemua.formpagepenukaranVoucher();
});

When(/^I click button Simpan in Penukaran Voucher$/, async () => {
  await voucherTipeSemua.tombolSimpan4();
});

Then(
  /^System should be submit data and leading to Design Voucher Form Page$/,
  async () => {
    // await voucherTipeSemua.formPage5();
  }
);

When(/^I insert Voucher in TEMPLATE F$/, async () => {
  await voucherTipeSemua.gambarVoucher();
});

Then(/^System show Voucher$/, async () => {
  //   await voucherTipeSemua.formPage5();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await voucherTipeSemua.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  //   await voucherTipeSemua.formPage5();
});

When(/^I click button Simpan in Design Voucher$/, async () => {
  await voucherTipeSemua.tombolSimpan5();
});

Then(
  /^System should be submit data and leading to Preview Voucher Page1$/,
  async () => {
    // await voucherTipeSemua.formPage6();
  }
);

When(/^I click button SAVE SETTING$/, async () => {
  await voucherTipeSemua.tombolSaveSetting();
});

Then(/^System should be SAVE SETTING$/, async () => {
  //   await voucherTipeSemua.formPage6();
});

When(/^I click button PROCESS TO APPROVAL$/, async () => {
  await voucherTipeSemua.tombolProcesstoApproval();
});

Then(/^System should be PROCESS TO APPROVAL$/, async () => {
  //   await voucherTipeSemua.formPage6();
});

When(/^I click button APPROVE$/, async () => {
  await voucherTipeSemua.tombolApprove();
});

Then(/^System should be APPROVE$/, async () => {
  //   await voucherTipeSemua.formPage6();
});

When(/^I click button Ya Lanjutkan$/, async () => {
  await voucherTipeSemua.tombolyaLanjutkan();
});

Then(/^System should be Ya Lanjutkan$/, async () => {
  //   await voucherTipeSemua.formPage6();
});

When(/^I click button Publish1$/, async () => {
  await voucherTipeSemua.tombolPublish1();
});

Then(/^System should be Publish$/, async () => {
  //   await voucherTipeSemua.formPage6();
});

When(/^I click button Publish2$/, async () => {
  await voucherTipeSemua.tombolPublish2();
});

Then(
  /^System should be Publish and leading to Preview Voucher Page$/,
  async () => {
    await b2cVoucherPage.open();
    // await b2cVoucherPage.Page();
  }
);
