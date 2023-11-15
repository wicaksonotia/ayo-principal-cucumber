import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class PrincipalNotesforRetailerPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerNotesUntukRetailer') }
    get btnCreate () { return $('button.mat-raised-button') }
    get searchInput () { return $('[placeholder="Cari"]') }

    //Table
    get datatableBody () { return $('[class="visible"]') }
    get dataRow () { return $$('[class="datatable-row-center datatable-row-group ng-star-inserted"]') }
    get dataCellNama () { return $$('#cellName') }
    get dataCellStatus () { return $$('#cellStatus') }
    get btnEdit () { return $$('[class="secondary-text mat-icon material-icons"]') }
    get btnDelete () { return $$('#btnDelete') }
    get popUptitle () { return $('#headerPopupConfirmImport') }
    get popUpDesc () { return $('[class="mat-dialog-content ng-star-inserted"]') }
    get btnConfirmDelete () { return $('#btn-confirm-import') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.searchInput).isExisting()),
            {
                timeout: 90000,
                timeoutMsg: 'expected search input not existing after 90s'
            }
        )
    }

    async pageList () {
        // await expect(this.titlePage).toHaveText('Daftar Notes untuk Retailer')
        await expect(browser).toHaveUrlContaining('notesretailer/notes-retailer-list')
    }

    async createNotesPrincipal () {
        await browser.pause(8000)
        await this.btnCreate.click()
    }

    async searchNotesPrincipal (namaNotes) {
        await browser.pause(3000)
        await expect(this.searchInput).toBeDisplayed()
        await this.searchInput.setValue(namaNotes)
    }

    async searchResult (namaNotes) {
        await browser.pause(3000)
        await expect(this.dataCellNama[0]).toBeExisting();
        await expect(this.dataCellNama[0]).toHaveText(namaNotes);
    }

    async expectNewNotesPrincipal (nama, status) {
        await expect(this.dataCellNama[0]).toHaveText(nama)
        await expect(this.dataCellStatus[0]).toHaveText(status)
        await this.dataCellNama[0].click()
        await browser.pause(5000)
    }

    async expectNewNotesPrincipalEdited (nama, status) {
        await expect(this.dataCellNama[0]).toHaveText(nama)
        await expect(this.dataCellStatus[0]).toHaveText(status)
        await browser.pause(5000)
    }

    async editNotesPrincipal () {
        await this.btnEdit[0].click();
    }

    async deleteNotesPrincipal () {
        await this.btnDelete[0].click();
        await expect(this.btnConfirmDelete).toBeExisting()
        await this.popUptitle.getText()
        await this.popUpDesc.getText()
        await this.btnConfirmDelete.click()
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('notesretailer/notes-retailer-list');
    }
}

export default new PrincipalNotesforRetailerPage();
