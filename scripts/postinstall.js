// copy module to lib/binding
const fs = require('fs');
const path = require('path');

// Get the ABI version, platform, and arch
const nodeAbi = process.versions.modules;
const platform = process.platform;
const arch = process.arch;

const releaseDir = path.join(__dirname, '..', 'lib', 'binding', 'Release', `node-v${nodeAbi}-${platform}-${arch}`);
const targetDir = path.join(__dirname, '..', 'lib', 'binding');

// copy content from release dir to binding dir
function copyRecursive(source, target) {
    // Create target directory if it doesn't exist
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }

    const files = fs.readdirSync(source);
    for (const file of files) {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        
        const stats = fs.statSync(sourcePath);
        if (stats.isDirectory()) {
            copyRecursive(sourcePath, targetPath);
        } else {
            fs.copyFileSync(sourcePath, targetPath);
        }
    }
}

// Copy content from release dir to binding dir
copyRecursive(releaseDir, targetDir);

// create placeholder file to avoid re-downloading artifact
fs.writeFileSync(path.join(targetDir, 'Release', `node-v${nodeAbi}-${platform}-${arch}`, 'libcurl.node'), '# intentional empty file');

console.log('Copying content from release dir to binding dir');