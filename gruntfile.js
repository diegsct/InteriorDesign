// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Tasks
      sass: { // Begin Sass Plugin
        dist: {
          options: {
            sourceMap: false
          },
          files: [{
            expand: true,
            cwd: 'sass',
            src: ['**/*.scss'],
            dest: 'css',
            ext: '.css'
        }]
        }
      },

      cssmin: { // Begin CSS Minify Plugin
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css'
        }]
        }
      },

      watch: { // Compile everything into one task with Watch Plugin
        css: {
          files: '**/*.scss',
          tasks: ['sass', 'cssmin']
        },
        //js: {
        //  files: '**/*.js',
        //  tasks: ['uglify']
        //}
      }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
  };