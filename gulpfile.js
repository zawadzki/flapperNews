var gulp = require('gulp');

var del = require('del');
var wiredep = require('wiredep');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');

var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');
var cssnano = require('cssnano');
var lost = require('lost');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', function() {
    return gulp.src('app/styles/*.scss')
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.postcss([
            lost(),
            rucksack(),
            cssnano({
                autoprefixer: false,
                discardComments: { removeAll: true }
            }),
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ]))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('move', function(){
    return gulp.src('./js/**/*.*', { cwd: 'app/' })
        .pipe($.if('*.js', $.uglify()))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function() {
    return gulp.src('./fonts/*.*', { cwd: 'app/' })
        .pipe(gulp.dest('.tmp/fonts'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', ['styles'], function() {
    return gulp.src('app/*.html')
        .pipe($.if('*.js', $.uglify()))
        .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
        .pipe(gulp.dest('dist'));
});

gulp.task('wiredep', function() {
    gulp.src('app/styles/*.scss')
    .pipe(wiredep({
        ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

gulp.src('app/*.html')
    .pipe(wiredep({
        ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('serve', ['styles', 'fonts'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['dist']
            }
        });
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('build', ['html', 'fonts', 'move'], function() {
    return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});