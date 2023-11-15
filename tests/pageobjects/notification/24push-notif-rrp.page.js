import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class createNotifikasiPushRrp extends Page {

    //define selectors using getter methods
     get titlePage () {return $('#headerNotifikasi')}
     get formPage () {return $('#wrapper > div > fuse-content > app-notification-create > div > div.content.p-24 > div > form > div:nth-child(1) > h2')}
     get inputTextBuatNotifikasi () {return $('[placeholder="Judul Notifikasi"]')} 
     get inputTextKontenNotifikasi () {return $$('[spellcheck="true"]')} 
     get radioBtnGrupPengguna () {return $$('#mat-radio-3')}   
     get timeJamTerbit () {return $('[formcontrolname="time"]')} 
     get jam1 () {return $$('[style="transform: rotateZ(-30deg);"]')}
     get jam2 () {return $$('[style="transform: rotateZ(-60deg);"]')}
     get jam3 () {return $$ ('[style="transform: rotateZ(-90deg);"]')}
     get jam4 () {return $$ ('[style="transform: rotateZ(-120deg);"]')}
     get jam5 () {return $$ ('[style="transform: rotateZ(-150deg);"]')}
     get jam6 () {return $$ ('[style="transform: rotateZ(-180deg);"]')}
     get jam7 () {return $$ ('[style="transform: rotateZ(-210deg);"]')}
     get jam8 () {return $$ ('[style="transform: rotateZ(-240deg);"]')}
     get jam9 () {return $$('[style="transform: rotateZ(-270deg);"]')}
     get jam10 () {return $$ ('[style="transform: rotateZ(-300deg);"]')}
     get jam11 () {return $$ ('[style="transform: rotateZ(-330deg);"]')}
     get jam12 () {return $$ ('[style="transform: rotateZ(-360deg);"]')}
     get jam13 () {return $$ ('[style="transform: rotateZ(-390deg);"]')}
     get jam14 () {return $$ ('[style="transform: rotateZ(-420deg);"]')}
     get jam15 () {return $$ ('[style="transform: rotateZ(-450deg);"]')}
     get jam16 () {return $$ ('[style="transform: rotateZ(-480deg);"]')}
     get jam17 () {return $$ ('[style="transform: rotateZ(-510deg);"]')}
     get jam18 () {return $$ ('[style="transform: rotateZ(-540deg);"]')}
     get jam19 () {return $$ ('[style="transform: rotateZ(-570deg);"]')}
     get jam20 () {return $$ ('[style="transform: rotateZ(-600deg);"]')}
     get timeBtnOk () {return $$('[class="timepicker-button"][type="button"]')}
     get inputTextNamaHalaman () {return $('[placeholder="Nama Halaman"]')} 
     get inputTextIsiHalaman () {return $$('[contenteditable="true"]')}
     get radioBtnTipeKonten () {return $$('#mat-radio-11')} 
     get radioBtnBatasUmur () {return $$('#mat-radio-14')}   
     get buttonSimpan () {return $('button.confirmation-button.mat-raised-button')}
 
     //a method to encapsule automation code to interact with the page
     async Page () {
         await browser.waitUntil(
             async () => (await (this.titlePage).isDisplayed()),
             {
                 timeout: 600000,
                 timeoutMsg: 'expected title page not displayed after 600s'
             }
         )
         await expect(this.titlePage).toBeDisplayed({timeout:600000})
     }
     
     async formPage () {
         async () => {
             expect(this.formcntPage).toHaveTextContaining('Buat Notifikasi');
         }
     }

     async buatNotifikasiInput (judul_notifikasi) {
         await this.inputTextBuatNotifikasi.setValue(judul_notifikasi);
     }
 
     async kontenNotifikasi(konten_notifikasi) {
         await this.inputTextKontenNotifikasi[0].setValue(konten_notifikasi);
     }
 
     async grupPengguna () {
         await expect(this.radioBtnGrupPengguna[0]).toBeClickable()
         await this.radioBtnGrupPengguna[0].click()
     }
 
     async jamTerbit () {
         await expect(this.timeJamTerbit).toBeClickable()
         await this.timeJamTerbit.click()
         await this.jam13[0].click()
         await this.timeBtnOk[1].click()
     }
 
     async namaHalaman (nama_halaman) {
         await this.inputTextNamaHalaman.scrollIntoView();
         await this.inputTextNamaHalaman.setValue(nama_halaman);
     }
 
     async isiHalaman (isi_halaman) {
         await this.inputTextIsiHalaman[1].setValue(isi_halaman);
     }
    
     async tipeKonten () {
        await expect(this.radioBtnTipeKonten[0]).toBeClickable()
         await this.radioBtnTipeKonten[0].click()
     }
     
     async batasUmur () {
         await expect(this.radioBtnBatasUmur[0]).toBeClickable()
         await this.radioBtnBatasUmur[0].click()
     }
     

     async btnSimpan () {
         await this.buttonSimpan.waitForClickable();
         await expect(this.buttonSimpan).toBeClickable()
         await this.buttonSimpan.click()
         await browser.pause(25000);
     
     }
     open () {
         return super.open('notifications/push-notification');
     }
 
}

export default new createNotifikasiPushRrp ();