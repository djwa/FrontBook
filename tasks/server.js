const gulp = require('gulp');
const connect = require('gulp-connect');

/**
 * Task: gulp server
 * Starts the web server.
 */
gulp.task('server', () => {
	connect.server({
		port: 9000,
		root: 'public'
	});
});