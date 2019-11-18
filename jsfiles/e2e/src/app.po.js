"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AppPage {
    navigateTo() {
        return protractor_1.browser.get(protractor_1.browser.baseUrl);
    }
    getTitleText() {
        return protractor_1.element(protractor_1.by.css('app-root .content span')).getText();
    }
}
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZTJlL3NyYy9hcHAucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFFbEQsTUFBYSxPQUFPO0lBQ2xCLFVBQVU7UUFDUixPQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsT0FBTyxDQUFpQixDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBcUIsQ0FBQztJQUNoRixDQUFDO0NBQ0Y7QUFSRCwwQkFRQyJ9