/* eslint-env node */
const fs = require('fs');
const path = require('path');

// ============================================================================
// WEB-TYPES GENERATOR (JetBrains IDEs)
// ============================================================================
// JetBrains IDEs (WebStorm, IntelliJ, PhpStorm, ...) don't read the Custom
// Elements Manifest yet, so this converts specs/custom-elements.json into the
// web-types format they do read, picked up via "web-types" in package.json.
//
// Retire this script (and the "web-types" field, the "files" entry, and the
// postbuild call) once JetBrains supports the manifest natively:
// https://youtrack.jetbrains.com/issue/WEB-49361
//
// Runs after postbuild.js so "(required)" labels are already in the manifest.

const PACKAGE_FILE = '../package.json';
const MANIFEST_FILE = '../specs/custom-elements.json';
const OUTPUT_FILE = '../specs/web-types.json';

const REQUIRED_PREFIX = '(required)';

// '"email" | "number"' -> ['email', 'number'] (only for pure string-literal unions)
function getEnumValues(typeText) {
  if (!typeText) return [];
  const parts = typeText.split('|').map(part => part.trim());
  const literals = parts.filter(part => /^(['"]).*\1$/.test(part));
  if (
    !literals.length ||
    literals.length !== parts.filter(p => p !== 'undefined').length
  ) {
    return [];
  }
  return literals.map(part => part.slice(1, -1));
}

function toAttribute(attribute, member) {
  const typeText = attribute.type?.text;
  const description = attribute.description || '';
  const enumValues = getEnumValues(typeText);
  const isBoolean = typeText === 'boolean';
  const isRequired = description.startsWith(REQUIRED_PREFIX);

  const result = {
    name: attribute.name,
    description,
    required: isRequired || undefined,
    // List required attributes first in completion suggestions
    priority: isRequired ? 'highest' : undefined,
    default: attribute.default ?? member?.default,
    value: {
      type: typeText,
      // Boolean attributes can be written without a value: <gcds-input disabled>
      required: !isBoolean,
    },
  };

  if (enumValues.length) {
    result.values = enumValues.map(name => ({ name }));
  }

  return result;
}

function toElement(declaration) {
  const fields = (declaration.members || []).filter(
    member => member.kind === 'field',
  );
  const fieldsByName = new Map(fields.map(field => [field.name, field]));

  return {
    name: declaration.tagName,
    description: declaration.description,
    attributes: (declaration.attributes || []).map(attribute =>
      toAttribute(attribute, fieldsByName.get(attribute.fieldName)),
    ),
    // The default slot can't be targeted with slot="...", so only list named slots
    slots: (declaration.slots || [])
      .filter(slot => slot.name && slot.name !== 'default')
      .map(slot => ({ name: slot.name, description: slot.description })),
    js: {
      properties: fields.map(field => ({
        name: field.name,
        description: field.description,
        type: field.type?.text,
        default: field.default,
      })),
      events: (declaration.events || []).map(event => ({
        name: event.name,
        description: event.description,
        type: event.type?.text,
      })),
    },
    css: {
      parts: (declaration.cssParts || []).map(part => ({
        name: part.name,
        description: part.description,
      })),
      properties: (declaration.cssProperties || []).map(property => ({
        name: property.name,
        description: property.description,
      })),
    },
  };
}

function generateWebTypes() {
  const packagePath = path.join(__dirname, PACKAGE_FILE);
  const manifestPath = path.join(__dirname, MANIFEST_FILE);
  const outputPath = path.join(__dirname, OUTPUT_FILE);

  if (!fs.existsSync(manifestPath)) {
    console.log('⚠️  custom-elements.json not found, skipping web-types');
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const elements = manifest.modules
    .flatMap(module => module.declarations || [])
    .filter(declaration => declaration.tagName)
    .map(toElement)
    .sort((a, b) => a.name.localeCompare(b.name));

  const webTypes = {
    '$schema':
      'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    'name': pkg.name,
    'version': pkg.version,
    'description-markup': 'markdown',
    'js-types-syntax': 'typescript',
    'contributions': {
      html: { elements },
    },
  };

  // JSON.stringify drops undefined values, which keeps the output small
  fs.writeFileSync(outputPath, JSON.stringify(webTypes, null, 2) + '\n');
  console.log(`✅ Generated web-types.json for ${elements.length} elements`);
}

try {
  generateWebTypes();
} catch (error) {
  console.error('❌ Error generating web-types.json:', error.message);
}
