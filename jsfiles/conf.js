"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
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
    onPrepare: function () {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target'
        }));
    },
    suites: {
        Smoke: ['calc-spec.js', 'todo-spec.js'],
        Regression: 'test-spec.js',
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzdELFFBQUEsTUFBTSxHQUFRO0lBQ2pCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdkI7O2VBRVc7SUFDTCxpQkFBaUIsRUFBRSxDQUFDO1lBQ2xCLFdBQVcsRUFBRSxRQUFRO1NBQ3RCLENBQUM7SUFDRixlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUNILENBQUM7SUFDVixDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLENBQUMsY0FBYyxFQUFDLGNBQWMsQ0FBQztRQUN0QyxVQUFVLEVBQUUsY0FBYztLQUMzQjtDQUVKLENBQUMifQ==