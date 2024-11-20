const fs = require('fs');
const path = require('path');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src, { withFileTypes: true });

  for (const item of items) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function stencilCopyMapMLPlugin() {
  return {
    name: 'stencilCopyMapML',
    async buildEnd() {
      const source = path.join(__dirname,  '../../../node_modules/@maps4html/mapml/dist');
      const destination = path.join(__dirname, '../dist/gcds/gcds-map');

      try {
        console.time('Copy MapML Files');
        copyDirectory(source, destination);
        console.timeEnd('Copy MapML Files');
        console.log('Copied @maps4html/mapml to dist/gcds/gcds-map successfully.');
      } catch (error) {
        console.error('Error copying MapML files:', error);
      }
    }
  };
}

module.exports = stencilCopyMapMLPlugin;
