"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const must_match_validator_1 = require("../helpers/must-match.validator");
// import custom validator to validate that password and confirm password fields match
let ReactiveFormComponent = class ReactiveFormComponent {
    // tslint:disable-next-line: adjacent-overload-signatures
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.submittedsuccess = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required],
            acceptTerms: [false, forms_1.Validators.requiredTrue]
        }, {
            validator: must_match_validator_1.MustMatch('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.submittedsuccess = true;
        }
        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
ReactiveFormComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-reactive-form',
        templateUrl: './reactive-form.component.html',
        styleUrls: ['./reactive-form.component.css']
    })
], ReactiveFormComponent);
exports.ReactiveFormComponent = ReactiveFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFDbEQsMENBQW9FO0FBQ3BFLDBFQUE0RDtBQUU1RCxzRkFBc0Y7QUFPdEYsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFLOUIseURBQXlEO0lBQ3pELFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDlDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBRXlCLENBQUM7SUFFakQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUMxQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsa0JBQVUsQ0FBQyxZQUFZLENBQUM7U0FDaEQsRUFBRTtZQUNDLFNBQVMsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztTQUNyRCxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsb0RBQW9EO0lBQ3BELElBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTlDLFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QiwrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUMzQixPQUFPO1NBQ1Y7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7UUFFRCxpQ0FBaUM7UUFDbEMsaUZBQWlGO0lBQ3BGLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0osQ0FBQTtBQTNDWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUM3QyxDQUFDO0dBQ1cscUJBQXFCLENBMkNqQztBQTNDWSxzREFBcUIifQ==