import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class TaskVerificationPage extends Page {
    
    //define selectors using getter methods
    get titlePage () { return $('#headerVerifikasiMisi') }
    get tabNonTsm () { return $('#mat-tab-label-0-0') }
    get tabTsm () { return $('#mat-tab-label-0-1') }
    get searchInput () { return $('input[placeholder="Cari"]') }
    get dropdownFilterStatusNonTsm () { return $('#mat-select-4') }    //Non Tsm
    get btnFilterNonTsm () { return $('div.button-row.pb-16 > button') } 
    get selectFilterStatusTsm () { return $('#mat-select-4') }     //Tsm
    get btnFilterTsm () { return $('div.button-row.pb-16 > button') } 

    //Table
    get datatableBody () { return $('#datatable-body') }
    get checkboxData () { return $('#mat-checkbox-6') }    //masih pakai default id Angular
    get dataRow () { return $$('[class="datatable-row-wrapper ng-star-inserted"]') }
    get dataCell () { return $('#data-cell') }
    get name () { return $$('#name') }
    get status1row () { return $('datatable-body-cell:nth-child(11) > div > span') }
    get btnView () { return $('#btn-lihat') }
    get btnUpdate () { return $('#btn-ubah') }
    get btnExport () { return $('#btn-export') }

    get btnVerifNonTsm () { return $('#btn-verified') }
    get btnVerifTsm () { return $$('#btn-verfied') }
    get popUpVerif () { return $('[role="dialog"] > ng-component > div > div > div > div.info') }
    get setujuVerif () { return $('#mat-radio-2') }
    get tdkSetujuVerif () { return $('#mat-radio-3') }
    get simpanSetujuVerif () { return $('button.primary-green.mat-raised-button') } 

    get btnReleaseTsm () { return $('#btn-release') }
    get popUpRelease () { return $('[role="dialog"] > ng-component > div > div > div > div.info') }
    get simpanRelease () { return $('button.primary-green.mat-raised-button') }
    get batalRelease () { return $('button.ml-20.mat-raised-button.mat-primary') }


    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.titlePage).isDisplayed()),
            {
                timeout: 40000,
                timeoutMsg: 'expected title page not displayed after 40s'
            }
        )
        await expect(this.titlePage).toBeDisplayed()
        await expect(this.titlePage).toHaveText('Verifikasi Misi')
        await expect(browser).toHaveUrlContaining('dte/taskverification')
        // await expect(this.btnCreate).toBeClickable()
        // await dataCell.waitForDisplayed({ timeout: 5000 });
        await browser.pause(6000)

    }
    
    async viewTabNonTsm () {
        await this.tabNonTsm.click()
    }

    async viewTabTsm () {
        await this.tabTsm.click()
        await browser.pause(5000)
    }

    async searchTaskVerif (taskVerifName) {
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.click()
        await this.searchInput.setValue(taskVerifName)
        // await browser.pause(5000)
    }

    async searchResult (taskVerifName) {
        await browser.waitUntil(
            async () => (await this.dataRow[1].isExisting()),
            {
                timeout: 50000,
                timeoutMsg: 'expected search result not displayed after 50s'
            }
        )
        await browser.pause(5000)
        await this.name[0].waitForExist();
        await expect(this.name[0]).toBeExisting();
        await expect(this.name[0]).toHaveText(taskVerifName);
    }

    async reset () {
        await this.btnCreate.click()
    }

    async loadData () {
        await this.btnCreate.click()
    }

    async detailTemplate () {  //click name
        await this.dataRow.$$('option')[25].click();
    }

    async verifTsm () {
        // await browser.pause(3000)
        await console.log('Status sebelum Verifikasi: ' +await this.status1row.getText())
        await expect(this.status1row).toHaveText('Belum Dikirim')
        await expect(this.btnVerifTsm[0]).toBeExisting()
        await this.btnVerifTsm[0].click();

        // await expect(this.status[10]).toHaveText('Belum Dikirim')
        /*const btnVerif = await this.btnVerifTsm[1].isClickable()
        if (btnVerif == true) {
            // console.log('Verif: ')

            const taskName = await this.name
            taskName.forEach(element => {
                const tasks = element.getText()
                    // console.log(tasks)       //output: Promise { <pending> }
                    tasks.then(function(result) {
                    console.log(result)         //output: Task list
                })
            })
            // await this.btnVerifTsm.click()
            element.click()
        }*/

        // const taskName = await this.name
        // taskName.forEach(element => {
        //     const tasks = element.getText()
        //         // console.log(tasks)       //output: Promise { <pending> }
        //     tasks.then(function(result) {
        //         console.log('Task Verif List: ')
        //         console.log(result)         //output: Task Verif list
        //         const btnVerif = this.btnVerifTsm[1].isClickable()
        //         if (btnVerif == true) {
        //             element.click()
        //         } else {
        //             console.log('Task tidak ada yang bisa diverifikasi')
        //         }
        //     })
        // })
    }

    async verifDialog (){
        await this.popUpVerif.waitForExist();
        await expect(this.popUpVerif).toHaveTextContaining('Apakah anda yakin untuk verifikasi')
    }

    async saveVerif () {
        await this.setujuVerif.click()
        await this.simpanSetujuVerif.click()
    }

    async releaseTsm () {
        await expect(this.btnReleaseTsm).toBeClickable()
        await this.btnReleaseTsm.click()
    }

    async dialogRelease (){
        await this.popUpRelease.waitForExist();
        await expect(this.popUpRelease).toHaveTextContaining('Apakah anda yakin untuk mengirim coin untuk misi ini')
    }

    async saveRelease () {
        await console.log('Status sebelum Released: ' +await this.status1row.getText())
        await this.simpanRelease.click()
    }

    async successRelease () {
        await browser.pause(7000)
        await console.log('Status setelah Released: ' +await this.status1row.getText())
        await expect(this.status1row).toHaveText('Sudah Dikirim')
        await expect(this.btnReleaseTsm).toBeDisabled()
        await browser.pause(7000)
    }
    

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('');
    }
}

export default new TaskVerificationPage();