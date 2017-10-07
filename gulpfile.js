var gulp = require('gulp');
var stylus = require('gulp-stylus');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');

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
    .pipe(gulp.dest('dist'))
);

gulp.task('default', () =>
gulp.src('.img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
);

gulp.task('watch', function () {
    gulp.watch(['./src/styles/*.styl'], ['stylus'])
    gulp.watch(['./src/js/*.js'], ['babel'])
});

gulp.task('webserver', function () {
    gulp.src('./src/views')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('build', ['stylus','imagemin','babel']);
gulp.task('server', ['webserver', 'watch']);