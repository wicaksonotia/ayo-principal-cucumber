import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class spandukOnlinePage extends Page {

    //define selectors using getter methods
    get titlePage () {return $('#headerSpandukOnline')}
    get buttonBuat () {return $('#contentHeader > div > div.middle-container > div.button-header > button:nth-child(2)')}
    get titleTable1 () {return $('#wrapper > div > fuse-content > app-banner-index > div > div:nth-child(2) > div > div > h2')}
    get Table () {return $$('[class="pl-8"]')}
 
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

async tabelBannerOnline () {
    await this.titleTable1.scrollIntoView()
}

async tombolBuat () {
    await this.buttonBuat.click()
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining('advertisement/banner/create')
}

async lihatTokoTerdekat (){
    await this.Table[3].scrollIntoView()
}

async lihatInfoSRC (){
    await this.Table[4].scrollIntoView()
}

async lihatFlyingButton (){
    await this.Table[5].scrollIntoView()
}
}

export default new spandukOnlinePage ();