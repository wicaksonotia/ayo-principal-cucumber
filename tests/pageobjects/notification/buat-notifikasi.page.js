import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class notifikasiPage extends Page {

    //define selectors using getter methods
    //menu buat notifikasi
    get titlePage () { return $('#headerNotifikasi')}
    get titleTable () {return $('[class="pl-8"]')}

    //button ke halaman buat notifikasi
    get buttonBuat () { return $('#contentHeader > div > div.middle-container > div.button-header > div > button:nth-child(2)')}

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

async Page1 () {
    await browser.waitUntil(
        async () => (await (this.titleTable).isDisplayed()),
        {
            timeout: 600000,
            timeoutMsg: 'expected title page not displayed after 600s'
        }
    )
    await expect(this.titleTable).toBeDisplayed({timeout:600000})
    //await browser.pause(10000);
}

async PageNotifikasi () {
    await expect(browser).toHaveUrlContaining('notifications/push-notification')
    await browser.pause(10000)
    await expect(this.titlePage).toBeDisplayed({timeout:600000})
    await this.titleTable.scrollIntoView()
}

async PageNotif () {
    await this.titleTable.scrollIntoView()
}

async tombolBuat () {
    await this.buttonBuat.click()
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining('notifications/push-notification/create')
    }

open () {
    return super.open('notifications/push-notification');
    }
}

export default new notifikasiPage();