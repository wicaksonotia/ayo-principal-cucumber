/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        // return browser.url(`https://hms.dev.src.id/${path}`)
        return browser.url(`https://hms.qa.src.id/${path}`)
        // return browser.url(`https://hms.prod.src.id/${path}`)
    }

    openOffice (path) {
        return browser.url(`https://www.office.com/`)
    }
}
