const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

const paths = {
    scss: "./src/**/*.scss",
    css: "./css/**/all.css",
    cssDest: "./css",
    dist: "./dist"
}

gulp.task("build", function () {
    return gulp.src(paths.scss)
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task("minify", function () {
    return gulp.src(paths.css)
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 2 versions", "safari >= 5", "ie 8", "ie 9"],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(rename("GovJE.min.css"))
        // .pipe(gulp.dest(paths.dist))
});

gulp.task("default", function () {
    gulp.watch(paths.scss, gulp.series("build"));
    gulp.watch(paths.css, gulp.series("minify"));
});