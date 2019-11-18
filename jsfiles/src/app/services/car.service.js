"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CarService = class CarService {
    constructor(http) {
        this.http = http;
    }
    getCarsSmall() {
        return this.http.get('assets/data/cars-small.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getCarsMedium() {
        return this.http.get('assets/data/cars-medium.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getCarsLarge() {
        return this.http.get('assets/data/cars-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getCarsHuge() {
        return this.http.get('assets/data/cars-huge.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
};
CarService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL3NlcnZpY2VzL2Nhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEyQztBQU0zQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBQ2pCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDZCQUE2QixDQUFDO2FBQ3JELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFhLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDhCQUE4QixDQUFDO2FBQ3RELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFhLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDZCQUE2QixDQUFDO2FBQ3JELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFhLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVILFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLDRCQUE0QixDQUFDO2FBQ3BELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFhLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGLENBQUE7QUE5QlUsVUFBVTtJQUh0QixpQkFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFVBQVUsQ0E4QnBCO0FBOUJVLGdDQUFVIn0=