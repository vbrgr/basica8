"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_highcharts_1 = require("angular-highcharts");
let ChartComponent = class ChartComponent {
    constructor() {
        this.chart = new angular_highcharts_1.Chart({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Linechart'
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Line 1',
                    data: [1, 2, 3],
                    type: undefined
                }]
        });
    }
    // add point to chart serie
    add() {
        this.chart.addPoint(Math.floor(Math.random() * 10));
    }
    ngOnInit() {
    }
};
ChartComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-chart',
        templateUrl: './chart.component.html',
        styleUrls: ['./chart.component.css']
    })
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnRzL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFDbEQsMkRBQTJDO0FBTzNDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekI7UUFFQSxVQUFLLEdBQUcsSUFBSSwwQkFBSyxDQUFDO1lBQ2hCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQztTQUNMLENBQUMsQ0FBQztJQWhCSCxDQUFDO0lBa0JELDJCQUEyQjtJQUMzQixHQUFHO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBNUJZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQztHQUNXLGNBQWMsQ0E0QjFCO0FBNUJZLHdDQUFjIn0=