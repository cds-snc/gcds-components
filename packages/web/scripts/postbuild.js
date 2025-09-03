// eslint-disable-next-line no-undef
const fs = require('fs');
const path = require('path');

// Copy CSS files
fs.copyFileSync('./dist/gcds/gcds.css', '../react/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../vue/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../react-ssr/gcds.css');

// ============================================================================
// COMPONENTS.JSON PATH SANITIZATION
// ============================================================================
// Removes personal directory paths from components.json for portability

const COMPONENTS_FILE = '../specs/components.json';
const WORKSPACE_ROOT = path.resolve(__dirname, '../..');

// Paths that need sanitization
const PATH_FIELDS = ['filePath', 'dirPath', 'readmePath', 'usagesDir'];

// Sanitize a single path by removing workspace root
function sanitizePath(filePath) {
  return filePath?.replace(WORKSPACE_ROOT, '') || filePath;
}

// Sanitize all component paths
function sanitizeComponentPaths(components) {
  components.forEach(component => {
    // Sanitize top-level paths
    PATH_FIELDS.forEach(field => {
      component[field] = sanitizePath(component[field]);
    });
    
    // Sanitize nested paths in complexType.references
    component.props?.forEach(prop => {
      prop.complexType?.references && 
        Object.values(prop.complexType.references).forEach(ref => {
          ref.path = sanitizePath(ref.path);
        });
    });
  });
}

// Main sanitization function
function sanitizeComponentsFile() {
  const componentsPath = path.join(__dirname, COMPONENTS_FILE);
  
  if (!fs.existsSync(componentsPath)) {
    console.log('⚠️  components.json not found, skipping sanitization');
    return;
  }

  try {
    const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
    
    if (!components.components?.length) {
      throw new Error('Invalid components.json structure');
    }
    
    sanitizeComponentPaths(components.components);
    fs.writeFileSync(componentsPath, JSON.stringify(components, null, 2));
    
    console.log('✅ Paths sanitized in components.json');
  } catch (error) {
    throw new Error(`Sanitization failed: ${error.message}`);
  }
}

// Sanitize paths in components.json to remove personal directory information
try {
  sanitizeComponentsFile();
} catch (error) {
  console.error('❌ Error sanitizing paths:', error.message);
}
