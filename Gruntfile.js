/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
};
