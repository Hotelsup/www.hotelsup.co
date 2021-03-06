module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass-task'],
      },
      js: {
        files: ['js/pushy.js'],
        tasks: ['js-task'],
      },
    },
    concat: {
        options: {
          stripBanners: false,
          separator: ';'
        },
        dist: {
          src: [
                'js/pushy.js'
                ],
          dest: 'js/pushy.min.js',
        },
    },
    uglify: {
        dist: {
          files: {
              'js/pushy.min.js': 'js/pushy.min.js'
          }
        }
    },
    sass: {
      dist: {
        options: {
          outputStyle: 'expanded' //output style: nested, compact, compressed, expanded
        },
        files: {
          'css/pushy.css': 'scss/pushy.scss', // 'destination': 'source'
          'css/demo.css': 'scss/demo.scss'
        }
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('js-task', ['concat', 'uglify']);
  grunt.registerTask('sass-task', ['sass']);

};
