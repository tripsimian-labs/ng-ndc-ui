import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirShoppingService, AirShoppingRQ } from './air-shopping.service';

@Component({
  selector: 'ndc-air-shopping',
  templateUrl: './air-shopping.component.html',
  styleUrls: ['./air-shopping.component.scss']
})
export class AirShoppingComponent implements OnInit {
  @Output() airShoppingOffersResponse:any = [];
  loading = false;

  constructor(public airShoppingService:AirShoppingService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { }
	  
  onSubmit(airShoppingRQ: AirShoppingRQ) {
    console.log("calling AirShoppingComponent.onSubmit()");
	this.airShoppingOffersResponse = [];
    this.loading = true;
    this.airShoppingService.getAirShoppingOffers(airShoppingRQ).then((airShoppingRS: {}) => {
			console.log(airShoppingRS);
			this.airShoppingOffersResponse = airShoppingRS;
			this.loading = false;
      });
  }
}
