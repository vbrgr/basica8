import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  cars: SelectItem[];

  selectedCar: string;
  groupedCars: SelectItemGroup[];
  cities: City[];

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
      // SelectItem API with label-value pairs
    this.cities1 = [
          {label: 'Select City', value: null},
          {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
          {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
          {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
          {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
          {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
      ];

      // An array of cities
    this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];

    this.cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'},
    ];

    this.groupedCars = [
        {
            label: 'Germany',
            items: [
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Mercedes', value: 'Mercedes'}
            ]
        },
        {
            label: 'USA',
            items: [
                {label: 'Cadillac', value: 'Cadillac'},
                {label: 'Ford', value: 'Ford'},
                {label: 'GMC', value: 'GMC'}
            ]
        },
        {
            label: 'Japan',
            items: [
                {label: 'Honda', value: 'Honda'},
                {label: 'Mazda', value: 'Mazda'},
                {label: 'Toyota', value: 'Toyota'}
            ]
        }
    ];
  }

}
