#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the components.json file
const componentsPath = path.join(__dirname, '../specs/components.json');
const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));

// Create a map of components for easy lookup
const componentMap = new Map();
components.components.forEach(component => {
  componentMap.set(component.tag, component);
});



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
function generateClassDefinitions() {
  let output = '';
  
  // Generate classes for all components in the order they appear
  components.components.forEach(component => {
    const className = component.tag.replace(/-/g, '_');
    
    output += `    class ${className} {\n`;
    
    if (component.props && component.props.length > 0) {
      component.props.forEach(prop => {
        const propType = formatType(prop.type);
        output += `\t    ${propType} ${prop.name}\n`;
      });
    }
    
    output += `    }\n`;
  });
  
  return output;
}

// Function to generate relationships based on actual dependencies
function generateRelationships() {
  let output = '';
  
  // Generate relationships based on actual component dependencies
  components.components.forEach(component => {
    if (component.dependencies && component.dependencies.length > 0) {
      const fromClass = component.tag.replace(/-/g, '_');
      
      component.dependencies.forEach(dep => {
        const toClass = dep.replace(/-/g, '_');
        output += `    ${fromClass} --> ${toClass} : uses\n`;
      });
    }
  });
  
  return output;
}

// Generate the complete MermaidJS diagram
function generateMermaidDiagram() {
  const header = `---
config:
  layout: elk
  look: classic
  theme: base
---
classDiagram
direction BT
`;
  
  const classDefinitions = generateClassDefinitions();
  const relationships = generateRelationships();
  
  return header + classDefinitions + '\n' + relationships;
}

// Generate GitHub-friendly markdown with Mermaid diagram
function generateGitHubMarkdown() {
  const diagram = generateMermaidDiagram();
  
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

// Generate and output the diagram
const diagram = generateMermaidDiagram();
const githubMarkdown = generateGitHubMarkdown();

// Save the original MermaidJS diagram
const outputPath = path.join(__dirname, '../specs/gcds-components-diagram.md');
fs.writeFileSync(outputPath, diagram);
console.log(`\Diagram saved to: ${outputPath}`);

// Save the GitHub-friendly preview markdown
const previewPath = path.join(__dirname, '../specs/gcds-components-diagram-preview.md');
fs.writeFileSync(previewPath, githubMarkdown);
console.log(`\nGitHub preview saved to: ${previewPath}`);