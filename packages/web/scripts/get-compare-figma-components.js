#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ============================================================================
// FIGMA COMPONENTS FETCHER
// Fetches component definitions from Figma and compares with code specs
// ============================================================================

// Configuration
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || '<your_token_here>';
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || 'mh2maMG2NBtk41k1O1UGHV'; // Your GCDS Figma file key
const FIGMA_OUTPUT_FILE = '../specs/figma-components.json';
const FIGMA_CODE_COMPARISON_FILE = '../specs/figma-comparison-report.md';
const CODE_SPECS_FILE = '../specs/components.json';

// If you're on Node < 18, uncomment these 2 lines:
// const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

// Figma API
const FIGMA_API_BASE = 'https://api.figma.com/v1';

// ------------------------ helpers ------------------------
function normalizeName(str = '') {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/^gcds-/, '') // drop code prefix
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]/g, '');
}

function normalizePropName(str = '') {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '');
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function displayFigmaName(c) {
  return c?.figmaName || c?.rawName || c?.name || c?.node?.name || '(unnamed)';
}

function displayCodeTag(c) {
  return c?.tag || c?.rawTag || c?.name || '(unlabeled)';
}

// ---- value/type helpers ----
const unique = arr => [
  ...new Set((arr || []).filter(v => v !== undefined && v !== null)),
];

function normalizeSimpleType(t) {
  const s = String(t || '').toLowerCase();
  if (s.includes('bool')) return 'boolean';
  if (s.includes('text') || s === 'string') return 'string';
  if (s.includes('number') || s === 'float' || s === 'int') return 'number';
  if (s.includes('instance')) return 'instance';
  if (s.includes('variant')) return 'variant';
  // union type like '"a" | "b"'
  if (s.includes('|') && (s.includes('"') || s.includes("'"))) return 'string';
  return s || 'other';
}

// Parse `"a" | "b" | "c"` into ["a","b","c"]
function parseQuotedUnionValues(typeStr) {
  const s = String(typeStr || '');
  const rx = /(["'])(.*?)\1/g;
  const out = [];
  let m;
  while ((m = rx.exec(s)) !== null) out.push(m[2]);
  return unique(out);
}

function firstChildVariantValue(setDocNode, groupName) {
  const child = (setDocNode.children || []).find(n => n.type === 'COMPONENT');
  const v = child?.variantProperties?.[groupName];
  return v ?? null;
}

// ---------- markdown & value formatting helpers ----------
function mdEscape(s) {
  const str = String(s ?? '');
  // Escape table-breaking chars & HTML-ish
  return str
    .replace(/\|/g, '\\|')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\r?\n/g, '<br>');
}

function cell(val, { code = false } = {}) {
  if (val === undefined || val === null || val === '') return '—';
  const s = mdEscape(val);
  return code ? `\`${s}\`` : s;
}

function arrCell(arr, { code = false } = {}) {
  const a = (arr || []).filter(v => v !== undefined && v !== null && v !== '');
  if (!a.length) return '—';
  return a.map(v => cell(v, { code })).join(', ');
}

function stripOuterQuotes(s) {
  const t = String(s);
  const q = t[0];
  if ((q === '"' || q === "'") && t.length >= 2 && t[t.length - 1] === q) {
    return t.slice(1, -1);
  }
  return t;
}

// Pull a reasonable display value from objects (enum items, etc.)
function pickDisplay(v) {
  if (v == null) return '';
  if (typeof v !== 'object') return v;
  if ('value' in v && v.value != null) return v.value; // { value: "h3" }
  if ('name' in v && v.name != null) return v.name; // { name: "Desktop" }
  if ('label' in v && v.label != null) return v.label; // { label: "Foo" }
  // Ignore bare objects like { type: "string" } that don't represent a concrete value
  return '';
}

// ------------------------ API fetchers ------------------------
async function fetchFigmaComponentSets() {
  if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
    throw new Error(
      'Missing FIGMA_ACCESS_TOKEN or FIGMA_FILE_KEY environment variables',
    );
  }
  const url = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/component_sets`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      'Accept': 'application/json',
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(
      `Figma API error: ${res.status} ${res.statusText}\n${body}`,
    );
  }
  return res.json(); // -> { meta: { component_sets: [ {name, node_id, ...}, ... ] } }
}

async function fetchFigmaNodesByIds(fileKey, nodeIds = []) {
  const results = {};
  const idsChunks = chunk(nodeIds, 40); // keep URLs short
  for (const ids of idsChunks) {
    const url = `${FIGMA_API_BASE}/files/${fileKey}/nodes?ids=${encodeURIComponent(ids.join(','))}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        'Accept': 'application/json',
      },
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(
        `Figma API error (nodes): ${res.status} ${res.statusText}\n${body}`,
      );
    }
    const json = await res.json();
    Object.assign(results, json.nodes || {}); // { [nodeId]: { document, ... } }
  }
  return results;
}

