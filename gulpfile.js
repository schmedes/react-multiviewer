var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var devserver = require("webpack-dev-server");
var webpackconfig = require('./webpack.config.js');
var eslint = require('gulp-eslint');

gulp.task('default',['webpack-dev-server']);

gulp.task('build-dev',['webpack:build-dev'], function(){
  gulp.watch(['app/**/*'], ['webpack:build-dev']);
});
gulp.task('build',['webpack:build']);

gulp.task('webpack-dev-server', function(){
  new devserver(webpack(webpackconfig), {
    contentBase: './app',
    hot: true,
    inline: true,
    historyApiFallback: true
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

});
});

gulp.task('lint', function(){
  return gulp.src(['app/scripts/*.js','app/scripts/components/*.jsx'])
         .pipe(eslint())
         .pipe(eslint.format())
         .pipe(eslint.failOnError());
})
