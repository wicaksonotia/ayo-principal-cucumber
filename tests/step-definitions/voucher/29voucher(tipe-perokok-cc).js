import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from "@wdio/allure-reporter";
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import b2cVoucherPage from "../../pageobjects/voucher/b2c-voucher.page";
import voucherTipePerokokCC from "../../pageobjects/voucher/29tipe-perokok-cc.page";

// use allure API for allure reporter
allureReporter.addLabel("Positive Case");
allureReporter.addTestId("[PRINCIPAL] 29. Voucher Perokok CC");
allureReporter.addFeature("Create Voucher Tipe Perokok CC");

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
  // await voucherTipePerokokCC.Page();
});

Given(/^I am on the Tambah B2C Voucher page$/, async () => {
  // await voucherTipePerokokCC.formPage();
});

When(/^I input Nama voucher (.*)$/, async (nama_voucher) => {
  await voucherTipePerokokCC.namaVoucher(nama_voucher);
});

Then(/^System should be input Nama Voucher$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I input Nama Lain Voucher(.*)$/, async (nama_lain_voucher) => {
  await voucherTipePerokokCC.namaLainVoucher(nama_lain_voucher);
});

Then(/^System should be input Nama Lain Voucher$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I input Nilai Voucher (.*)$/, async (nilai_voucher) => {
  await voucherTipePerokokCC.nilaiVoucher(nilai_voucher);
});

Then(/^System should be input Nilai Voucher$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I input Jumlah Voucher per Customer (.*)$/, async (jumlah_voucher) => {
  await voucherTipePerokokCC.jumlahVoucher(jumlah_voucher);
});

Then(/^System should be input Jumlah Voucher per Customer$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I select date in Tanggal Awal Program$/, async () => {
  await voucherTipePerokokCC.tanggalAwalProgram();
});

Then(/^System should be select date Tangal Awal Program$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I select date in Tanggal Akhir Program$/, async () => {
  // await voucherTipePerokokCC.tanggalAkhirProgram();
});

Then(/^System should be select date Tanggal Akhir Program$/, async () => {
  // await voucherTipePerokokCC.Page();
});

When(/^I select date in Tanggal Awal Pemakaian Voucher$/, async () => {
  await voucherTipePerokokCC.tanggalAwalPemakaianVoucher();
});

Then(
  /^System should be select date Tanggal Awal Pemakaian Voucher$/,
  async () => {
    // await voucherTipePerokokCC.Page()
  }
);

When(/^I select date in Tanggal Kadaluarsa Voucher$/, async () => {
  // await voucherTipePerokokCC.tanggalKadaluarsaVoucher();
});

Then(/^System should be select date Tanggal Kadaluarsa Voucher$/, async () => {
  // await voucherTipePerokokCC.Page();
});

When(/^I select Pesan Antar in Pengguna Voucher$/, async () => {
  await voucherTipePerokokCC.pesanAntar();
});

Then(/^System should be select Pesan Antar$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I select Langsung ke Toko in Pengguna Voucher$/, async () => {
  await voucherTipePerokokCC.langsungkeToko();
});

Then(/^System should be select Langsung ke Toko$/, async () => {
  // await voucherTipePerokokCC.Page()
});

When(/^I click button Simpan in Detail Voucher form Page$/, async () => {
  await voucherTipePerokokCC.tombolSimpan1();
});

Then(
  /^System should be submit data and leading to Panel Retailer Form Page$/,
  async () => {
    // await voucherTipePerokokCC.formPage2();
  }
);

When(/^I click button Simpan in Panel Retailer Form Page$/, async () => {
  await voucherTipePerokokCC.tombolSimpan2();
});

Then(/^System should be leading to Panel Customer Form Page$/, async () => {
  // await voucherTipePerokokCC.formPage3();
});

When(/^I select Perokok CC in Tipe Customer$/, async () => {
  await voucherTipePerokokCC.tipeCustomer();
});

Then(/^System should be select Perokok CC in Tipe Customer$/, async () => {
  // await voucherTipePerokokCC.formPage3();
});

When(/^I input Dari in Batasan Umur (.*)$/, async (input_dari) => {
  await voucherTipePerokokCC.batasUmurDari(input_dari);
});

Then(/^System should be input Dari$/, async () => {
  // await voucherTipePerokokCC.formPage3();
});

When(/^I input Sampai in Batasan Umur (.*)$/, async (input_sampai) => {
  await voucherTipePerokokCC.batasUmurSampai(input_sampai);
});

