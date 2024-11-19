const fs = require('fs');
const path = require('path');

// Define paths
const source = path.join(__dirname, '../../../node_modules/@maps4html/mapml/dist');
const destination = path.join(__dirname, '../dist/gcds/gcds-map');

// Function to copy files
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy and rename
try {
  copyDirectory(source, destination);
  console.log('Copied @maps4html/mapml to dist/gcds/gcds-map successfully.');
} catch (error) {
  console.error('Error copying files:', error);
}
