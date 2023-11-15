import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import b2cVoucherPage from "../../pageobjects/voucher/b2c-voucher.page";
import voucherTipeIQOS from "../../pageobjects/voucher/30tipe-pengguna-iqos.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 30. Voucher Pengguna IQOS");
allureReporter.addFeature("Create Voucher Tipe Pengguna IQOS");

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
  // await voucherTipeIQOS.Page();
});

Given(/^I am on the Tambah B2C Voucher page$/, async () => {
  // await voucherTipeIQOS.formPage();
});

When(/^I input Nama voucher (.*)$/, async (nama_voucher) => {
  await voucherTipeIQOS.namaVoucher(nama_voucher);
});

Then(/^System should be input Nama Voucher$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I input Nama Lain Voucher(.*)$/, async (nama_lain_voucher) => {
  await voucherTipeIQOS.namaLainVoucher(nama_lain_voucher);
});

Then(/^System should be input Nama Lain Voucher$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I input Nilai Voucher (.*)$/, async (nilai_voucher) => {
  await voucherTipeIQOS.nilaiVoucher(nilai_voucher);
});

Then(/^System should be input Nilai Voucher$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I input Jumlah Voucher per Customer (.*)$/, async (jumlah_voucher) => {
  await voucherTipeIQOS.jumlahVoucher(jumlah_voucher);
});

Then(/^System should be input Jumlah Voucher per Customer$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I select date in Tanggal Awal Program$/, async () => {
  await voucherTipeIQOS.tanggalAwalProgram();
});

Then(/^System should be select date Tangal Awal Program$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I select date in Tanggal Akhir Program$/, async () => {
  // await voucherTipeIQOS.tanggalAkhirProgram()
});

Then(/^System should be select date Tanggal Akhir Program$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I select date in Tanggal Awal Pemakaian Voucher$/, async () => {
  await voucherTipeIQOS.tanggalAwalPemakaianVoucher();
});

Then(
  /^System should be select date Tanggal Awal Pemakaian Voucher$/,
  async () => {
    // await voucherTipeIQOS.Page()
  }
);

When(/^I select date in Tanggal Kadaluarsa Voucher$/, async () => {
  // await voucherTipeIQOS.tanggalKadaluarsaVoucher()
});

Then(/^System should be select date Tanggal Kadaluarsa Voucher$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I select Pesan Antar in Pengguna Voucher$/, async () => {
  await voucherTipeIQOS.pesanAntar();
});

Then(/^System should be select Pesan Antar$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I select Langsung ke Toko in Pengguna Voucher$/, async () => {
  await voucherTipeIQOS.langsungkeToko();
});

Then(/^System should be select Langsung ke Toko$/, async () => {
  // await voucherTipeIQOS.Page()
});

When(/^I click button Simpan in Detail Voucher form Page$/, async () => {
  await voucherTipeIQOS.tombolSimpan1();
});

Then(
  /^System should be submit data and leading to Panel Retailer Form Page$/,
  async () => {
    // await voucherTipeIQOS.formPage2();
  }
);

When(/^I click button Simpan in Panel Retailer Form Page$/, async () => {
  await voucherTipeIQOS.tombolSimpan2();
});

Then(/^System should be leading to Panel Customer Form Page$/, async () => {
  // await voucherTipeIQOS.formPage3();
});

When(/^I select Pengguna IQOS in Tipe Customer$/, async () => {
  await voucherTipeIQOS.tipeCustomer();
});

Then(/^System should be select Pengguna IQOS in Tipe Customer$/, async () => {
  //   await voucherTipeIQOS.formPage3();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await voucherTipeIQOS.batasUmurDari(input_dari);
});

Then(/^System should be input Dari$/, async () => {
  //   await voucherTipeIQOS.formPage3();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await voucherTipeIQOS.batasUmurSampai(input_sampai);
});

Then(/^System should be input Sampai$/, async () => {
  //   await voucherTipeIQOS.formPage3();
});

When(/^I select Semua in Jenis Kelamin$/, async () => {
  await voucherTipeIQOS.jenisKelamin();
});

