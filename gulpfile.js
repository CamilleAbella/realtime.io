const gulp = require("gulp")
const clean = require("gulp-clean")
const tsc = require("gulp-typescript")
const cp = require("child_process")

function start(cb) {
  cp.exec("nodemon dist/app", cb)
}

function cleaning() {
  return gulp
    .src("dist", { read: false, allowEmpty: true })
    .pipe(clean({ force: true }))
}

function buildTS() {
  return gulp
    .src("src/**/*.ts")
    .pipe(
      tsc({
        target: "es2020",
        lib: ["es2020"],
        module: "commonjs",
        declaration: false,
        strict: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
      })
    )
    .pipe(gulp.dest("dist"))
}

const watching = gulp.series(buildTS, (cb) => {
  start(cb)
  gulp.watch("src/**/*.ts", { delay: 500 }, gulp.series(cleaning, build))
})

const build = gulp.series(cleaning, buildTS)
const watch = gulp.series(build, watching)

exports.start = gulp.series(build, start)
exports.build = build
exports.watch = watch
exports.default = watch
