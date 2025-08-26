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

// Generate and output the diagram
const diagram = generateMermaidDiagram();
// console.log(diagram);

// Save the MermaidJS diagram
const outputPath = path.join(__dirname, '../specs/gcds-components-diagram.md');
fs.writeFileSync(outputPath, diagram);
console.log(`\nDiagram saved to: ${outputPath}`);
