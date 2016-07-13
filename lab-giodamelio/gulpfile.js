const gulp = require('gulp');
const eslint = require('gulp-eslint');

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

gulp.task('default', ['lint:src', 'lint:test']);
