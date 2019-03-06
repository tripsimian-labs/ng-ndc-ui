import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirShoppingComponent } from './air-shopping.component';
import { AirShoppingBasicSearchComponent } from './air-shopping-basic-search/air-shopping-basic-search.component';
import { AirShoppingListOffersComponent } from './air-shopping-list-offers/air-shopping-list-offers.component';

@NgModule({
  declarations: [AirShoppingComponent, AirShoppingBasicSearchComponent, AirShoppingListOffersComponent],
  imports: [
    CommonModule
  ]
})
export class AirShoppingModule { }
