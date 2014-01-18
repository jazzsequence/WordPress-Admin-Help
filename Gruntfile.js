/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				expand: true,
				cwd: 'js/',
				dest: 'js/',
				ext: '.min.js',
				src: [
					'*.js',
					'!*.min.js'
				]
			}
		},

		watch: {
			scripts: {
				files: [
					'js/*.js',
					'!js/*.min.js'
				],
				tasks: ['js']
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'css', ['sass', 'autoprefixer', 'cssmin'] );
	grunt.registerTask( 'js', ['uglify'] );
	grunt.registerTask( 'default', ['sass', 'autoprefixer', 'cssmin', 'uglify'] );
};
