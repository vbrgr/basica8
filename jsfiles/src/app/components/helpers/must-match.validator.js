"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}
exports.MustMatch = MustMatch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvaGVscGVycy9tdXN0LW1hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtEQUFrRDtBQUNsRCxTQUFnQixTQUFTLENBQUMsV0FBbUIsRUFBRSxtQkFBMkI7SUFDdEUsT0FBTyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtRQUM1QixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVoRSxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM3RCxnRkFBZ0Y7WUFDaEYsT0FBTztTQUNWO1FBRUQsbURBQW1EO1FBQ25ELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3pDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFqQkQsOEJBaUJDIn0=