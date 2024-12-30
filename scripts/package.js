const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get browser from npm config or default to chrome
const browser = process.env.npm_config_browser || 'chrome';

// Validate browser choice
const validBrowsers = ['chrome', 'ff'];
if (!validBrowsers.includes(browser)) {
    console.error(`Invalid browser: ${browser}. Must be one of: ${validBrowsers.join(', ')}`);
    process.exit(1);
}

console.log(`Packaging for ${browser}...`);

// First, run node-pre-gyp package
const result = spawnSync('node-pre-gyp', ['package'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, CURL_BROWSER: browser }
});

if (result.status !== 0) {
    process.exit(result.status);
}

// Then rename the generated file to include the correct browser
const stagePath = path.join('build', 'stage', 'releases', 'download', 'v1.0.0');
const files = fs.readdirSync(stagePath);
const packageFile = files.find(f => f.includes('{browser}'));

if (packageFile) {
    const oldPath = path.join(stagePath, packageFile);
    const newPath = path.join(stagePath, packageFile.replace('{browser}', browser));
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed package to: ${path.basename(newPath)}`);
}