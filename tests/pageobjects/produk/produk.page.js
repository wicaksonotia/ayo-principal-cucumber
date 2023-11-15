import Page from '../page';

//sub page containing specific selectors and methods for a specific page
class ProdukPage extends Page {

    //define selectors using getter methods
    get titlePage () { return $('#headerProduk') }
    get btnCreate () { return $('[aria-label="Produk"]') }
    get searchInput () { return $$('[placeholder="Cari"]') }

    //Table
    get datatableBody () { return $('datatable-scroller') }
    get cellNamaProduk () { return $$('[class="row-name ng-star-inserted"]') }
    get btnEdit () { return $$('[class="secondary-text mat-icon material-icons"]') }

    //a method to encapsule automation code to interact with the page
    async page () {
        await browser.waitUntil(
            async () => (await (this.searchInput[1]).isExisting()),
            {
                timeout: 400000,
                timeoutMsg: 'expected search input not existing after 400s'
            }
        )
        await expect(this.searchInput[1]).toBeExisting()
        await this.searchInput[1].waitForDisplayed();
        await expect(this.searchInput[1]).toBeDisplayed()
    }

    async pageList () {
        await expect(this.btnCreate).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('sku-management/product')
    }

    async createProduct () {
        await browser.pause(5000)
        await this.btnCreate.click()
    }

    async searchProduct (productname) {
        await browser.pause(3000)
        //await expect(this.searchInput[1]).toBeDisplayed()
        await this.searchInput[1].setValue(productname)
        await browser.pause(3000)
    }

    async searchResult (productname) {
        await expect(this.cellNamaProduk[0]).toBeExisting();
        await expect(this.cellNamaProduk[0]).toHaveText(productname);
    }

    async editProduct() {
        await this.btnEdit[0].click();
    }

    //overwrite specifc options to adapt it to page object
    open () {
        return super.open('sku-management/product');
    }
}

export default new ProdukPage();
