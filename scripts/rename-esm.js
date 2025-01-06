const fs = require('fs');
const path = require('path');

function renameToMjs(srcDir, destDir) {
  const files = fs.readdirSync(srcDir);
  
  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      renameToMjs(filePath, path.join(destDir, file));
    } else if (file.endsWith('.js')) {
      // create directory if not exists
      fs.mkdirSync(path.join(destDir, path.dirname(file)), { recursive: true });
      fs.renameSync(filePath, path.join(destDir, file.replace('.js', '.mjs')));
    }
  });

  fs.rmdirSync(srcDir, { recursive: true });
}

renameToMjs('./dist-temp', './dist');