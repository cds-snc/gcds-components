// eslint-disable-next-line no-undef
const fs = require('fs');

fs.copyFileSync('./dist/gcds/gcds.css', '../react/gcds.css');
fs.copyFileSync('./dist/gcds/gcds.css', '../react-ssr/gcds.css');
