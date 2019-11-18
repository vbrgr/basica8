import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent implements OnInit {
  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.selectedCars = [];
      this.carService.getCarsSmall().then(cars => this.availableCars = cars);
  }

  dragStart(event, car: Car) {
      this.draggedCar = car;
  }

  drop(event) {
      if (this.draggedCar) {
          const draggedCarIndex = this.findIndex(this.draggedCar);
          this.selectedCars = [...this.selectedCars, this.draggedCar];
          this.availableCars = this.availableCars.filter((val, i) => i !== draggedCarIndex);
          this.draggedCar = null;
      }
  }

  dragEnd(event) {
      this.draggedCar = null;
  }

  findIndex(car: Car) {
      let index = -1;
      for(let i = 0; i < this.availableCars.length; i++) {
          if (car.vin === this.availableCars[i].vin) {
              index = i;
              break;
          }
      }
      return index;
  }

}
