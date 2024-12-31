const { curly } = require('../dist/index.js');

async function main() {
    const result = await curly('https://www.google.com');
    console.log(result);
}

main();