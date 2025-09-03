#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Constants
const MERMAID_CONFIG = {
  layout: 'elk',
  look: 'classic',
  theme: 'base'
};

const OUTPUT_DIR = '../specs';
const DIAGRAM_FILE = 'gcds-components-diagram.md';
const PREVIEW_FILE = 'gcds-components-diagram-preview.md';

// Function to convert TypeScript type to a more readable format
function formatType(type) {
  if (type.includes('|')) {
    return 'string'; // Union types become string for simplicity
  }
  if (type === 'boolean') return 'boolean';
  if (type === 'number') return 'number';
  if (type === 'string') return 'string';
  if (type.includes('[]')) return 'array';
  return 'string'; // Default to string for complex types
}

// Function to generate class definitions for all components
function generateClassDefinitions(components) {
  const lines = [];
  
  // Generate classes for all components in the order they appear
  components.forEach(component => {
    const className = component.tag.replace(/-/g, '_');
    
    lines.push(`    class ${className} {`);
    
    if (component.props && component.props.length > 0) {
      component.props.forEach(prop => {
        const propType = formatType(prop.type);
        lines.push(`\t    ${propType} ${prop.name}`);
      });
    }
    
    lines.push('    }');
  });
  
  return lines.join('\n');
}

// Function to generate relationships based on actual dependencies
function generateRelationships(components) {
  const lines = [];
  
  // Generate relationships based on actual component dependencies
  components.forEach(component => {
    if (component.dependencies && component.dependencies.length > 0) {
      const fromClass = component.tag.replace(/-/g, '_');
      
      component.dependencies.forEach(dep => {
        const toClass = dep.replace(/-/g, '_');
        lines.push(`    ${fromClass} --> ${toClass} : uses`);
      });
    }
  });
  
  return lines.join('\n');
}

// Generate the complete MermaidJS diagram
function generateMermaidDiagram(components) {
  const header = `---
config:
  layout: ${MERMAID_CONFIG.layout}
  look: ${MERMAID_CONFIG.look}
  theme: ${MERMAID_CONFIG.theme}
---
classDiagram
direction BT
`;
  
  const classDefinitions = generateClassDefinitions(components);
  const relationships = generateRelationships(components);
  
  return `${header}${classDefinitions}\n${relationships}`;
}

// Generate GitHub-friendly markdown with Mermaid diagram
function generateGitHubMarkdown(diagram) {
  return `# GCDS Components Diagram

This diagram shows the component structure and relationships for the GCDS (Government of Canada Design System) components.
A dedicated Mermaid file ([gcds-components-diagram.md](./gcds-components-diagram.md)) is available for optimal and interactive visualization of the component relationships. For convenience, a quick GitHub-friendly preview is provided below.

## Component Class Diagram

\`\`\`mermaid
${diagram}
\`\`\`

## How to Use

This diagram is automatically generated from the build output. To regenerate it:

\`\`\`bash
npm run docs:diagram
\`\`\`

## Components Included

The diagram includes all GCDS components with their properties and dependencies as defined in the source code.
`;
}

// Main execution
try {
  // Read the components.json file
  const componentsPath = path.join(__dirname, OUTPUT_DIR, 'components.json');
  const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
  
  // Generate and output the diagram
  const diagram = generateMermaidDiagram(components.components);
  const githubMarkdown = generateGitHubMarkdown(diagram);

  // Save the original MermaidJS diagram
  const outputPath = path.join(__dirname, OUTPUT_DIR, DIAGRAM_FILE);
  fs.writeFileSync(outputPath, diagram);
  console.log(`\nDiagram saved to: ${outputPath}`);

  // Save the GitHub-friendly preview markdown
  const previewPath = path.join(__dirname, OUTPUT_DIR, PREVIEW_FILE);
  fs.writeFileSync(previewPath, githubMarkdown);
  console.log(`\nGitHub preview saved to: ${previewPath}`);

} catch (error) {
  console.error('❌ Error generating diagram:', error.message);
  process.exit(1);
}