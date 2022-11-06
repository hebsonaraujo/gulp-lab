// 'use strict';

// const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// function buildStyles() {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// };

//correto
/*const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function () {
  gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./scss/index.scss', ['sass']);
});*/

const { watch, series } = require('gulp');
const { src, dest } = require('gulp');

console.log('#####',src,dest)

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildStyle(cb) {
  // body omitted
  return src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public/css'));
  
  cb();
}
exports.buildStyle = buildStyle;

function createComponent() {
  const componentName = process.argv.slice(4).pop();
  
  console.log('@@@@@@@@',componentName)
  return src('./components/default/*')
  .pipe(dest(`./components/${componentName}/`))
    // .pipe(dest(`./components/${componentName}/${componentName}.js`))
    // .pipe(dest(`./components/${componentName}/index.html`));
}
exports.createComponent = createComponent

exports.default = function() {  
  watch('./sass/index.scss', series(buildStyle));  
}