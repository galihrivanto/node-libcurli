const fs = require('fs');
const path = require('path');

function renameToMjs(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      renameToMjs(filePath);
    } else if (file.endsWith('.js')) {
      fs.renameSync(filePath, filePath.replace('.js', '.mjs'));
    }
  });
}

renameToMjs('./dist');