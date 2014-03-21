module.exports = function(grunt) {

grunt.initConfig({
  cssmin: {
    production: {
      files: {
        "assets/css/styles.min.css": "assets/css/styles.css",
        "assets/css/syntax.min.css": "assets/css/syntax.css"
      },
    },
  },
  less: {
    production: {
      options: {
        paths: ["bower_components/bootstrap/less"],
        cleancss: true
      },
      files: {
        "assets/css/application.min.css": "assets/_less/application.less",
        "assets/css/bootstrap.min.css": "bower_components/bootstrap/less/bootstrap.less"
      }
    }
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

grunt.registerTask('default', [ 'cssmin', 'less', 'uglify', 'copy', 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