// ------------------------ Figma parsing ------------------------
function aggregatePropertiesFromSetNode(setDocNode) {
  const variantGroups = setDocNode.variantGroupProperties || {};
  const propMap = new Map(); // normName -> { name, type, defaults:Set, values:Set, raw: [] }

  const mergeDefs = defs => {
    if (!defs) return;
    for (const [propName, def] of Object.entries(defs)) {
      const norm = normalizePropName(propName);
      const type = def.type || def.propertyType || 'OTHER';
      const entry = propMap.get(norm) || {
        name: propName,
        type,
        defaults: new Set(),
        values: new Set(),
        raw: [],
      };

      if (def.defaultValue != null)
        entry.defaults.add(String(def.defaultValue));

      const variantOpts = Array.isArray(def.variantOptions)
        ? def.variantOptions
        : [];
      const preferred = Array.isArray(def.preferredValues)
        ? def.preferredValues
        : [];
      variantOpts.forEach(v => entry.values.add(String(v)));
      preferred.forEach(v => entry.values.add(String(v)));

      entry.raw.push({ propName, ...def });
      propMap.set(norm, entry);
    }
  };

  // 1) Set-level component properties (when “Apply to all variants” is used)
  mergeDefs(
    setDocNode.componentPropertyDefinitions || setDocNode.componentProperties,
  );

  // 2) Child component definitions
  const children = Array.isArray(setDocNode.children)
    ? setDocNode.children
    : [];
  for (const child of children) {
    if (child.type !== 'COMPONENT') continue;
    mergeDefs(child.componentPropertyDefinitions || child.componentProperties);
  }

  // 3) Turn each Variant Group into a synthetic “variant” property
  for (const [groupName, info] of Object.entries(variantGroups)) {
    const norm = normalizePropName(groupName);
    const existing = propMap.get(norm);
    const values = Array.isArray(info?.values) ? info.values : [];
    const inferredDefault =
      firstChildVariantValue(setDocNode, groupName) ?? values[0] ?? null;

    if (!existing) {
      const entry = {
        name: groupName,
        type: 'VARIANT',
        defaults: new Set(),
        values: new Set(),
        raw: [],
      };
      if (inferredDefault != null) entry.defaults.add(String(inferredDefault));
      values.forEach(v => entry.values.add(String(v)));
      propMap.set(norm, entry);
    } else {
      // If there’s also a component property of same name, prefer variant semantics
      existing.type = 'VARIANT';
      if (inferredDefault != null)
        existing.defaults.add(String(inferredDefault));
      values.forEach(v => existing.values.add(String(v)));
      propMap.set(norm, existing);
    }
  }

  // to plain arrays
  const properties = [...propMap.values()].map(e => ({
    name: e.name,
    type: normalizeSimpleType(e.type),
    defaults: [...e.defaults].map(stripOuterQuotes),
    values: [...e.values].map(stripOuterQuotes),
    raw: e.raw,
  }));

  return { variantGroups, properties };
}

