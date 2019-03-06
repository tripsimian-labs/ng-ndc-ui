import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirShoppingListOffersComponent } from './air-shopping-list-offers.component';

describe('AirShoppingListOffersComponent', () => {
  let component: AirShoppingListOffersComponent;
  let fixture: ComponentFixture<AirShoppingListOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirShoppingListOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirShoppingListOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
