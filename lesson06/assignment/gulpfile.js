const {
    src,
    dest,
    parallel,
    series,
    watch,
    task
} = require('gulp')
<<<<<<< HEAD
const sass = require('gulp-sass')(require('sass'))
const autoprefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const browsersync = require('browser-sync')
=======
const browserSync = require('browser-sync');
const server = browserSync.create();
const sass = require('gulp-sass')(require('sass'));
>>>>>>> 6fc08ce4d37b8c367192cd99223952955146b1b7

// Directories to watch.
// If watch & reload isn't working as expected, check that files you want watched can be found in these paths.
const paths = {
    scss: {src: './css/*.scss', dest: './css'},
    data: {src: './data/', dest: './data/'},
    js: {src: './*.js', dest: '.'},
    html: {src: './*.html', dest: '.'}
};


// Compile SCSS into CSS
task('sass', function() {
    return src(paths.scss.src)
        .pipe(sass({
            includePaths: [paths.scss],
            outputStyle: 'compressed'
        }).on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        }))
        .pipe(dest(paths.scss.dest))
        .pipe(browserSync.stream());
});

// BrowserSync configuration
task('browserSync', function() {
    browserSync.init({
        server: './',
        notify: false
    });
})

// Watch for changes in scss, html, and js files, reloading page in browser when change is found.
task('watchFiles', function() {
    watch(paths.scss.src, parallel('sass')).on('change', browserSync.reload);
    watch(paths.html.src).on('change', browserSync.reload);
    watch(paths.js.src).on('change', browserSync.reload);
});

const watching = parallel('watchFiles', 'browserSync')

exports.default = watching