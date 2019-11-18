import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './components/input/input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { DraganddropComponent } from './components/draganddrop/draganddrop.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


const routes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'input', pathMatch: 'full', component: InputComponent},
      {path: 'autocomplete', pathMatch: 'full', component: AutocompleteComponent},
      {path: 'dropdown', pathMatch: 'full', component: DropdownComponent},
      {path: 'calendar', pathMatch: 'full', component: CalendarComponent},
      {path: 'chart', pathMatch: 'full', component: ChartComponent},
      {path: 'galleria', pathMatch: 'full', component: GalleriaComponent},
      {path: 'draganddrop', pathMatch: 'full', component: DraganddropComponent},
      {path: 'reactive-form', pathMatch: 'full', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
