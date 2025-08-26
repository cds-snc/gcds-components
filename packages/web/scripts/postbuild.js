// eslint-disable-next-line no-undef
const fs = require('fs');
const path = require('path');

// Copy CSS files
fs.copyFileSync('./dist/gcds/gcds.css', '../react/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../vue/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../react-ssr/gcds.css');

// Sanitize paths in components.json to remove personal directory information
try {
  const componentsPath = path.join(__dirname, '../specs/components.json');
  if (fs.existsSync(componentsPath)) {
    const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
    const workspaceRoot = path.resolve(__dirname, '../..');
    
    components.components.forEach(component => {
      // Handle top-level paths
      if (component.filePath) component.filePath = component.filePath.replace(workspaceRoot, '');
      if (component.dirPath) component.dirPath = component.dirPath.replace(workspaceRoot, '');
      if (component.readmePath) component.readmePath = component.readmePath.replace(workspaceRoot, '');
      if (component.usagesDir) component.usagesDir = component.usagesDir.replace(workspaceRoot, '');
      
      // Handle nested paths in complexType.references
      if (component.props) {
        component.props.forEach(prop => {
          if (prop.complexType && prop.complexType.references) {
            Object.values(prop.complexType.references).forEach(ref => {
              if (ref.path) {
                ref.path = ref.path.replace(workspaceRoot, '');
              }
            });
          }
        });
      }
    });
    
    fs.writeFileSync(componentsPath, JSON.stringify(components, null, 2));
    console.log('✅ Paths sanitized in components.json');
  }
} catch (error) {
  console.error('❌ Error sanitizing paths:', error.message);
}
