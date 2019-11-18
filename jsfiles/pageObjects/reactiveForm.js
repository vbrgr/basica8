"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ReactiveForm {
    constructor() {
        this.title = protractor_1.element(protractor_1.by.css('select[formControlName=title]'));
        this.firstName = protractor_1.element(protractor_1.by.css('input[formControlName=firstName]'));
        this.lastName = protractor_1.element(protractor_1.by.css('input[formControlName=lastName]'));
        this.email = protractor_1.element(protractor_1.by.css('input[formControlName=email]'));
        this.password = protractor_1.element(protractor_1.by.css('input[formControlName=password]'));
        this.confirmpassword = protractor_1.element(protractor_1.by.css('input[formControlName=confirmPassword]'));
        this.acceptTerms = protractor_1.element(protractor_1.by.css('input[formControlName=acceptTerms]'));
        this.submit = protractor_1.element(protractor_1.by.id('submit-btn'));
    }
}
exports.ReactiveForm = ReactiveForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVGb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcmVhY3RpdmVGb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBQ3RELE1BQWEsWUFBWTtJQVN2QjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFJLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsR0FBSSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxXQUFXLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQW5CRCxvQ0FtQkMifQ==