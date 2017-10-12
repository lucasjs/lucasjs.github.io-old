var gulp = require('gulp');
var stylint = require('gulp-stylint');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
var connect = require('gulp-connect');

gulp.task('html', function () {
	gulp.src('./src/views/*.html')
		.pipe(connect.reload())
});

gulp.task('stylint', function () {
	return gulp.src('./src/styles/*.styl')
		.pipe(stylint())
		.pipe(stylint.reporter());
});

gulp.task('stylus', function () {
	return gulp.src('./src/styles/*.styl')
		.pipe(stylus({
			compress: true
		}))
		.pipe(gulp.dest('./build/css'))
		.pipe(connect.reload())
});

gulp.task('eslint', () =>
	gulp.src('./src/js/*.js')
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(connect.reload())
);

gulp.task('babel', () =>
	gulp.src('./src/js/*.js')
	.pipe(babel({
		presets: ['env']
	}))
	.pipe(gulp.dest('./build/js'))
	.pipe(connect.reload())
);

gulp.task('imagemin', () =>
	gulp.src('./src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./build/img'))
	.pipe(connect.reload())
);

gulp.task('watch', function () {
	gulp.watch('./src/views/*.html', ['html']);
	gulp.watch(['./src/styles/*.styl'], ['stylint', 'stylus'])
	gulp.watch(['./src/js/*.js'], ['eslint'])	
	gulp.watch(['./src/img/*.*'], ['imagemin'])	
});

gulp.task('connect', function () {
	connect.server({
		root: './src/views',
		livereload: true,
		port: 8000
	});
});

gulp.task('build', ['html', 'stylint', 'stylus', 'imagemin', 'eslint', 'babel']);
gulp.task('server', ['connect', 'watch']);