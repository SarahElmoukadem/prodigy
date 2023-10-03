const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Define the source and destination directories.
const srcDir = './src/scss/**/*.scss';
const distDir = './dist/css/';

// Compile SCSS to CSS, minify, and move to the dist folder.
function compileSass() {
  return src(srcDir)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(distDir));
}

// Watch for changes in SCSS files.
function watchSass() {
  watch(srcDir, compileSass);
}

// Define the default task.
exports.default = series(compileSass, watchSass);
