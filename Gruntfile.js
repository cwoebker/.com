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
  imagemin: {
    app: {
      options: {
        cache: false,
        pngquant: true
      },
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'assets/_img/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif,jpeg}'],   // Actual patterns to match
        dest: 'assets/img/'                  // Destination path prefix
      }]
    }
  },
  uglify: {
    app: {
      files: {
        'assets/js/cwoebker.min.js': ['bower_components/jquery/jquery.js',
                                      'bower_components/bootstrap/js/transition.js',
                                      'bower_components/bootstrap/js/collapse.js',
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
      src: ['bower_components/jquery/jquery.js',
            'bower_components/bootstrap/js/collapse.js',
            'bower_components/bootstrap/js/scrollspy.js',
            'bower_components/bootstrap/js/button.js',
            'bower_components/bootstrap/js/affix.js']
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
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('mini', [ 'less', 'cssmin', 'uglify', 'copy' ]);
grunt.registerTask('test', [ 'jshint' ]);
grunt.registerTask('default', [ 'mini', 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', [ 'exec:deploy' ]);

};
