var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');


var options = {}
gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(gp_deploy(options));
});

gulp.task('default',['deploy'] ,function () {
    console.log('deploy to gh-pages success! ');
});