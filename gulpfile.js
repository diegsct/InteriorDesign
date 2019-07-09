const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');


function css() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('css'))
}


// exports.js = js;
exports.css = css;
exports.default = parallel(css);