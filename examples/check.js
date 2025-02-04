const { curly } = require('../dist/ff');
const { create } = require('../dist/util/binaryBrowser');
const { Browser, impersonate } = require('../dist/impersonate/index')

async function main() {
    const binaryBrowser = create(Browser.Firefox117);
    let page = await binaryBrowser.get("https://tls.browserleaks.com/json");
    console.log(page);

    page = await curly.get("https://tls.browserleaks.com/json");
    console.log(page)

    const ffBrowser = impersonate(Browser.Firefox117);
    page = await ffBrowser.get("https://tls.browserleaks.com/json");
    console.log(page)
    
}

main();