Then(/^System should be input Sampai$/, async () => {
  // await voucherTipePerokokCC.formPage3();
});

When(/^I select Semua in Jenis Kelamin$/, async () => {
  await voucherTipePerokokCC.jenisKelamin();
});

Then(/^System should be select Semua in Jenis Kelamin$/, async () => {
  // await voucherTipePerokokCC.formPage3();
});

When(/^I click button Simpan in Panel Customer$/, async () => {
  await voucherTipePerokokCC.tombolSimpan3();
});

Then(
  /^System should be submit data and leading to Penukaran Voucher Form Page$/,
  async () => {
    // await voucherTipePerokokCC.formPage4();
  }
);

When(/^I select Reimbursment in Penukaran Voucher Form Page$/, async () => {
  await voucherTipePerokokCC.cbReimbursment();
});

Then(/^System should be select Reimbursment$/, async () => {
  // await voucherTipePerokokCC.formpagepenukaranVoucher();
});

When(/^I select date in Tanggal Awal Penukaran Voucher$/, async () => {
  await voucherTipePerokokCC.tanggalAwalPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Awal Penukaran Voucher$/,
  async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher();
  }
);

When(/^I select date in Tanggal Berakhir Penukaran Voucher$/, async () => {
  // await voucherTipePerokokCC.tanggalBerakhirPenukaranVoucher();
});

Then(
  /^System should be select date Tanggal Berakhir Penukaran Voucher$/,
  async () => {
    // await voucherTipePerokokCC.formpagepenukaranVoucher();
  }
);

When(/^I select Voucher B2B in Opsi Penukaran Voucher$/, async () => {
  await voucherTipePerokokCC.opsiPenukaranVoucher();
});

Then(/^System should be select Voucher B2B$/, async () => {
  // await voucherTipePerokokCC.formpagepenukaranVoucher();
});

When(/^I click button Simpan in Penukaran Voucher$/, async () => {
  await voucherTipePerokokCC.tombolSimpan4();
});

Then(
  /^System should be submit data and leading to Design Voucher Form Page$/,
  async () => {
    // await voucherTipePerokokCC.formPage5();
  }
);

When(/^I insert Voucher in TEMPLATE F$/, async () => {
  await voucherTipePerokokCC.gambarVoucher();
});

Then(/^System show Voucher$/, async () => {
  // await voucherTipePerokokCC.formPage5();
});

When(/^I input Isi Halaman (.*)$/, async (isi_halaman) => {
  await voucherTipePerokokCC.isiHalaman(isi_halaman);
});

Then(/^System should be input Isi Halaman$/, async () => {
  // await voucherTipePerokokCC.formPage5();
});

When(/^I click button Simpan in Design Voucher$/, async () => {
  await voucherTipePerokokCC.tombolSimpan5();
});

Then(
  /^System should be submit data and leading to Preview Voucher Page1$/,
  async () => {
    // await voucherTipePerokokCC.formPage6();
  }
);

When(/^I click button SAVE SETTING$/, async () => {
  await voucherTipePerokokCC.tombolSaveSetting();
});

Then(/^System should be SAVE SETTING$/, async () => {
  // await voucherTipePerokokCC.formPage6();
});

When(/^I click button PROCESS TO APPROVAL$/, async () => {
  await voucherTipePerokokCC.tombolProcesstoApproval();
});

Then(/^System should be PROCESS TO APPROVAL$/, async () => {
  // await voucherTipePerokokCC.formPage6();
});

When(/^I click button APPROVE$/, async () => {
  await voucherTipePerokokCC.tombolApprove();
});

Then(/^System should be APPROVE$/, async () => {
  // await voucherTipePerokokCC.formPage6();
});

When(/^I click button Ya Lanjutkan$/, async () => {
  await voucherTipePerokokCC.tombolyaLanjutkan();
});

Then(/^System should be Ya Lanjutkan$/, async () => {
  // await voucherTipePerokokCC.formPage6();
});

When(/^I click button Publish1$/, async () => {
  await voucherTipePerokokCC.tombolPublish1();
});

Then(/^System should be Publish$/, async () => {
  // await voucherTipePerokokCC.formPage6();
});

When(/^I click button Publish2$/, async () => {
  await voucherTipePerokokCC.tombolPublish2();
});

Then(
  /^System should be Publish and leading to Preview Voucher Page$/,
  async () => {
    await b2cVoucherPage.open();
    // await b2cVoucherPage.Page();
  }
);
