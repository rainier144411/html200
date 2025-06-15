//source - https://www.youtube.com/watch?v=CFdzwGb5pBg
import gulp from 'gulp';


// styles
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(sass);
import autoprefixer from 'gulp-autoprefixer';
import cssMinify from 'gulp-clean-css';

function styles() {
    return gulp.src('./frontend/src/styles/**/*.scss')
        .pipe(scss())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cssMinify())
        .pipe(gulp.dest('./frontend/dist/styles'))
}

// scripts
import jsMinify from 'gulp-terser';

function scripts() {
    return gulp.src('./frontend/src/scripts/**/*.js')
        .pipe(jsMinify())
        .pipe(gulp.dest('./frontend/dist/scripts/'));
}

// watchTask
function watchTask() {
    gulp.watch(
        ['./frontend/src/styles/**/*.scss', './frontend/src/scripts/**/*.js'],
        gulp.series(styles, scripts)
    );
}

export default gulp.series(styles, scripts, watchTask);

//source - https://github.com/UWFront-End-Cert/html300-v2/blob/master/lesson02/assignment/gulpfile.js
// const {
//     src,
//     dest,
//     parallel,
//     series,
//     watch,
//     task
// } = require('gulp')
// const browserSync = require('browser-sync');
// const server = browserSync.create();
// const sass = require('gulp-sass')(require('sass'));

// // Directories to watch.
// // If watch & reload isn't working as expected, check that files you want watched can be found in these paths.
// const paths = {
//     scss: {src: './frontend/src/styles/**/*.scss', dest: './css'},
//     data: {src: '.frontend/data/', dest: './data/'},
//     js: {src: './frontend/src/scripts/**/*.js', dest: '.'},
//     html: {src: './frontend/*.html', dest: '.'}
// };


// // Compile SCSS into CSS
// task('sass', function() {
//     return src(paths.scss.src)
//         .pipe(sass({
//             includePaths: [paths.scss],
//             outputStyle: 'compressed'
//         }).on('error', function(err) {
//             console.log(err.message);
//             this.emit('end');
//         }))
//         .pipe(dest(paths.scss.dest))
//         .pipe(browserSync.stream());
// });

// // BrowserSync configuration
// task('browserSync', function() {
//     browserSync.init({
//         server: './frontend/',
//         notify: false
//     });
// })

// // Watch for changes in scss, html, and js files, reloading page in browser when change is found.
// task('watchFiles', function() {
//     watch(paths.scss.src, parallel('sass')).on('change', browserSync.reload);
//     watch(paths.html.src).on('change', browserSync.reload);
//     watch(paths.js.src).on('change', browserSync.reload);
// });

// const watching = parallel('watchFiles', 'browserSync')

// exports.default = watching