function buildFigmaEntries(componentSetsMeta = [], nodesById = {}) {
  const entries = [];
  for (const meta of componentSetsMeta) {
    const nodeId = meta.node_id || meta.nodeId || meta.nodeID;
    const wrap = nodeId ? nodesById[nodeId] : null;
    const docNode = wrap && wrap.document;

    if (!docNode || docNode.type !== 'COMPONENT_SET') {
      entries.push({
        rawName: meta.name,
        figmaName: meta.name,
        norm: normalizeName(meta.name),
        nodeId: nodeId || null,
        variantGroups: {},
        properties: [],
      });
      continue;
    }

    const { variantGroups, properties } =
      aggregatePropertiesFromSetNode(docNode);
    entries.push({
      rawName: meta.name,
      figmaName: meta.name,
      norm: normalizeName(meta.name),
      nodeId,
      variantGroups,
      properties,
    });
  }
  return entries; // [{ figmaName, norm, properties:[{name,type,...}], variantGroups: {...} }]
}

// ------------------------ comparison ------------------------

function figmaPropToStd(p) {
  const type = normalizeSimpleType(p.type);
  let defaults = unique((p.defaults || []).map(String).filter(Boolean)).map(
    stripOuterQuotes,
  );
  let values = unique(
    (p.values || []).map(pickDisplay).map(String).filter(Boolean),
  ).map(stripOuterQuotes);
  return { name: p.name, type, defaults, values };
}

// Standardize a Code prop (from your components.json)
function codePropToStd(cp) {
  const type = normalizeSimpleType(cp.type || cp.propType || cp.kind);

  let defaults = [cp.default, cp.defaultValue]
    .filter(v => v !== undefined && v !== null)
    .map(String)
    .map(stripOuterQuotes);

  // accept arrays of primitives or objects with {value} / {name}
  let values = (cp.values || cp.enum || cp.options || [])
    .map(pickDisplay)
    .map(String)
    .filter(Boolean)
    .map(stripOuterQuotes);

  // if not provided explicitly, parse from a quoted union type
  if (!values.length && typeof cp.type === 'string' && cp.type.includes('|')) {
    values = parseQuotedUnionValues(cp.type).map(stripOuterQuotes);
  }

  return { name: cp.name, type, defaults, values };
}

function setEqual(a = [], b = []) {
  const A = new Set((a || []).map(String));
  const B = new Set((b || []).map(String));
  if (A.size !== B.size) return false;
  for (const v of A) if (!B.has(v)) return false;
  return true;
}

function typesEquivalent(figmaType, codeType, valuesMatch) {
  if ((figmaType || '') === (codeType || '')) return true;
  // Treat Figma "variant" ≈ Code "string" when allowed values match
  if (figmaType === 'variant' && codeType === 'string' && valuesMatch)
    return true;
  return false;
}

function comparePropertiesDetailed(figmaPropsArray, codeProps) {
  // Build indexes by normalized name
  const fIndex = new Map();
  for (const fp of figmaPropsArray || []) {
    const norm = normalizePropName(fp.name);
    fIndex.set(norm, figmaPropToStd(fp));
  }

  const cIndex = new Map();
  for (const cp of codeProps || []) {
    const norm = normalizePropName(cp.name);
    // keep the first; if duplicates exist, you could merge
    if (!cIndex.has(norm)) cIndex.set(norm, codePropToStd(cp));
  }

  const allKeys = unique([...fIndex.keys(), ...cIndex.keys()]);
  const rows = [];

  for (const k of allKeys) {
    const f = fIndex.get(k);
    const c = cIndex.get(k);

    if (!f && c) {
      rows.push({
        name: c.name,
        figmaType: '—',
        codeType: c.type,
        typeMatch: false,
        figmaDefaults: [],
        codeDefaults: c.defaults,
        defaultMatch: false,
        figmaValues: [],
        codeValues: c.values,
        valuesMatch: false,
        status: 'code-only',
      });
      continue;
    }
    if (f && !c) {
      rows.push({
        name: f.name,
        figmaType: f.type,
        codeType: '—',
        typeMatch: false,
        figmaDefaults: f.defaults,
        codeDefaults: [],
        defaultMatch: false,
        figmaValues: f.values,
        codeValues: [],
        valuesMatch: false,
        status: 'figma-only',
      });
      continue;
    }

    // both exist
    const valuesMatch = setEqual(f.values, c.values);
    const typeMatch = typesEquivalent(f.type, c.type, valuesMatch);
    const defaultMatch = setEqual(f.defaults, c.defaults);

    rows.push({
      name: f.name, // prefer Figma casing
      figmaType: f.type,
      codeType: c.type,
      typeMatch,
      figmaDefaults: f.defaults,
      codeDefaults: c.defaults,
      defaultMatch,
      figmaValues: f.values,
      codeValues: c.values,
      valuesMatch,
      status: typeMatch && defaultMatch && valuesMatch ? 'match' : 'diff',
    });
  }

  return {
    figmaCount: (figmaPropsArray || []).length,
    codeCount: (codeProps || []).length,
    rows,
    // convenience summaries
    matching: rows.filter(r => r.status === 'match').map(r => r.name),
    figmaOnly: rows.filter(r => r.status === 'figma-only').map(r => r.name),
    codeOnly: rows.filter(r => r.status === 'code-only').map(r => r.name),
    typeMismatches: rows
      .filter(r => r.status === 'diff' && !r.typeMatch)
      .map(r => r.name),
    defaultMismatches: rows
      .filter(r => r.status === 'diff' && !r.defaultMatch)
      .map(r => r.name),
    valuesMismatches: rows
      .filter(r => r.status === 'diff' && !r.valuesMatch)
      .map(r => r.name),
  };
}

