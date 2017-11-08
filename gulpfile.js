const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const babel       = require('gulp-babel');

function showError(error) {
  console.log(error.toString());

  this.emit('end');
}

// Compile Sass
gulp.task('sass', function() {
  return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .on('error', showError)
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Copy HTML
gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Babel
gulp.task('babel', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel())
    .on('error', showError)
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass', 'babel'], function() {
  browserSync.init({
    server: './dist'
  });

  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/js/*.js'], ['babel']);
  gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

// Watch JS

gulp.task('default', ['serve']);