Then(/^System should be select Semua in Jenis Kelamin$/, async () => {
  //   await voucherTipeIQOS.formPage3();
});

When(/^I click button Simpan in Panel Customer$/, async () => {
  await voucherTipeIQOS.tombolSimpan3();
});

Then(
  /^System should be submit data and leading to Penukaran Voucher Form Page$/,
  async () => {
    // await voucherTipeIQOS.formPage4();
  }
);

When(/^I select Reimbursment in Penukaran Voucher Form Page$/, async () => {
  await voucherTipeIQOS.cbReimbursment();
});

Then(/^System should be select Reimbursment$/, async () => {
  // await voucherTipeIQOS.formpagepenukaranVoucher();
});

When(/^I select date in Tanggal Awal Penukaran Voucher$/, async () => {
  await voucherTipeIQOS.tanggalAwalPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Awal Penukaran Voucher$/,
  async () => {
    // await voucherTipeIQOS.formpagepenukaranVoucher();
  }
);

When(/^I select date in Tanggal Berakhir Penukaran Voucher$/, async () => {
  //   await voucherTipeIQOS.tanggalBerakhirPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Berakhir Penukaran Voucher$/,
  async () => {
    // await voucherTipeIQOS.formpagepenukaranVoucher();
  }
);

When(/^I select Voucher B2B in Opsi Penukaran Voucher$/, async () => {
  await voucherTipeIQOS.opsiPenukaranVoucher();
});

Then(/^System should be select Voucher B2B$/, async () => {
  //   await voucherTipeIQOS.formpagepenukaranVoucher();
});

When(/^I click button Simpan in Penukaran Voucher$/, async () => {
  await voucherTipeIQOS.tombolSimpan4();
});

Then(
  /^System should be submit data and leading to Design Voucher Form Page$/,
  async () => {
    // await voucherTipeIQOS.formPage5();
  }
);

When(/^I insert Voucher in TEMPLATE F$/, async () => {
  await voucherTipeIQOS.gambarVoucher();
});

Then(/^System show Voucher$/, async () => {
  //   await voucherTipeIQOS.formPage5();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await voucherTipeIQOS.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  //   await voucherTipeIQOS.formPage5();
});

When(/^I click button Simpan in Design Voucher$/, async () => {
  await voucherTipeIQOS.tombolSimpan5();
});

Then(
  /^System should be submit data and leading to Preview Voucher Page1$/,
  async () => {
    // await voucherTipeIQOS.formPage6();
  }
);

When(/^I click button SAVE SETTING$/, async () => {
  await voucherTipeIQOS.tombolSaveSetting();
});

Then(/^System should be SAVE SETTING$/, async () => {
  //   await voucherTipeIQOS.formPage6();
});

When(/^I click button PROCESS TO APPROVAL$/, async () => {
  await voucherTipeIQOS.tombolProcesstoApproval();
});

Then(/^System should be PROCESS TO APPROVAL$/, async () => {
  //   await voucherTipeIQOS.formPage6();
});

When(/^I click button APPROVE$/, async () => {
  await voucherTipeIQOS.tombolApprove();
});

Then(/^System should be APPROVE$/, async () => {
  //   await voucherTipeIQOS.formPage6();
});

When(/^I click button Ya Lanjutkan$/, async () => {
  await voucherTipeIQOS.tombolyaLanjutkan();
});

Then(/^System should be Ya Lanjutkan$/, async () => {
  //   await voucherTipeIQOS.formPage6();
});

When(/^I click button Publish1$/, async () => {
  await voucherTipeIQOS.tombolPublish1();
});

Then(/^System should be Publish$/, async () => {
  //   await voucherTipeIQOS.formPage6();
});

When(/^I click button Publish2$/, async () => {
  await voucherTipeIQOS.tombolPublish2();
});

Then(
  /^System should be Publish and leading to Preview Voucher Page$/,
  async () => {
    await b2cVoucherPage.open();
    // await b2cVoucherPage.Page();
  }
);
