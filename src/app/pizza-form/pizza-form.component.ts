import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
     theNewPizza: any = {};
     pizzaErrors: any = {};
     pizzaSucces: boolean = false;
     @Output() onPizzaAdd = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addPizza() {
    this.pizzaErrors = {};
    if(!this.theNewPizza.name) {
      this.pizzaErrors.name = "Needs a name duh";
      this.pizzaSucces = false;
    }
    if(!this.theNewPizza.price) {
      this.pizzaErrors.price = "Needs a price duh";
      this.pizzaSucces = false;
    }
    if(!this.theNewPizza.calories) {
      this.pizzaErrors.calories = "Needs calories duh";
      this.pizzaSucces = false;
    }
    if (!this.pizzaErrors.name && !this.pizzaErrors.price && !this.pizzaErrors.calories) {
      this.onPizzaAdd.emit(this.theNewPizza);
      this.theNewPizza = {};
      this.pizzaSucces = true;
    }
  }

}
