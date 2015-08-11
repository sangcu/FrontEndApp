/// <binding BeforeBuild='default, npm, bower' ProjectOpened='watch, npm, bower' />
var gulp = require('gulp');
var config = require('./Tasks/dev');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task("jscore", function () {
    return gulp.src(config.script.core.input)
    .pipe(concat({ path: config.script.core.output }))
    .pipe(gulp.dest(config.script.directory));
});

gulp.task("jsapp", function () {
    return gulp.src(config.script.app.input)
    .pipe(concat({ path: config.script.app.output }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.script.directory)).on('error', function (error) {
        console.log(String(error));
    });
});
gulp.task("csscore", function () {
    return gulp.src(config.style.core.input)
    .pipe(concat({ path: config.style.core.output }))
    .pipe(gulp.dest(config.style.directory));
});

gulp.task("cssapp", function () {
    return gulp.src(config.style.app.input)
    .pipe(concat({ path: config.style.app.output }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.style.directory)).on('error', function (error) {
        console.log(String(error));
    });
});

gulp.task("js", ["jscore", "jsapp"]);
gulp.task("css", ["csscore", "cssapp"]);
gulp.task("default", ["js", "css"]);
gulp.task("watch", function () {
    gulp.watch(config.script.app.input, ["js"]);
    gulp.watch(config.style.app.input, ["css"]);
});
