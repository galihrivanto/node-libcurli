const { curly: ffCurly } = require('../dist/ff/index.js');
const { curly: chromeCurly } = require('../dist/chrome/index.js');

async function main() {
    const result = await ffCurly('https://www.google.com');
    console.log(result);

    const chromeResult = await chromeCurly('https://www.google.com');
    console.log(chromeResult);
}

main();