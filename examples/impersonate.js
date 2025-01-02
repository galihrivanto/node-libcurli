const { impersonate, Browser } = require('../dist/impersonate');

async function main() {
    const ffCurly = impersonate(Browser.Firefox117);

    const result = await ffCurly('https://www.google.com');
    console.log(result);
}

main();