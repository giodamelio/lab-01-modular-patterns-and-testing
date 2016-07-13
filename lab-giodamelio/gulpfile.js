const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const SRC_FILES = 'src/**/*.js';
const TEST_FILES = 'test/**/*.js';

gulp.task('lint:src', function() {
  return gulp.src(SRC_FILES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:test', function() {
  return gulp.src(TEST_FILES)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function() {
  return gulp.src(TEST_FILES, { read: false })
    .pipe(mocha({
      reporter: 'spec',
    }));
});

gulp.task('default', ['lint:src', 'lint:test', 'test']);
