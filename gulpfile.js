const sass = require('gulp-sass')(require('sass'));

const { watch, series } = require('gulp');
const { src, dest } = require('gulp');


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