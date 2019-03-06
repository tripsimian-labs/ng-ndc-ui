import { Component, OnInit, Input } from '@angular/core';

@Component({ 
  selector: 'ndc-air-shopping-list-offers',
  templateUrl: './air-shopping-list-offers.component.html',
  styleUrls: ['./air-shopping-list-offers.component.scss']
})

export class AirShoppingListOffersComponent implements OnInit {
    @Input() airShoppingOffers: any[];
	constructor (){	}
	ngOnInit() { }

  onSelect(event) {
    event.stopPropagation();
  }

  numberOfStops(legs) {
    return legs ? Array(legs.length - 1) : [];
  }

  logoUrl(airlineCode) {
    return `https://www.skyscanner.net/images/airlines/favicon/${airlineCode}.png`;
  }

  flightTime(travelTime) {
    if (!travelTime) {
      return '';
    }
    const mm = travelTime.indexOf('M');
    const d = travelTime.indexOf('D');
    const t = travelTime.indexOf('T');
    const h = travelTime.indexOf('H');
    const m = travelTime.indexOf('M', t);
    const day = travelTime.substring(mm + 1, d);
    const hour = travelTime.substring(t + 1, h);
    const min = travelTime.substring(h + 1, m);
    return `${day > 0 ? day + 'd ' : ''}${hour}h ${min}`;
  }
}
