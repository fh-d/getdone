var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var sass = require('gulp-sass');

gulp.task('wiredep', function () {
  gulp.src('*.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/'))
});

 gulp.task('default', ['watch'], function() {
   gulp.start('sass');
 });

 gulp.task('watch', function() {
  gulp.watch('app/scss/*.scss', ['sass'])
 });