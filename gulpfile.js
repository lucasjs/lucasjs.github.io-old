var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

gulp.task('stylus', function () {
    return gulp.src('./src/styles/*.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./build/css'))
});

gulp.task('babel', () =>
gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('./build/js'))
);


gulp.task('imagemin', () =>
    gulp.src('.img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
);

gulp.task('watch', function () {
    gulp.watch(['./src/styles/*.styl'], ['stylus'])
    gulp.watch(['./src/js/*.js'], ['babel'])
    gulp.watch(['./src/img/*.*'], ['imagemin'])
});

gulp.task('connect', function () {
    connect.server({
        root: './src/views',
        livereload: true,
        port: 8000
    });
});

gulp.task('build', ['stylus', 'babel', 'imagemin']);
gulp.task('server', ['connect','watch']);