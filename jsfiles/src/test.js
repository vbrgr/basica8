"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-testing");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpR0FBaUc7O0FBRWpHLHFDQUFtQztBQUNuQyxtREFBbUQ7QUFDbkQsdUVBR21EO0FBSW5ELHFEQUFxRDtBQUNyRCxvQkFBVSxFQUFFLENBQUMsbUJBQW1CLENBQzlCLHFDQUEyQixFQUMzQix1Q0FBNkIsRUFBRSxDQUNoQyxDQUFDO0FBQ0YsOEJBQThCO0FBQzlCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRCx3QkFBd0I7QUFDeEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyJ9