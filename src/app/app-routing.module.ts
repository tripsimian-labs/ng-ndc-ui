import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AirShoppingComponent } from './air-shopping/air-shopping.component';
import { AirShoppingBasicSearchComponent } from './air-shopping/air-shopping-basic-search/air-shopping-basic-search.component';
import { AirShoppingListOffersComponent } from './air-shopping/air-shopping-list-offers/air-shopping-list-offers.component';

import { CommonModule } from '@angular/common'; 

const routes: Routes = [
{path: 'air-shopping', component: AirShoppingComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
  	FormsModule, ReactiveFormsModule, 
    BrowserModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
  AirShoppingComponent, AirShoppingBasicSearchComponent, AirShoppingListOffersComponent], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
 