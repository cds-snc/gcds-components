const pkg = require('../package.json');

// ============================================================================
// VERSION BANNER TEXT
// ============================================================================
// Shared by stencil.config.ts (the `preamble`, which Stencil adds to every JS
// output) and scripts/postbuild.js (which adds it to dist/gcds/gcds.css,
// since Stencil doesn't put the preamble on the global stylesheet).
//
// Returns the banner lines without comment markers; each caller wraps them:
//
//   /*!
//    * @gcds-core/components v1.7.0 (2026-11-12)
//    * https://design-system.canada.ca/
//    * (c) Canadian Digital Service – Service numérique canadien
//    * @license MIT
//    */

// Same copyright holder as LICENSE (and the gcds-tokens/gcds-utility repos)
const COPYRIGHT_HOLDER =
  'Canadian Digital Service - Service numérique canadien';

// Escape "*/" so a value can never close the comment early and leak into
// the file as code.
const safe = value => String(value).replaceAll('*/', '*\\/');

// Build date. SOURCE_DATE_EPOCH (the reproducible-builds standard) wins if
// set, so CI can pin it; otherwise today, which on publish is release day.
function getBuildDate() {
  const epoch = Number(process.env.SOURCE_DATE_EPOCH);
  const date = epoch ? new Date(epoch * 1000) : new Date();
  return date.toISOString().slice(0, 10);
}

function getBannerLines() {
  return [
    `${safe(pkg.name)} v${safe(pkg.version)} (${getBuildDate()})`,
    safe(pkg.homepage),
    `(c) ${safe(COPYRIGHT_HOLDER)}`,
    `@license ${safe(pkg.license)}`,
  ];
}

module.exports = { getBannerLines };
