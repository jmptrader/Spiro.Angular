// Karma configuration
// Generated on Tue Jun 03 2014 11:24:37 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'Scripts/underscore.js',
      'Scripts/angular.js',
      'Scripts/angular-route.js',
      'Scripts/angular-touch.js',
      'Scripts/angular-mocks.js',
      'Scripts/spiro.placeholder.app.js',
      'Scripts/spiro.config.js',
      'Scripts/spiro.models.helpers.js',
      'Scripts/spiro.models.shims.js',
      'Scripts/spiro.models.js',    
      'Scripts/spiro.angular.services.representationloader.js',
      'Scripts/spiro.angular.services.color.js',
      'Scripts/spiro.angular.services.mask.js',
      'Tests/specs/helpers.js',
      'Tests/specs/colorService.js',
      'Tests/specs/maskService.js'    
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'Scripts/spiro.angular*.*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],

    
    junitReporter : {
        outputFile: 'test-results/karma-test-results.xml'
    },
    
    coverageReporter : {
        type: 'cobertura',
        dir: 'coverage'
    },

    // web server port
    port: 9876,

      // cli runner port
    runnerPort : 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    captureTimeout : 60000,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['IE'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
