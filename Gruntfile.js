var path = require("path");

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-gitbook');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  var TEST_PORT = grunt.option('testPort') || 8000;
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    'gitbook': {
      development: {
        input: "./",
        github: "maidsafe/systemdocs"
      }
    },
    'gh-pages': {
      options: {
        base: '_book'
      },
      src: ['**']
    },
    'clean': {
      files: ['.grunt' , '_book']
    },
    'connect': {
      serve: {
        options: {
          port: TEST_PORT,
          base: [
            './_book'
          ]
        }
      }
    },
    'link-checker': {
      options: {
        maxConcurrency: 20,
        noFragment: true
      },
      dev: {
        site: 'localhost',
        options: {
          initialPort: TEST_PORT,
          callback: function(crawler) {
            crawler.supportedMimeTypes = [
              /^text\//i,
              /^application\/(rss|html|xhtml)?[\+\/\-]?xml/i,
              /^xml/i
            ];
          }
        }
      }
    }
  });

  /*grunt.registerTask('publish', [
    'gitbook',
    'gh-pages',
    'clean'
  ]);*/

  grunt.registerTask('default', [
    'gitbook'
  ]);

  grunt.registerTask('test', [
    'default',
    'connect:serve',
    'link-checker'
  ]);
};