function summarizeVariantGroups(vg = {}) {
  return Object.entries(vg).map(([group, info]) => ({
    group,
    values: Array.isArray(info?.values) ? info.values : [],
  }));
}

function compareComponents(figmaEntries, codeComponents) {
  const comparison = {
    figmaCount: figmaEntries.length,
    codeCount: codeComponents.length,
    matches: [],
    figmaOnly: [],
    codeOnly: [],
    differences: [],
  };

  const codeEntries = codeComponents.map(c => ({
    rawTag: c.tag,
    norm: normalizeName(c.tag),
    node: c,
  }));

  const codeByNorm = new Map();
  for (const e of codeEntries) {
    if (!codeByNorm.has(e.norm)) codeByNorm.set(e.norm, []);
    codeByNorm.get(e.norm).push(e);
  }

  const matchedCode = new Set();

  for (const f of figmaEntries) {
    const candidates = codeByNorm.get(f.norm);
    if (candidates && candidates.length) {
      const c = candidates[0];
      matchedCode.add(c);

      const propComparison = comparePropertiesDetailed(
        f.properties || [],
        c.node.props,
      );
      const variantSummary = summarizeVariantGroups(f.variantGroups);

      comparison.matches.push({
        figmaName: f.figmaName,
        codeTag: c.rawTag,
        figma: f,
        code: c.node,
        propertyComparison: propComparison,
        figmaVariants: variantSummary,
      });
    } else {
      comparison.figmaOnly.push(f);
    }
  }

  for (const c of codeEntries) {
    if (!matchedCode.has(c)) comparison.codeOnly.push(c.node);
  }

  return comparison;
}

// ------------------------ report ------------------------
function pill(ok) {
  return ok ? '✅' : '❌';
}

