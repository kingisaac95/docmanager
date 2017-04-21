const gulp = require('gulp');
const mocha = require('gulp-mocha');
const env = require('gulp-env');
const supertest = require('supertest');

gulp.task('test', () => {
  env({vars: {NODE_ENV: 'test'}});
  gulp.src('./tests/api/*.js', {read: false})
    .pipe(mocha({repoter: 'nyan'}));
});