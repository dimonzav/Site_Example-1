module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
    	files: ['Gruntfile.js', 'js/*.js']
    },
    uglify: {
    	dist: {
    		files: [{
    			src: 'js/animation.js',
    			dest: 'build/scripts.js'
    		}]
    	}
    },
    cssmin: {
    	target: {
    		files: [{
    			src: 'css/main.css',
    			dest: 'build/main.min.css',
    		}]
    	}
    },
    watch: {
    	options: {
    		livereload: true
    	},
    	css: {
    		files: 'css/main.css',
    		tasks: ['cssmin']
    	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};