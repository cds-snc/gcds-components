'use strict';

const { src, dest } = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function compile() {
  return src('src/styles/global.scss').pipe(sass.sync()).pipe(dest('src/styles/'));
}

module.exports = {
  compile,
};
