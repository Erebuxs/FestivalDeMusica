import {src, dest, watch} from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartDass from 'sass'

const sass = gulpSass(dartDass)

export function css ( done ) {
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
    done()
}

export function dev() {
    watch('src/scss/app.scss', css)
}

