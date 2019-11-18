"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const home_component_1 = require("./home/home.component");
const input_component_1 = require("./components/input/input.component");
const autocomplete_component_1 = require("./components/autocomplete/autocomplete.component");
const calendar_component_1 = require("./components/calendar/calendar.component");
const chart_component_1 = require("./components/chart/chart.component");
const galleria_component_1 = require("./components/galleria/galleria.component");
const draganddrop_component_1 = require("./components/draganddrop/draganddrop.component");
const dropdown_component_1 = require("./components/dropdown/dropdown.component");
const reactive_form_component_1 = require("./components/reactive-form/reactive-form.component");
const routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'input', pathMatch: 'full', component: input_component_1.InputComponent },
    { path: 'autocomplete', pathMatch: 'full', component: autocomplete_component_1.AutocompleteComponent },
    { path: 'dropdown', pathMatch: 'full', component: dropdown_component_1.DropdownComponent },
    { path: 'calendar', pathMatch: 'full', component: calendar_component_1.CalendarComponent },
    { path: 'chart', pathMatch: 'full', component: chart_component_1.ChartComponent },
    { path: 'galleria', pathMatch: 'full', component: galleria_component_1.GalleriaComponent },
    { path: 'draganddrop', pathMatch: 'full', component: draganddrop_component_1.DraganddropComponent },
    { path: 'reactive-form', pathMatch: 'full', component: reactive_form_component_1.ReactiveFormComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXlDO0FBQ3pDLDRDQUF1RDtBQUN2RCwwREFBc0Q7QUFDdEQsd0VBQW9FO0FBQ3BFLDZGQUF5RjtBQUN6RixpRkFBNkU7QUFDN0Usd0VBQW9FO0FBQ3BFLGlGQUE2RTtBQUM3RSwwRkFBc0Y7QUFDdEYsaUZBQTZFO0FBQzdFLGdHQUEyRjtBQUczRixNQUFNLE1BQU0sR0FBVztJQUNqQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7SUFDcEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDN0QsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO0lBQzNFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztJQUNuRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDbkUsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDN0QsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0lBQ25FLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBQztJQUN6RSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7Q0FDakYsQ0FBQztBQU1GLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIn0=