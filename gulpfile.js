var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var notify = require('gulp-notify');
var wait = require('gulp-wait');
var svgSprite = require('gulp-svg-sprite');
var template = require('gulp-template-html');
var purgecss = require('gulp-purgecss');

const AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  '> 1%',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4',
  'bb >= 10'
];

// Basic Gulp task syntax
gulp.task('hello', function () {
  console.log('Hello Zell!');
})

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function () {
  browserSync({
    port: 3000,
    directory: true,
    server: {
      baseDir: '.'
    }
  })
})

gulp.task('sass', function () {
  return gulp.src('Template1/css/scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(wait(500))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('Template1/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Remove css js
gulp.task('purgecss', () => {
  return gulp
    .src(['Template1/css/style.css', 'Template1/css/home.css'])
    .pipe(
      purgecss({
        content: ['Template1/./*.html', 'Template1/./js/*.js'],
        whitelistPatterns: [/^mfp/],
        // extractors: [{
        //   extractor: class TailwindExtractor {
        //     static extract(content) {
        //       return content.match(/[A-z0-9-:\/]+/g) || [];
        //     }
        //   },
        //   extensions: ['css', 'html']
        // }]
      })
    )
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('Template1/css'))
})

// SVG Combine
gulp.task('svg-combine', function () {
  return gulp.src('Template1/images/symbols/elements/*.svg')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(svgmin({
      plugins: [{
          removeDoctype: false
        },
        {
          removeAttrs: {
            attrs: 'fill'
          }
        }, {
          removeComments: false
        }, {
          cleanupNumericValues: {
            floatPrecision: 2
          }
        }, {
          convertColors: {
            names2hex: false,
            rgb2hex: false
          }
        }
      ]
    }))
    .pipe(svgSprite({
      mode: {
        symbol: { // symbol mode to build the SVG
          render: {
            css: false, // CSS output option for icon sizing
            scss: false // SCSS output option for icon sizing
          },
          dest: './Template1/images/icons', // destination folder
          dimensions: "-icon",
          prefix: 'svg-', // BEM-style prefix if styles rendered
          sprite: 'icon.svg', //generated sprite name
          example: true // Build a sample page, please!
        }
      },
    }))
    .pipe(gulp.dest('.'))
});

// SVG font
gulp.task('svg-iconfont', function () {
  return gulp.src('Template1/images/symbols/elements/*.svg')
    .pipe(iconfont({
      fontName: 'iconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      appendCodepoints: true,
      appendUnicode: false,
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('Template1/images/symbols/iconfont-src/iconfont.css')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName,
          fontDate: new Date().getTime()
        }))
        .pipe(gulp.dest('Template1/css/fonts/iconfont'));

      gulp.src('Template1/images/symbols/iconfont-src/index.html')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          fontName: options.fontName
        }))
        .pipe(gulp.dest('Template1/css/fonts/iconfont'));
    })
    .pipe(gulp.dest('Template1/css/fonts/iconfont'));
});
gulp.task('svg', ['svg-combine', 'svg-iconfont'], function (done) {
  browserSync.reload();
  done();
});

// Watchers
gulp.task('watch', function () {
  //gulp.watch('Template1/css/scss/*.scss', ['sass']);
  gulp.watch('Template1/css/scss/*.scss', function (event) {
    runSequence('sass', 'purgecss');
  });
  gulp.watch('Template1/images/symbols/elements/**/*.svg', ['svg']);
  gulp.watch('Template1/*.html', browserSync.reload);
  gulp.watch('Template1/js/**/*.js', browserSync.reload);
  gulp.watch('Template1/images/**/*', browserSync.reload);
  //gulp.watch('Template1/app/**/*.html', ['build-template']);
  gulp.watch('Template1/app/**/*.html', function (event) {
    runSequence('build-template', 'purgecss');
  });
})


// Build template
gulp.task("build-template", function () {
  return gulp.src("./Template1/app/page/*.html")
    .pipe(template("./Template1/app/template/main.html"))
    .pipe(gulp.dest("./Template1"));
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'build-template', 'purgecss', 'browserSync'], 'watch',
    callback
  )
})