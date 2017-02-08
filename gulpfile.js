var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('concatCss', function() {
    gulp.src(['style.css', 'style2.css'])
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(['style.css', 'style2.css'], ['concatCss']);
});

gulp.task('default', ['watch'], function() {})