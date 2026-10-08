// eslint-disable-next-line no-undef
const fs = require('fs');
const path = require('path');

// Copy CSS files
fs.copyFileSync('./dist/gcds/gcds.css', '../react/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../vue/gcds.css');

// ============================================================================
// COMPONENTS.JSON PATH SANITIZATION
// ============================================================================
// Removes personal directory paths from components.json for portability
// Also removes the timestamp to avoid unnecessary changes in git

const COMPONENTS_FILE = '../specs/components.json';
const WORKSPACE_ROOT = path.posix.resolve(__dirname, '../..');

// Paths that need sanitization
const PATH_FIELDS = ['filePath', 'dirPath', 'readmePath', 'usagesDir'];

// Sanitize a single path by removing workspace root
function sanitizePath(filePath) {
  return filePath?.split(WORKSPACE_ROOT).at(-1) || filePath;
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

    delete components.timestamp;

    sanitizeComponentPaths(components.components);
    const sanitizedJsonStr = JSON.stringify(components, null, 2)
      // normalize eol for Windows
      .replaceAll('\\r', '')

    fs.writeFileSync(componentsPath, sanitizedJsonStr);

    console.log('✅ Paths sanitized and timestamp removed in components.json');
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

// ============================================================================
// CUSTOM ELEMENTS MANIFEST: FLAG REQUIRED PROPS
// ============================================================================
// The Custom Elements Manifest schema has no "required" field, so IDEs can't
// show which attributes are required. Stencil already knows (props declared
// with `!`), so prefix those descriptions with "(required)" using the
// `required` flag from components.json.

const CEM_FILE = '../specs/custom-elements.json';
const REQUIRED_PREFIX = '(required)';

function markRequiredInManifest() {
  const componentsPath = path.join(__dirname, COMPONENTS_FILE);
  const manifestPath = path.join(__dirname, CEM_FILE);

  if (!fs.existsSync(componentsPath) || !fs.existsSync(manifestPath)) {
    console.log('⚠️  components.json or custom-elements.json not found, skipping');
    return;
  }

  const { components } = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Map of tag name -> Set of required prop names (camelCase)
  const requiredByTag = new Map(
    components.map(component => [
      component.tag,
      new Set(component.props.filter(prop => prop.required).map(prop => prop.name)),
    ]),
  );

  const markRequired = item => {
    const description = item.description || '';
    if (!description.startsWith(REQUIRED_PREFIX)) {
      item.description = `${REQUIRED_PREFIX} ${description}`.trim();
    }
  };

  let count = 0;
  manifest.modules.forEach(module => {
    module.declarations?.forEach(declaration => {
      const required = requiredByTag.get(declaration.tagName);
      if (!required?.size) return;

      declaration.attributes?.forEach(attribute => {
        if (required.has(attribute.fieldName)) {
          markRequired(attribute);
          count++;
        }
      });
      declaration.members?.forEach(member => {
        if (member.kind === 'field' && required.has(member.name)) {
          markRequired(member);
        }
      });
    });
  });

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Marked ${count} required attributes in custom-elements.json`);
}

try {
  markRequiredInManifest();
} catch (error) {
  console.error('❌ Error marking required attributes:', error.message);
}
