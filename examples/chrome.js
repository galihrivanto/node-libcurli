const { Browser, impersonate } = require('../dist/impersonate/index')

async function main() {
    const browser = impersonate(Browser.Chrome116);
    const page = await browser.get("https://tls.browserleaks.com/json");
    console.log(page)
}

main();