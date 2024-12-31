const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const tar = require('tar');
const pkg = require('../package.json');

// Get the ABI version, platform, and arch
const nodeAbi = process.versions.modules;
const platform = process.platform;
const arch = process.arch;
const moduleName = pkg.binary.module_name;

// Define paths
const baseDir = path.join(__dirname, '..');
const bindingPath = path.join(baseDir, 'lib', 'binding', 'Release', `node-v${nodeAbi}-${platform}-${arch}`);
const packageName = `${moduleName}-node-v${nodeAbi}-${platform}-${arch}.tar.gz`;
const packagePath = path.join(baseDir, 'build', packageName);

// Ensure the build directory exists
if (!fs.existsSync(path.join(baseDir, 'build'))) {
    fs.mkdirSync(path.join(baseDir, 'build'));
}

// Create tarball
tar.create(
    {
        gzip: true,
        file: packagePath,
        cwd: path.dirname(bindingPath),
        portable: true,
    },
    [path.basename(bindingPath)]
).then(() => {
    console.log(`Package created: ${packagePath}`);
}).catch(err => {
    console.error('Packaging failed:', err);
    process.exit(1);
});