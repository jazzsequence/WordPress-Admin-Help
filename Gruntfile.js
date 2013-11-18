/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				banner: 'jQuery(function( $ ) {',
				footer: '});',
				stripBanners: false
			},
			dist: {
				files: {
					'js/adminhelp-plugins.js': [ 'js/raw/help-test.js' ]
				}
			}
		},

		uglify: {
			build: {
				expand: true,
				cwd: 'js/',
				dest: 'js/',
				ext: '.min.js',
				src: [
					'*.js'
				]
			}
		},

		autoprefixer: {
			prefix: {
				files: {

				}
			}
		},

		cssmin: {
			minify: {
				files: {

				}
			}
		},

		sass: {
			dist: {
				files: {
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );

	grunt.registerTask( 'css', ['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask( 'default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify'] );
};
