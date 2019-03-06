import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AirShoppingRQ } from '../air-shopping.service';

@Component({
  selector: 'ndc-air-shopping-basic-search',
  templateUrl: './air-shopping-basic-search.component.html',
  styleUrls: ['./air-shopping-basic-search.component.scss']
})
export class AirShoppingBasicSearchComponent implements OnInit {
  @Output() submitAirShoppingRQ = new EventEmitter<AirShoppingRQ>();
  
  //TODO - cleanup/refactor - move the variables below to AirShoppingRQ.ts
  from = 'ams';
  to = 'jfk';
  cabin = 5;
  travellers = 1;
  depart = new Date();

  cabinClasses = [
    { name: 'Economy', value: 5 },
    { name: 'Premium Economy', value: 4 },
    { name: 'Business', value: 2 },
    { name: 'First', value: 1 },
  ];
  
  travellersList = [
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
  ];
	
	constructor() { }

    ngOnInit() { }

    onSubmit() {
		console.log("calling AirShoppingBasicSearchComponent.onSubmit()");
		this.submitAirShoppingRQ.emit({
		  from: this.from ? this.from.toUpperCase() : this.from,
		  to: this.to ? this.to.toUpperCase() : this.to,
		  date: this.depart.toISOString().substr(0, this.depart.toISOString().indexOf('T')),
		  cabinClass: this.cabin,
		  nbPax: this.travellers
		});
  }
}
