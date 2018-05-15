const gulp = require('gulp');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();
const reload = sync.reload;

gulp.task('default', ['sync'], () => {
  gulp.watch('src/assets/scss/*.scss', ['sass']).on('change', () => {reload()});
  gulp.watch('src/*.html', ['html']).on('change', () => {reload()});
});

gulp.task('sass', () => {
  gulp.src('src/assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('html', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sync', () => {
  sync.init({
      server: {
          baseDir: "./dist"
      }
  });
});