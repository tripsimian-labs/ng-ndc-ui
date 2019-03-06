import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirShoppingComponent } from './air-shopping.component';

describe('AirShoppingComponent', () => {
  let component: AirShoppingComponent;
  let fixture: ComponentFixture<AirShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
