/// <binding AfterBuild='core, app' />
var gulp = require('gulp');
var config = require('./Tasks/dev');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task("core", function () {
    return gulp.src(config.script.core.input)
    .pipe(concat({ path: config.script.core.output }))
    .pipe(gulp.dest(config.directory));
});

gulp.task("app", function () {
    return gulp.src(config.script.app.input)
    .pipe(concat({ path: config.script.app.output }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.directory)).on('error', function (error) {
        console.log(String(error));
    });
});

gulp.task("default", ["core", "app"]);
gulp.task("watch", function () {
    gulp.watch(config.script.app.input, ["default"]);
});
