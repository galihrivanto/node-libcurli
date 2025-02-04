const { impersonate, Browser } = require('../dist/impersonate');

async function main() {
    const browser = impersonate(Browser.Firefox117);

    const page = await browser.get("https://tls.browserleaks.com/json");
    console.log(page);
}

main();