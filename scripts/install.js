const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Get browser from env or default to 'ff'
const browser = process.env.npm_config_browser || 'ff';

// Read package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

// Replace {browser} placeholder with actual browser value
const originalBinary = { ...packageJson.binary };
packageJson.binary.module_path = packageJson.binary.module_path.replace('{browser}', browser);
packageJson.binary.package_name = packageJson.binary.package_name.replace('{browser}', browser);

// Write temporary package.json with resolved browser
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

try {
    // Try to install pre-built binary first
    console.log('Attempting to install pre-built binary...');
    const installResult = spawnSync('node-pre-gyp', ['install'], {
        stdio: 'inherit',
        shell: true
    });

    // If install fails, fallback to build
    if (installResult.status !== 0) {
        console.log('Pre-built binary not available, falling back to build...');
        const buildResult = spawnSync('node-pre-gyp', ['rebuild'], {
            stdio: 'inherit',
            shell: true
        });

        if (buildResult.status !== 0) {
            throw new Error('Failed to build');
        }
    }
} finally {
    // Restore original package.json
    packageJson.binary = originalBinary;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}