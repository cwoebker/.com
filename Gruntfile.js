module.exports = function(grunt) {

grunt.initConfig({
  less: {
    bootstrap: {
      options: {
        paths: ["bower_components/bootstrap/less"],
        cleancss: true
      },
      files: {
        "assets/_css/bootstrap.min.css": "bower_components/bootstrap/less/bootstrap.less"
      }
    }
  },
  cssmin: {
    app: {
      files: {
        "assets/css/cwoebker.min.css": ["assets/_css/bootstrap.min.css",
                                        "assets/_css/styles.css",
                                        "assets/_css/syntax.css"]
      },
    },
  },
  uglify: {
    jquery: {
      files: {
        'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
      }
    },
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/collapse.js',
                                       'bower_components/bootstrap/js/scrollspy.js',
                                       'bower_components/bootstrap/js/button.js',
                                       'bower_components/bootstrap/js/affix.js']
      }
    }
  },
  copy: {
    bootstrap: {
      files: [
        {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['**'], dest: 'assets/fonts/'}
      ]
    }
  },
  jshint: {
    app: {
      src: ['assets/js/test.js']
    },
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
    },
    deploy: {
      cmd: 'git push heroku master'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('mini', [ 'less', 'cssmin', 'uglify', 'copy' ]);
grunt.registerTask('default', [ 'mini', 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', [ 'exec:deploy' ]);

};
