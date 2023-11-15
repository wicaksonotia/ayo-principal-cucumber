import Page from "../page";

//sub page containing specific selectors and methods for a specific page
class b2cVoucherPage extends Page {
  //define selectors using getter methods
  get titlePage() {
    return $("#headerB2cVoucher");
  }
  get buttonTambah() {
    return $(
      "#contentHeader > div > div.middle-container > div.button-header > div > button"
    );
  }

  //a method to encapsule automation code to interact with the page
  async Page() {
    await browser.waitUntil(async () => await this.titlePage.isDisplayed(), {
      timeout: 600000,
      timeoutMsg: "expected title page not displayed after 600s",
    });
    await expect(this.titlePage).toBeDisplayed({ timeout: 600000 });
  }

  async tombolTambah() {
    await this.buttonTambah.click();
    await browser.pause(15000);
    await expect(browser).toHaveUrlContaining("b2c-voucher/create");
  }

  open() {
    return super.open("b2c-voucher");
  }
}

export default new b2cVoucherPage();