function generateReport(comparison) {
  const header = `# Figma vs Code Components Comparison

Generated on: ${new Date().toISOString()}

## Summary
- **Figma Components**: ${comparison.figmaCount}
- **Code Components**: ${comparison.codeCount}
- **Matching Components**: ${comparison.matches.length}
- **Figma Only**: ${comparison.figmaOnly.length}
- **Code Only**: ${comparison.codeOnly.length}
`;

  const figmaOnlyList =
    comparison.figmaOnly
      .map(comp => `- ${displayFigmaName(comp)}`)
      .join('\n') || '—';
  const codeOnlyList =
    comparison.codeOnly.map(comp => `- ${displayCodeTag(comp)}`).join('\n') ||
    '—';

  const perComponentTables = comparison.matches
    .map(m => {
      const rows = (m.propertyComparison.rows || [])
        .sort((a, b) => {
          const order = v =>
            v === 'figma-only'
              ? 0
              : v === 'code-only'
                ? 1
                : v === 'diff'
                  ? 2
                  : 3;
          const oA = order(a.status),
            oB = order(b.status);
          return oA - oB || a.name.localeCompare(b.name);
        })
        .map(r => {
          return (
            `| ${cell(r.name, { code: true })} ` +
            `| ${cell(r.figmaType, { code: true })} ` +
            `| ${cell(r.codeType, { code: true })} ` +
            `| ${pill(r.typeMatch)} ` +
            `| ${arrCell(r.figmaDefaults, { code: true })} ` +
            `| ${arrCell(r.codeDefaults, { code: true })} ` +
            `| ${pill(r.defaultMatch)} ` +
            `| ${arrCell(r.figmaValues, { code: true })} ` +
            `| ${arrCell(r.codeValues, { code: true })} ` +
            `| ${pill(r.valuesMatch)} |`
          );
        })
        .join('\n');

      const variants =
        (m.figmaVariants || [])
          .map(
            v =>
              `- **${mdEscape(v.group)}**: ${arrCell(v.values, { code: true })}`,
          )
          .join('\n') || '—';

      return `
## ${displayFigmaName(m.figma)} ↔ ${displayCodeTag(m.code)}

**Variant groups (Figma):**
${variants}

**Properties**

| Property | Figma Type | Code Type | Type ✓ | Figma Default(s) | Code Default(s) | Default ✓ | Figma Allowed Values | Code Allowed Values | Values ✓ |
|---|---|:---:|:---:|---|---|:---:|---|---|:---:|
${rows || '| — | — | — | — | — | — | — | — | — | — |'}

`;
    })
    .join('\n');

  return `${header}

## Figma Only Components
${figmaOnlyList}

## Code Only Components
${codeOnlyList}

${perComponentTables}
`;
}

// ------------------------ main ------------------------
async function main() {
  try {
    console.log('🚀 Fetching Figma component sets...');
    const figmaData = await fetchFigmaComponentSets();
    const figmaSets = figmaData.meta?.component_sets || [];
    console.log(`✅ Found ${figmaSets.length} Figma component sets`);

    const nodeIds = figmaSets.map(s => s.node_id).filter(Boolean);
    console.log(`   Fetching ${nodeIds.length} nodes...`);
    const nodesById = await fetchFigmaNodesByIds(FIGMA_FILE_KEY, nodeIds);

    console.log('   Building entries with properties/variants resolved from nodes...');
    // Build entries with properties/variants resolved from nodes
    const figmaEntries = buildFigmaEntries(figmaSets, nodesById);

    // Read code specs
    const codeSpecsPath = path.join(__dirname, CODE_SPECS_FILE);
    if (!fs.existsSync(codeSpecsPath)) {
      throw new Error('Code components.json not found. Run build first.');
    }
    const codeSpecs = JSON.parse(fs.readFileSync(codeSpecsPath, 'utf8'));
    console.log(`✅ Found ${codeSpecs.components.length} code components`);

    // Compare
    const comparison = compareComponents(figmaEntries, codeSpecs.components);

    // Ensure output dir exists
    fs.mkdirSync(path.join(__dirname, '../specs'), { recursive: true });

    // Save enriched Figma dump
    const outputPath = path.join(__dirname, FIGMA_OUTPUT_FILE);
    fs.writeFileSync(
      outputPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          figmaFile: FIGMA_FILE_KEY,
          componentSets: figmaEntries,
        },
        null,
        2,
      ),
    );

    // Save report
    const reportPath = path.join(
      __dirname,
      FIGMA_CODE_COMPARISON_FILE
    );
    const report = generateReport(comparison);
    fs.writeFileSync(reportPath, report);

    console.log(`✅ Figma component sets saved to: ${FIGMA_OUTPUT_FILE}`);
    console.log(`✅ Comparison report saved to: figma-comparison-report.md`);
    console.log('\n📊 Comparison Summary:');
    console.log(`   Matching: ${comparison.matches.length}`);
    console.log(`   Figma Only: ${comparison.figmaOnly.length}`);
    console.log(`   Code Only: ${comparison.codeOnly.length}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  fetchFigmaComponentSets,
  fetchFigmaNodesByIds,
  buildFigmaEntries,
  compareComponents,
  comparePropertiesDetailed,
  generateReport,
};
