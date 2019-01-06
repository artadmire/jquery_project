var gulp = require('gulp');
//编译sass插件
var sass = require('gulp-sass');
//实时刷新html页面
var connect = require('gulp-connect');
//压缩css文件
var cleanCSS = require('gulp-clean-css');
//压缩html文件
var htmlmin = require('gulp-htmlmin');
//压缩js文件插件
var uglify = require('gulp-uglify');
//es6转es5
var babel = require('gulp-babel');
var babelCore = require("babel-core");
//编译sass的任务
gulp.task("sass", function () {
    return gulp.src("src/**/css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/"))
})
//Es6转换es5
gulp.task("babel", function () {
    return gulp.src("src/**/js/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist/"))
})
//刷新页面
gulp.task('html',function(){
     return gulp.src('src/**/index.html')
     .pipe(connect.reload())})
//定义livereload任务,实时刷新页面不可缺少
gulp.task('connect', function () {
    connect.server({
        livereload: true
     })
})
// 压缩html文件
gulp.task("htmlmin",function () {
    return gulp.src("src/**/index.html")
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest("dist/"))
})
// 监听任务，文件夹发生变化 立即执行任务
gulp.task("watch", function () {
    gulp.watch("src/**/css/*.scss", ["sass"])
    gulp.watch("src/**/js/*js",["babel"])
    gulp.watch('src/**/index.html', ['html',"htmlmin"]);  //监听html目录下所有文件
})
gulp.task('dev', ['watch',"html","connect"])