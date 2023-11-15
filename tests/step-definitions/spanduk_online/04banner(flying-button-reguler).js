import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from '@wdio/allure-reporter';
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import spandukOnlinePage from "../../pageobjects/spanduk_online/spanduk-online.page";
import flyingButtonReguler from "../../pageobjects/spanduk_online/04flying-button-reguler.page";

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[PRINCIPAL] 04. Flying Button Reguler');
allureReporter.addFeature('Create Flying Button Reguler');

Given (/^I am on the Spanduk Online page$/, async() => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.spandukOnline()
    });
    
    When (/^I click button Buat$/, async() => {
    await spandukOnlinePage.tombolBuat()
    });
    
    Then (/^System should be leading to Buat Spanduk Online page$/, async() => {
    await flyingButtonReguler.Page()
    });

    Given (/^I am on the Buat Spanduk Online page$/, async() => {
    await flyingButtonReguler.formPage()
    });

    When (/^I input Nama Spanduk (.*)$/, async(nama_spanduk) => {
    await flyingButtonReguler.namaSpanduk(nama_spanduk)
    });

    Then (/^System should be input Nama Spanduk$/, async() => {
    await flyingButtonReguler.Page()  
    });
    
    When (/^I select date in Sampai$/, async() => {
    await flyingButtonReguler.dateSampai()
    });
    
    Then (/^System should be select date$/, async() => {
    await flyingButtonReguler.Page()    
    });

    When (/^I insert Banner in TEMPLATE F$/, async() => {
    await flyingButtonReguler.insertGambarBanner()
    });
    
    Then (/^System should be insert Banner$/, async() => {
    await flyingButtonReguler.Page()    
    });

    When (/^I click Customer in Grup Pengguna$/, async() => {
    await flyingButtonReguler.grupPenggunaCustomer()
    });
    
    Then (/^System should be click Customer$/, async() => {
    await flyingButtonReguler.Page()   
    });
    
    When (/^I click Flying Button in Tipe Spanduk$/, async() => {
    await flyingButtonReguler.tipeSpandukFlyingButton()
    });
                
    Then (/^System should be click Flying Button$/, async() => {
    await flyingButtonReguler.Page()   
    });

    When (/^I input Nama Halaman (.*)$/, async(nama_halaman) => {
    await flyingButtonReguler.namaHalaman(nama_halaman)
    });
    
    Then (/^System should be input Nama Halaman$/, async() => {
    await flyingButtonReguler.Page()   
    });
    
    When (/^I input Isi Halaman (.*)$/, async(isi_halaman) => {
    await flyingButtonReguler.isiHalaman(isi_halaman)
    });
        
    Then (/^System should be input Isi Halaman$/, async() => {
    await flyingButtonReguler.Page()   
    });
    
    When (/^I click Button Simpan$/, async() => {
    await flyingButtonReguler.buttonSimpan()
    });
            
    Then (/^System show popup Confirmation$/, async() => { 
    await flyingButtonReguler.Page()   
    });
    
    When (/^I click Button Ya$/, async() => {
    await flyingButtonReguler.buttonYa()
    });
                
    Then (/^System should be submit data and landing to Spanduk Online Page$/, async() => {
    await spandukOnlinePage.Page()  
    await spandukOnlinePage.lihatFlyingButton() 
    });
    