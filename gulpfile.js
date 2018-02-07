const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('src/**/*.js')
    .pipe(babel({
      "presets": [
        "env",
        "stage-2"
      ],
      "plugins": [
        "transform-react-jsx",
        "transform-runtime"
      ]
    }))
    .pipe(gulp.dest('dist'))
);