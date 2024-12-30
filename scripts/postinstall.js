const fs = require('fs');
const path = require('path');
const process = require('process');

function findNodeLibcurl() {
  // Get current platform info
  const platform = process.platform;
  const arch = process.arch;
  const nodeVersion = process.versions.modules;

  const possiblePaths = [
    // Standard node-pre-gyp path format
    path.join(__dirname, '..', 'lib', 'binding', 'Release', `node-v${nodeVersion}-${platform}-${arch}`),
    path.join(__dirname, '..', 'lib', 'binding', 'Release'),
  ];

  const fileName = platform === 'win32' ? 'node_libcurl.node' : 'node_libcurl.node';

  // Try to find the binary
  for (const basePath of possiblePaths) {
    const fullPath = path.join(basePath, fileName);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  throw new Error(
    `Could not find node_libcurl.node binary. Searched in:\n${possiblePaths.join('\n')}`
  );
}

try {
  const sourcePath = findNodeLibcurl();
  const destPath = path.join(__dirname, '../lib/binding/node_libcurl.node');
  
  // Create the destination directory if it doesn't exist
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy the file to the new location
  fs.copyFileSync(sourcePath, destPath);
  
  console.log(`Successfully copied node_libcurl.node from ${sourcePath} to ${destPath}`);
} catch (error) {
  console.error('Error during postinstall:', error);
  process.exit(1);
}