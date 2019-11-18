import {Config} from 'protractor';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config:Config={
        //seleniumAddress: 'http://localhost:4444/wd/hub',
        directConnect: true,
        specs: ['test-spec.js'],
        /* capabilities: {
                browserName: 'chrome'
              }, */
              multiCapabilities: [{
                browserName: 'chrome'
              }],
              jasmineNodeOpts: {
                showColors: true,
              },
              onPrepare: function() {
                jasmine.getEnv().addReporter(
                  new Jasmine2HtmlReporter({
                    savePath: 'target'
                  })
                );
        },
        suites: {
          Smoke: ['calc-spec.js','todo-spec.js'],
          Regression: 'test-spec.js',
        }

    };
